"use client";

import { useState } from "react";

import Toolbar from "./Toolbar";
import OverviewTable from "./OverviewTable";
import Modal from "./Modal";

const MainFinancialYear = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="space-y-6">
            <Toolbar
                onAdd={() => setIsFormOpen(true)}
            />

            <OverviewTable />

            <Modal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </div>
    );
};

export default MainFinancialYear;