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
    const [selectedItem, setSelectedItem] = React.useState({ key: "", label: "" });

    const handleSelectionChange = (keys) => {
        if (keys.size === 0) {
            setSelectedItem({ key: "", label: "" });
        } else {
            const selectedKey = [...keys][0];
            const selectedAnimal = animals.find(animal => animal.key === selectedKey);
            setSelectedItem({ key: selectedAnimal.key, label: selectedAnimal.label });
        }
    };

    return (
        <div className="flex w-full max-w-xs flex-col gap-2">
            <Select
                label="Favorite Animal"
                variant="bordered"
                placeholder="Select an animal"
                selectedKeys={new Set([selectedItem.key])}
                className="max-w-xs"
                onSelectionChange={handleSelectionChange}
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
            <p className="text-small text-default-500">
                Selected: {selectedItem.label} (Key: {selectedItem.key})
            </p>
        </div>
    );
}
