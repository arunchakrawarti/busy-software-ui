"use client";

import { useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import { AlertModal } from "@/components/common/AlertModal";

import Toolbar from "./Toolbar";
import Filters from "./Filters";
import Stats from "./Stats";
import RolesTable from "./RolesTable";
import Modal from "./Modal";

import {
    rolesData,
    defaultRole,
} from "@/config/RolesDummyData";

const MainRoles = () => {

    const [rows, setRows] = useState(rolesData);

    const [open, setOpen] = useState(false);

    const [editing, setEditing] = useState(null);

    const [deleteRow, setDeleteRow] = useState(null);

    const handleAdd = () => {
        setEditing(null);
        setOpen(true);
    };

    const handleEdit = (row) => {
        setEditing(row);
        setOpen(true);
    };

    const handleDelete = (row) => {
        setDeleteRow(row);
    };

    const handleSave = (data) => {

        if (editing) {

            setRows((prev) =>
                prev.map((item) =>
                    item.id === editing.id
                        ? {
                            ...data,
                            id: editing.id,
                        }
                        : item
                )
            );

        } else {

            setRows((prev) => [
                {
                    ...data,
                    id: Date.now(),
                },
                ...prev,
            ]);

        }

        setOpen(false);

    };

    const confirmDelete = () => {

        setRows((prev) =>
            prev.filter((item) => item.id !== deleteRow.id)
        );

        setDeleteRow(null);

    };

    return (

        <div className="space-y-6">

            <Stats
                rolesData={rows}
            />

            <Filters />

            <Toolbar
                onAdd={handleAdd}
            />

            <RolesTable
                data={rows}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <OverlayModal
                isOpen={open}
                onClose={() => setOpen(false)}
                modalClass="max-w-2xl h-full mt-4 pb-4"
            >
                <Modal
                    initialData={editing || defaultRole}
                    onClose={() => setOpen(false)}
                    onSave={handleSave}
                />
            </OverlayModal>

            <OverlayModal
                isOpen={!!deleteRow}
                onClose={() => setDeleteRow(null)}
                modalClass="max-w-md"
            >
                <AlertModal
                    icon="delete"
                    title="Delete Role"
                    message={`Delete role "${deleteRow?.roleName}" ?`}
                    iconWrapperClass="bg-red-100 text-red-600"
                    buttons={[
                        {
                            text: "Cancel",
                            colorClass:
                                "bg-gray-100 text-gray-700 hover:bg-gray-200",
                            onClick: () => setDeleteRow(null),
                        },
                        {
                            text: "Delete",
                            colorClass:
                                "bg-red-600 text-white hover:bg-red-700",
                            onClick: confirmDelete,
                        },
                    ]}
                />
            </OverlayModal>

        </div>

    );

};

export default MainRoles;