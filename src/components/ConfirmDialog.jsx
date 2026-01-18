import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

const ConfirmDialog = ({ open, title, message, onConfirm, onCancel, confirmText = "Confirm", confirmStyle = "warning" }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [open]);

    return (
        <dialog ref={dialogRef} className="confirm-dialog">
            <div className="confirm-dialog__content">
                <div className="confirm-dialog__header">
                    <h3>{title}</h3>
                    <button onClick={onCancel} className="btn-icon">
                        <XMarkIcon width={24} />
                    </button>
                </div>
                <div className="confirm-dialog__body">
                    <p>{message}</p>
                </div>
                <div className="confirm-dialog__footer">
                    <button className="btn" onClick={onCancel}>
                        Cancel
                    </button>
                    <button
                        className={`btn btn--${confirmStyle}`}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmDialog;
