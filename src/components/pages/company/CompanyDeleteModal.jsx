"use client";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Button from "@/components/common/Button";

const CompanyDeleteModal = ({
    isOpen,
    onClose,
    company,
}) => {
    const handleDelete = () => {
        console.log("Delete Company :", company);

        onClose();
    };

    return (
        <OverlayModal
            isOpen={isOpen}
            onClose={onClose}
            modalClass="max-w-md"
        >
            <Card bodyClassName="p-4">
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                        <i className="ri-delete-bin-6-line text-3xl text-red-600" />
                    </div>

                    <h2 className="mt-5 text-xl font-semibold text-gray-800">
                        Delete Company
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Are you sure you want to delete
                        <span className="mx-1 font-semibold text-gray-800">
                            {company?.name}
                        </span>
                        ?
                    </p>

                    <p className="mt-1 text-sm text-red-500">
                        This action cannot be undone.
                    </p>

                    <div className="mt-8 flex w-full gap-3 justify-end">
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>

                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                </div>
            </Card>
        </OverlayModal>
    );
};

export default CompanyDeleteModal;