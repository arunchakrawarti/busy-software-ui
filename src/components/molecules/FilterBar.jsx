// components/molecules/FilterBar.jsx

"use client";

import Card from "./Card";

const FilterBar = ({
    children,
    className = "",
}) => {
    return (
        <Card className={`mb-5 ${className}`}>

            <div className="flex flex-col gap-4 lg:flex-row  lg:items-end">

                {children}

            </div>

        </Card>
    );
};

export default FilterBar;