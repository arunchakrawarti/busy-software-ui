"use client";

import OverlayModal from "@/components/common/OverlayModal";
import { AlertModal } from "@/components/common/AlertModal";

const WarehouseDeleteModal = ({
    isOpen,
    onClose,
    selected,
}) => {
    const handleDelete = () => {
        console.log("DELETE WAREHOUSE :", selected);

        onClose();
    };

    return (
        <OverlayModal
            isOpen={isOpen}
            onClose={onClose}
            modalClass="max-w-md"
            showCloseIcon={false}
        >
            <AlertModal
                icon="delete"
                title="Delete Warehouse"
                message={`Are you sure you want to delete "${selected?.name || "this warehouse"
                    }"? This action cannot be undone.`}
                iconWrapperClass="bg-red-100 text-red-600"
                buttons={[
                    {
                        text: "Cancel",
                        onClick: onClose,
                        colorClass:
                            "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    },
                    {
                        text: "Delete",
                        onClick: handleDelete,
                        colorClass:
                            "bg-red-600 text-white hover:bg-red-700",
                    },
                ]}
            />
        </OverlayModal>
    );
};

export default WarehouseDeleteModal;