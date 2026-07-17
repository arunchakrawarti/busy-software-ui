"use client";

import { useState } from "react";
import CompanyStats from "./CompanyStats";
import CompanyToolbar from "./CompanyToolbar";
import CompanyOverviewTable from "./CompanyOverviewTable";
import CompanyFormModal from "./CompanyFormModal";

const MainCompany = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-6">

            <CompanyStats />

            <CompanyToolbar
                onAddCompany={() => setIsOpen(true)}
            />

            <CompanyOverviewTable />

            <CompanyFormModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

        </div>
    );
};

export default MainCompany;