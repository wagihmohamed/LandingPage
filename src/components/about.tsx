import { InfoCard } from "./sharedComponents/aboutCard"

export const About = (): JSX.Element => {
    return (
        <div id="#about" className="w-full mt-40 mb-20 ">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
                <p className="text-3xl py-6 px-4 my-4 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi adipisci alias nihil, tempora ducimus dolores voluptatem laudantium architecto molestiae id.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                <InfoCard title="100%" text="Completion" />
                <InfoCard title="24/7" text="Delivery" />
                <InfoCard title="100K" text="Transactions" />
            </div>
        </div>
    );
}