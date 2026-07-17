// components/pages/vouchers/journal/JournalEntries.jsx

"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const accountOptions = [
    {
        label: "Cash Account",
        value: "Cash Account",
    },
    {
        label: "Bank Account",
        value: "Bank Account",
    },
    {
        label: "Purchase Account",
        value: "Purchase Account",
    },
    {
        label: "Sales Account",
        value: "Sales Account",
    },
    {
        label: "GST Input",
        value: "GST Input",
    },
    {
        label: "GST Output",
        value: "GST Output",
    },
];

const JournalEntries = ({
    entries,
    setEntries,
}) => {

    const handleChange = (
        index,
        key,
        value
    ) => {

        const data = [...entries];

        data[index][key] = value;

        setEntries(data);

    };

    const handleAddRow = () => {

        setEntries((prev) => [
            ...prev,
            {
                account: "",
                debit: "",
                credit: "",
                remark: "",
            },
        ]);

    };

    const handleDeleteRow = (index) => {

        if (entries.length === 1) return;

        setEntries((prev) =>
            prev.filter((_, i) => i !== index)
        );

    };

    return (

        <div className="space-y-5">

            <div className="flex items-center justify-between">

                <div>

                    <h3 className="text-lg font-semibold text-gray-800">
                        Journal Entries
                    </h3>

                    <p className="text-sm text-gray-500">
                        Add debit and credit ledger entries.
                    </p>

                </div>

                <Button
                    icon="add-line"
                    onClick={handleAddRow}
                >
                    Add Entry
                </Button>

            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">

                <table className="min-w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="w-16 border-b border-gray-200 p-3 text-center">
                                #
                            </th>

                            <th className="min-w-[250px] border-b border-gray-200 p-3 text-left">
                                Account
                            </th>

                            <th className="min-w-[170px] border-b border-gray-200 p-3 text-left">
                                Debit
                            </th>

                            <th className="min-w-[170px] border-b border-gray-200 p-3 text-left">
                                Credit
                            </th>

                            <th className="min-w-[250px] border-b border-gray-200 p-3 text-left">
                                Remark
                            </th>

                            <th className="w-20 border-b border-gray-200 p-3 text-center">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {entries.map((row, index) => (

                            <tr
                                key={index}
                                className="border-b border-gray-100 hover:bg-gray-50"
                            >

                                <td className="p-3 text-center font-medium">
                                    {index + 1}
                                </td>

                                <td className="p-2">

                                    <Input
                                        type="select"
                                        value={row.account}
                                        options={accountOptions}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "account",
                                                e.target.value
                                            )
                                        }
                                    />

                                </td>

                                <td className="p-2">

                                    <Input
                                        placeholder="0.00"
                                        value={row.debit}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "debit",
                                                e.target.value
                                            )
                                        }
                                    />

                                </td>

                                <td className="p-2">

                                    <Input
                                        placeholder="0.00"
                                        value={row.credit}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "credit",
                                                e.target.value
                                            )
                                        }
                                    />

                                </td>

                                <td className="p-2">

                                    <Input
                                        placeholder="Remark..."
                                        value={row.remark}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "remark",
                                                e.target.value
                                            )
                                        }
                                    />

                                </td>

                                <td className="text-center">

                                    <button
                                        title="Delete"
                                        onClick={() =>
                                            handleDeleteRow(index)
                                        }
                                        className="cursor-pointer text-red-600 hover:text-red-800"
                                    >
                                        <i className="ri-delete-bin-6-line text-lg" />
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default JournalEntries;