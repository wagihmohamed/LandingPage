import { SharedButton } from "./sharedButton";
interface feature {
    icon: JSX.Element;
    featureTitle: string;
}
interface PricingCardProp {
    price: string;
    plane: string;
    body: string;
    features: feature[];
}
export const PricingCard: React.FC<PricingCardProp> = ({ price, plane, body, features }) => {
    return (
        <div className="bg-white text-black p-8 m-4 rounded-xl max-w-lg drop-shadow-lg relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm font-medium">{plane}</span>
            <p className="text-6xl font-bold py-4 flex">{price}<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
            <p className="text-2xl py-8 text-slate-500">{body}</p>
            <div className="text-2xl space-y-5">
                {features.map((ele, idx) => (
                    <p key={idx} className="flex">{ele.icon} {ele.featureTitle} </p>
                ))}
            </div>
            <SharedButton extraCss="mt-16">Getting Started</SharedButton>
        </div>
    );
}