"use client";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Button from "@/components/common/Button";

const DeleteModal = ({ isOpen, onClose, financialYear }) => {
    const handleDelete = () => {
        console.log("DELETE:", financialYear);
        onClose?.();
    };

    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="max-w-md bg-white rounded1">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 ml-4 mt-4">
                <i className="ri-delete-bin-6-line text-3xl text-red-600" />
            </div>
            <Card title="Delete Financial Year">

                <p className="text-sm text-gray-600">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">
                        {financialYear?.financialYear}
                    </span>{" "}
                    ?
                </p>

                <div className="flex justify-end gap-2 mt-5">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
            </Card>
        </OverlayModal>
    );
};

export default DeleteModal;