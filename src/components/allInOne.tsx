import { CheckIcon } from "@heroicons/react/outline";
import { AllInOneCard } from "./sharedComponents/allInOneCard";
interface AllInOneDataTypes {
    title: string;
    body: string;
    icon: JSX.Element;

}
export const AllInOne = (): JSX.Element => {

    const allInOneData: AllInOneDataTypes[] = [
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
        {
            title: 'Documentation',
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit blanditiis est! Amet laboriosam ab cum porro nobis. Expedita, excepturi quam ratione distinctio dolor ipsum omnis facere aut nam voluptatibus?",
            icon: <CheckIcon className="w-7 mr-4 text-green-600" />
        },
    ]

    return (
        <div id="#services" className="w-full my-32">
            <div className="max-w-7xl mx-auto px-2 text-center">
                <h2 className="font-bold text-6xl ">All-In-One Platform</h2>
                <p className="font-normal mt-6 px-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus iusto labore earum. Nam, veniam? Nesciunt officia consequatur cupiditate. Vero doloribus expedita quis voluptatum repudiandae provident facilis ab in perferendis?</p>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-16 text-start">
                    <AllInOneCard
                        dataArray={allInOneData}
                    />
                </div>
            </div>
        </div>
    );
}