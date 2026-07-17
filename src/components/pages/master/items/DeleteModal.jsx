"use client";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Button from "@/components/common/Button";

const DeleteModal = ({ isOpen, onClose, selected }) => {
    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="w-md">
            <Card title="Delete Item">

                <p className="text-sm text-gray-600">
                    Delete <span className="font-semibold">{selected?.name}</span> ?
                </p>

                <div className="flex justify-end gap-2 mt-5">

                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button variant="danger">
                        Delete
                    </Button>

                </div>

            </Card>
        </OverlayModal>
    );
};

export default DeleteModal;