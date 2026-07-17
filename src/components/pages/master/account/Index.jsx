"use client";

import { useMemo, useState } from "react";

import Toolbar from "./Toolbar";
import OverviewTable from "./OverviewTable";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";

import { accounts as initialData } from "@/config/AccountMasterDummyData";

const MainAccountMaster = () => {
    const [data, setData] = useState(initialData);

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");

    const [selected, setSelected] = useState(null);

    const [modal, setModal] = useState({
        form: false,
        delete: false,
    });

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            const matchSearch =
                item.name.toLowerCase().includes(search.toLowerCase());

            const matchType = type ? item.type === type : true;
            const matchStatus = status ? item.status === status : true;

            return matchSearch && matchType && matchStatus;
        });
    }, [data, search, type, status]);

    const handleAdd = () => {
        setSelected(null);
        setModal((p) => ({ ...p, form: true }));
    };

    const handleEdit = (row) => {
        setSelected(row);
        setModal((p) => ({ ...p, form: true }));
    };

    const handleDelete = (row) => {
        setSelected(row);
        setModal((p) => ({ ...p, delete: true }));
    };

    return (
        <>
            <Toolbar
                search={search}
                type={type}
                status={status}
                onSearchChange={(e) => setSearch(e.target.value)}
                onTypeChange={(e) => setType(e.target.value)}
                onStatusChange={(e) => setStatus(e.target.value)}
                onAdd={handleAdd}
            />

            <OverviewTable
                data={filteredData}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={modal.form}
                onClose={() => setModal((p) => ({ ...p, form: false }))}
                selected={selected}
            />

            <DeleteModal
                isOpen={modal.delete}
                onClose={() => setModal((p) => ({ ...p, delete: false }))}
                selected={selected}
            />
        </>
    );
};

export default MainAccountMaster;