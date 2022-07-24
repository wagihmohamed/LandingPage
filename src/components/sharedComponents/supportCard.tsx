import { ArrowSmRightIcon } from "@heroicons/react/outline";
interface SupportCardProps {
    title: string;
    body: string;
    icon: JSX.Element;
}
export const SupportCard: React.FC<SupportCardProps> = ({ title, body, icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl border text-center max-w-md">
            <div className="p-8 ">
                {icon}
                <h3 className="font-bold text-2xl py-6">{title}</h3>
                <p className="text-gray-600 text-xl">{body}</p>
            </div>
            <div >
                <p className="flex bg-zinc-200 text-primary font-bold px-8 py-2">Contact Us <ArrowSmRightIcon className="w-6 ml-2" /></p>
            </div>
        </div>
    );
}