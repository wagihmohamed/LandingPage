import { DocumentAddIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { HomeButtonCard } from "./sharedComponents/HomeSharedComponents/homeButtonCard";
import { SocialIcons } from "./sharedComponents/socialIcons";

export const HomeLeftBar = (): JSX.Element => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <div className="w-1/6 hidden lg:flex flex-col justify-between fixed top-0  h-full bg-gray-100" >
                <div>
                    <div>
                        <div className="flex flex-row justify-between items-center py-4 px-6">
                            <p className="text-2xl md:text-4xl font-bold ">DOGO</p>
                            <img className="hidden md:flex w-16 " src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png" alt="dog img" />
                        </div>
                        <p className="hidden md:block text-base font-medium text-center p-2">Want to Start Adopting now? view our collection of free adopting pets.</p>
                        <div className="px-1 hidden md:block">
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
            <div className="fixed z-50 top-0 lg:hidden w-full py-4 drop-shadow-lg bg-gray-100">
                <div className="flex justify-between px-4">
                    <p className="text-2xl md:text-4xl font-bold ">DOGO</p>
                    <div onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? <XIcon className="w-8" /> : <MenuIcon className="w-8" />}
                    </div>
                </div>
                {navOpen &&
                    <div className="absolute w-full bg-gray-100 space-y-6 p-4 rounded-md shadow-md">
                        <p className="block text-base font-medium text-center p-2">Want to Start Adopting now? view our collection of free adopting pets.</p>
                        <div className="mt-6 bg-gray-100 space-y-6 p-4 rounded-md shadow-md">
                            <HomeButtonCard icon={<DocumentAddIcon className="w-9" />}>Browse All</HomeButtonCard>
                            <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616408.png" imgAlt="Dog Icon">Dogs</HomeButtonCard>
                            <HomeButtonCard imgSrc="https://cdn-icons-png.flaticon.com/128/616/616430.png" imgAlt="Cat Icon">Cats</HomeButtonCard>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}