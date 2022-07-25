import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { SharedButton } from "../components/sharedComponents/sharedButton";
import { homePath } from "../utlis/routes";

export const Error = (): JSX.Element => {
    return (
        <div className="w-full h-screen bg-gray-100" >
            <div className="pt-[20vh]  flex flex-col items-center">
                <ExclamationCircleIcon className="w-28 text-red-500" />
                <p className="text-xl md:text-2xl flex items-center font-semibold">
                    404 Page not found. Return to
                    <SharedButton extraCss="w-52 ml-4" path={homePath}>Home Page</SharedButton>
                </p>
            </div>
        </div>
    );
}