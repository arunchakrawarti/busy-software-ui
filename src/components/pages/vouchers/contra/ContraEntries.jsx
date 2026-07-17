// components/pages/vouchers/contra/ContraEntries.jsx

"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const ContraEntries = ({ entries = [], setEntries }) => {

    const handleChange = (index, key, value) => {

        const updated = [...entries];

        updated[index][key] = value;

        setEntries(updated);

    };

    const addRow = () => {

        setEntries([
            ...entries,
            {
                fromAccount: "",
                toAccount: "",
                amount: "",
                remark: "",
            },
        ]);

    };

    const removeRow = (index) => {

        const updated = entries.filter((_, i) => i !== index);

        setEntries(updated);

    };

    return (

        <div className="space-y-4">

            <div className="flex items-center justify-between">

                <h3 className="text-sm font-semibold text-gray-800">
                    Contra Entries
                </h3>

                <Button
                    size="sm"
                    variant="outline"
                    icon="ri-add-line"
                    onClick={addRow}
                >
                    Add Row
                </Button>

            </div>

            <div className="space-y-3">

                {entries.map((row, index) => (

                    <div
                        key={index}
                        className="grid grid-cols-1 gap-3 rounded-lg border border-gray-200 p-3 lg:grid-cols-4"
                    >

                        <Input
                            placeholder="From Account"
                            value={row.fromAccount}
                            onChange={(e) =>
                                handleChange(index, "fromAccount", e.target.value)
                            }
                        />

                        <Input
                            placeholder="To Account"
                            value={row.toAccount}
                            onChange={(e) =>
                                handleChange(index, "toAccount", e.target.value)
                            }
                        />

                        <Input
                            type="number"
                            placeholder="Amount"
                            value={row.amount}
                            onChange={(e) =>
                                handleChange(index, "amount", e.target.value)
                            }
                        />

                        <div className="flex items-center gap-2">

                            <Input
                                placeholder="Remark"
                                value={row.remark}
                                onChange={(e) =>
                                    handleChange(index, "remark", e.target.value)
                                }
                            />

                            <Button
                                size="sm"
                                variant="danger"
                                icon="ri-delete-bin-line"
                                onClick={() => removeRow(index)}
                            />
                        </div>

                    </div>

                ))}

                {entries.length === 0 && (
                    <p className="text-sm text-gray-500">
                        No entries added
                    </p>
                )}

            </div>

        </div>

    );

};

export default ContraEntries;