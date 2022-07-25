import { DocumentAddIcon } from "@heroicons/react/outline";
import { HomeMiddle } from "../components/homeMiddle";
import { HomeButtonCard } from "../components/sharedComponents/homeButtonCard";
import { SocialIcons } from "../components/sharedComponents/socialIcons";

export const Home = (): JSX.Element => {
    return (
        <div className="w-full h-screen relative">
            <div className="flex w-full h-full flex-row gap-3">
                {/* left div */}
                <div className="w-1/6 flex flex-col justify-between fixed top-0  h-full bg-gray-100" >
                    <div>
                        <div>
                            <div className="flex flex-row justify-between items-center py-4 px-6">
                                <p className="text-4xl font-bold ">DOGO</p>
                                <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png" alt="dog img" />
                            </div>
                            <p className="text-base font-medium text-center py-2">Want to Start Adopting now? view our collection of free adopting pets.</p>
                            <div className="px-1">
                                <div className="mt-6 bg-gray-100 space-y-6 p-4 rounded-md shadow-md">
                                    <HomeButtonCard icon={<DocumentAddIcon className="w-9" />}>Browse All</HomeButtonCard>
                                    <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616408.png" imgAlt="Dog Icon">Dogs</HomeButtonCard>
                                    <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616430.png" imgAlt="Cat Icon">Cats</HomeButtonCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialIcons />
                </div>
                {/* middle div */}
                <HomeMiddle />
                {/* right div */}

                <div className="w-1/6 flex flex-col justify-between h-full bg-gray-100" >
                    <div>
                        <div>
                            <div className="flex flex-row justify-between items-center py-4 px-6">
                                <p className="text-4xl font-bold ">DOGO</p>
                                <img className="w-16" src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png" alt="dog img" />
                            </div>
                            <p className="text-base font-medium text-center py-2">Want to Start Adopting now? view our collection of free adopting pets.</p>
                            <div className="px-1">
                                <div className="mt-6 bg-gray-100 space-y-6 p-4 rounded-md shadow-md">
                                    <HomeButtonCard icon={<DocumentAddIcon className="w-9" />}>Browse All</HomeButtonCard>
                                    <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616408.png" imgAlt="Dog Icon">Dogs</HomeButtonCard>
                                    <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616430.png" imgAlt="Cat Icon">Cats</HomeButtonCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialIcons />

                </div>
            </div>
        </div>
    );
}