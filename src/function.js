export const handleBackdropClick = (e,onClose) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
};
    
export const handleEscapeClick = (onClose) => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
};
    
export const handleBlockBody = () => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "auto";
    };
}
export const handleUnBlockBody = () => {
    document.body.style.overflow = "auto";
}