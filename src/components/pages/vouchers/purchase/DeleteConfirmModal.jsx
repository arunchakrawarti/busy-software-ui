"use client";

import OverlayModal from "@/components/common/OverlayModal";
import AlertModal from "@/components/common/AlertModal";

const DeleteConfirmModal = ({
    open,
    onClose,
    onConfirm,
    label = "this record",
}) => {
    return (
        <OverlayModal
            isOpen={open}
            onClose={onClose}
            modalClass="max-w-md"
        >
            <AlertModal
                icon="delete"
                title="Delete Purchase"
                message={`Are you sure you want to delete ${label}?`}
                iconWrapperClass="bg-red-100 text-red-600"
                buttons={[
                    {
                        text: "Cancel",
                        colorClass:
                            "bg-gray-100 text-gray-700 hover:bg-gray-200",
                        onClick: onClose,
                    },
                    {
                        text: "Delete",
                        colorClass:
                            "bg-red-600 text-white hover:bg-red-700",
                        onClick: onConfirm,
                    },
                ]}
            />
        </OverlayModal>
    );
};

export default DeleteConfirmModal;