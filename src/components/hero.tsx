import { CloudUploadIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeroLabel } from "./sharedComponents/heroLabels";
import { SharedButton } from "./sharedComponents/sharedButton";

export const Hero = (): JSX.Element => {
    return (
        <div id="hero" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto md:mt-32">
                <div className="flex flex-col justify-center text-center md:items-center w-full px-2 py-8">
                    <p className="text-2xl font-medium">Unique Sequencing & Production</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
                    <p className="text-2xl">This is your Tech Brand.</p>
                    <SharedButton extraCss="md:w-[60%]">Get Started</SharedButton>
                </div>
                <div>
                    <img className="w-full" src="assets/cyber.png" alt="" />
                </div>
                <div className="sm:absolute flex flex-col py-8 bottom-[5%] border border-slate-300 rounded-xl text-center bg-zinc-200 drop-shadow-lg 
                mx-1 md:left-1/2 transform md:-translate-x-1/2">
                    <p className="font-bold">Data Servisec</p>
                    <div className="flex flex-col md:flex-row md:justify-between flex-wrap px-4 ">
                        <HeroLabel
                            icon={<CloudUploadIcon className="h-6 mr-4 text-indigo-600" />}
                            title="App Security"
                        />
                        <HeroLabel
                            icon={<DatabaseIcon className="h-6 mr-4 text-indigo-600" />}
                            title="Dashboard Design"
                        />
                        <HeroLabel
                            icon={<ServerIcon className="h-6 mr-4 text-indigo-600" />}
                            title="Cloud Data"
                        />
                        <HeroLabel
                            icon={<PaperAirplaneIcon className="h-6 mr-4 text-indigo-600" />}
                            title="API Services"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}