import { useNavigate } from "react-router-dom";

interface SharedButtonProps {
    extraCss?: string;
    children: React.ReactNode;
    path?: string;
}

export const SharedButton: React.FC<SharedButtonProps> = ({ extraCss, path, children }) => {
    const navigate = useNavigate();
    const navigation = (path: string, event: React.MouseEvent) => {
        navigate(path);
    }
    return (
        <button
            onClick={(e) => navigation(path!, e)}
            className={`py-3 px-8 bg-primary rounded-lg w-full font-medium 
                        my-5 transition-all transform hover:scale-105 
                        hover:bg-primaryhover text-white ${extraCss}`}
        >
            {children}
        </button >
    );
}

