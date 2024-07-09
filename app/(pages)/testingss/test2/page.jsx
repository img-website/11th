"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

// data.js
const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" }
];

export default function CusPage() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set());

    const handleSelectionChange = (keys) => {
        setSelectedKeys(keys);
    };

    const selectedAnimals = Array.from(selectedKeys).map((key) =>
        animals.find((animal) => animal.key === key)
    );

    return (
        <div className="flex w-full max-w-xs flex-col gap-2">
            <Select
                label="Favorite Animals"
                variant="bordered"
                placeholder="Select animals"
                selectedKeys={selectedKeys}
                className="max-w-xs"
                selectionMode="multiple"
                onSelectionChange={handleSelectionChange}
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
            <p className="text-small text-default-500">
                Selected:{" "}
                {selectedAnimals.map((animal) => `${animal.label} (Key: ${animal.key})`).join(", ")}
            </p>
        </div>
    );
}
