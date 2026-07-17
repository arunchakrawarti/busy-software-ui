"use client";

import { useMemo, useState } from "react";

import Toolbar from "./Toolbar";
import OverviewTable from "./OverviewTable";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";

import { items as initialData } from "@/config/ItemMasterDummyData";

const MainItemsMaster = () => {
    const [data, setData] = useState(initialData);

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");

    const [modal, setModal] = useState({
        form: false,
        delete: false,
    });

    const [selected, setSelected] = useState(null);

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            const matchSearch =
                item.name.toLowerCase().includes(search.toLowerCase());

            const matchType = type ? item.type === type : true;

            return matchSearch && matchType;
        });
    }, [data, search, type]);

    return (
        <>
            <Toolbar
                search={search}
                type={type}
                onSearchChange={(e) => setSearch(e.target.value)}
                onTypeChange={(e) => setType(e.target.value)}
                onAdd={() =>
                    setModal((p) => ({ ...p, form: true }))
                }
            />

            <OverviewTable
                data={filteredData}
                onEdit={(row) => {
                    setSelected(row);
                    setModal((p) => ({ ...p, form: true }));
                }}
                onDelete={(row) => {
                    setSelected(row);
                    setModal((p) => ({ ...p, delete: true }));
                }}
            />

            <Modal
                isOpen={modal.form}
                onClose={() =>
                    setModal((p) => ({ ...p, form: false }))
                }
                selected={selected}
            />

            <DeleteModal
                isOpen={modal.delete}
                onClose={() =>
                    setModal((p) => ({ ...p, delete: false }))
                }
                selected={selected}
            />
        </>
    );
};

export default MainItemsMaster;