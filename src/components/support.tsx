import { ChipIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";
import { SupportCard } from "./sharedComponents/supportCard";

export const Support = (): JSX.Element => {
    return (
        <div id="support" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="object-cover w-full h-full mix-blend-overlay" src="assets/support.jpg" alt="/" />
            </div>

            <div className="text-white relative">
                <div className="px-4 py-12 text-center">
                    <h2 className="pt-8 text-slate-300 uppercase text-center text-7xl font-bold">Support</h2>
                    <h3 className="text-5xl font-bold py-9 text-center">Finding the right team</h3>
                    <p className="py-6 px-14 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad tempore repudiandae nam. Praesentium voluptates a ipsum? Accusantium, accusamus totam!</p>
                </div>

                <div className="grid grid-cols-1 md:flex justify-between px-16 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
                    <SupportCard
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum maxime ea sunt magni recusandae aliquid illum itaque et earum!"
                        icon={<PhoneIcon className="h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />}
                        title="Sales"
                    />
                    <SupportCard
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum maxime ea sunt magni recusandae aliquid illum itaque et earum!"
                        icon={<SupportIcon className="h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />}
                        title="Technical Support"
                    />
                    <SupportCard
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum maxime ea sunt magni recusandae aliquid illum itaque et earum!"
                        icon={<ChipIcon className="h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />}
                        title="Media Inquiries"
                    />
                </div>
            </div>
        </div>
    );
}