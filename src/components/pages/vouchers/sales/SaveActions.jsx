"use client";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/molecules/Card";

const SaveActions = () => {
    return (
        <Card
            title="Actions"
            bodyClassName="space-y-5"
        >
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                    Voucher Status
                </span>

                <Badge
                    text="Draft"
                    customStyle="bg-blue-100 text-blue-700 border-blue-200"
                />
            </div>

            <div className="space-y-3">

                <Button
                    variant="primary"
                    className="w-full"
                >
                    Save Voucher
                </Button>

                <Button
                    variant="outline"
                    className="w-full"
                >
                    Save & Print
                </Button>

                <Button
                    variant="default"
                    className="w-full"
                >
                    Save Draft
                </Button>

                <Button
                    variant="ghost"
                    className="w-full"
                >
                    Cancel
                </Button>

            </div>

            <div className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
                After saving, the voucher will be available in reports and ledger entries.
            </div>
        </Card>
    );
};

export default SaveActions;