import { CloudUploadIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { loginPath } from "../utlis/routes";
import { HeroLabel } from "./sharedComponents/heroLabels";
import { SharedButton } from "./sharedComponents/sharedButton";

export const Hero = (): JSX.Element => {
    const heroPhotoURL = 'https://img.freepik.com/free-vector/concept-smart-urban-city-with-server-room-database-icons-data-center-database_39422-628.jpg?w=1380&t=st=1658619741~exp=1658620341~hmac=6a772b3430a310c974ca75a92e89a61ad819536c3e6fb3614a02d42b6fffc67c';
    return (
        <div id="#hero" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto md:mt-32">
                <div className="flex flex-col justify-center text-center md:items-center w-full px-2 py-6">
                    <p className="text-2xl font-medium">Unique Sequencing & Production</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
                    <p className="text-2xl">This is your Tech Brand.</p>
                    <SharedButton path={loginPath} extraCss="md:w-[60%]">Get Started</SharedButton>
                </div>
                <div className="w-full h-[150px] md:h-full">
                    <img className="w-full h-full  px-4 md:px-0 object-top object-cover rounded-xl shadow-lg" src={heroPhotoURL} alt="hero img" />
                </div>
                <div className="sm:absolute flex flex-col py-8 bottom-[5%] mt-3 border border-slate-300 rounded-xl text-center bg-zinc-200 drop-shadow-lg 
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