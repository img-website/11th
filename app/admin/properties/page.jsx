"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Card,
  CardBody,
  Snippet,
  useDisclosure,
} from "@nextui-org/react";
import { ChevronDownIcon, PlusIcon, SearchIcon, VerticalDotsIcon } from "@/components/icons";
import { Timestamp, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useFirebase } from "@/app/context/Firebase";
import moment from "moment";
import PropertyDetailModal from "@/components/modal/propertyDetail";
import { toast } from "sonner";
import Link from "next/link";
// import {PlusIcon} from "./PlusIcon";
// import {VerticalDotsIcon} from "./VerticalDotsIcon";
// import {SearchIcon} from "./SearchIcon";
// import {ChevronDownIcon} from "./ChevronDownIcon";
// import {columns, users, statusOptions} from "./data";
// import {capitalize} from "./utils";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["title", "sale_price", "type", "isVarified", "condition", "status", "actions"];

export default function PropertiesPage() {
  const { firebaseDB: db } = useFirebase();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProperty, setSelectedProperty] = useState({})
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });

  // data start 

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "PRICE", uid: "sale_price", sortable: true },
    { name: "TYPE", uid: "type", sortable: true },
    { name: "DATE", uid: "createdAt", sortable: true },
    { name: "VARIFIED", uid: "isVarified", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
  ];


  const getAllData = async () => {
    const collectionRef = collection(db, "properties");
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collectionRef);
      const res = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(res)
      return res;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
    } finally {
      setLoading(false);
    }
  }

  const deleteData = async (id) => {
    try {
      const docRef = doc(db, "properties", id);
      await deleteDoc(docRef);
      toast.warning("Document successfully deleted!",
        { description: `Document ID: ${id}` }
      )
    } catch (error) {
      toast.error("Error deleting document",
        { description: `Document ID: ${id}` }
      )
    }
  }



  useEffect(() => {
    getAllData()
  }, [])

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user?.title?.toLowerCase()?.includes(filterValue?.toLowerCase()) ||
        user?.type?.toLowerCase()?.includes(filterValue?.toLowerCase()) ||
        user?.id?.includes(filterValue) ||
        user?.sale_price?.toString()?.includes(filterValue),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "id":
        return (
          <Snippet symbol=" ">{user?.id}</Snippet>
        );
      case "title":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.banner }}
            description={user.condition}
            name={user.title}
          >
            {user.condition}
          </User>
        );
      case "isVarified":
        return (
          <Chip
            size="sm"
            variant="dot"
            color={user?.isVarified ? "success" : "danger"}
          >
            {user?.isVarified ? "Verified" : "Not Verified"}
          </Chip>
        );
      case "type":
        return (
          <span className="capitalize">{user?.type}</span>
        );
      case "sale_price":
        return (
          <span className="font-bold">₹{user?.sale_price?.toLocaleString()}</span>
        );
      case "createdAt":
        return (
          <>{moment(new Timestamp(user?.createdAt?.seconds, user?.createdAt?.nanoseconds).toDate().toISOString()).format('ddd DD MMM YYYY')}</>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap['active']} size="sm" variant="flat">
            Active
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onPress={() => {
                  onOpen()
                  setSelectedProperty(user)
                }}>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem onPress={() => deleteData(user.id)}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button as={Link} href="/admin/properties/add" color="primary" endContent={<PlusIcon />}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {data.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    data.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 relative py-8">
        <Card>
          <CardBody>
            <Table
              aria-label="Example table with custom cells, pagination and sorting"
              isHeaderSticky
              bottomContent={bottomContent}
              bottomContentPlacement="outside"
              classNames={{
                wrapper: "max-h-[382px]",
              }}
              selectedKeys={selectedKeys}
              selectionMode="multiple"
              sortDescriptor={sortDescriptor}
              topContent={topContent}
              topContentPlacement="outside"
              onSelectionChange={setSelectedKeys}
              onSortChange={setSortDescriptor}
            >
              <TableHeader columns={headerColumns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                    allowsSorting={column.sortable}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody emptyContent={"No users found"} items={sortedItems}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
      {isOpen && <PropertyDetailModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} selectedProperty={selectedProperty} />}
    </>
  );
}
