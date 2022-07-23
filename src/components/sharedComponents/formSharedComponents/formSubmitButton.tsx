import React from "react";

interface SubmitButtonProps {
    children: React.ReactNode;
}

export const FormButton: React.FC<SubmitButtonProps> = ({ children }) => {
    return (
        <button
            type="submit"
            className="bg-indigo-500 py-2 px-6 mt-6 text-white w-full 
        font-semibold rounded-lg transition-all hover:bg-indigo-400"
        >
            {children}
        </button>
    );
}