"use client";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Button from "@/components/common/Button";

const DeleteModal = ({ isOpen, onClose, selected }) => {
    const handleDelete = () => {
        console.log("DELETE:", selected);
        onClose();
    };

    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="w-md ">
            <Card title="Delete Account">

                <p className="text-sm text-gray-600">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">
                        {selected?.name}
                    </span>?
                </p>

                <div className="flex justify-end gap-2 mt-5">
                    <Button variant="ghost" onClick={onClose}>
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