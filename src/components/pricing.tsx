import { CheckIcon, XIcon } from "@heroicons/react/outline"
import { PricingCard } from "./sharedComponents/pricingCard"
interface LocalFeature {
    icon: JSX.Element;
    featureTitle: string;
}
export const Pricing = (): JSX.Element => {
    const premiumFeatures: LocalFeature[] = [
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
    ]
    const standardFeatures: LocalFeature[] = [
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <CheckIcon className="w-8 mr-4 text-green-600" />, featureTitle: "Premium Contract" },
        { icon: <XIcon className="w-8 mr-4 text-red-600" />, featureTitle: "Premium Contract" },
        { icon: <XIcon className="w-8 mr-4 text-red-600" />, featureTitle: "Premium Contract" },
        { icon: <XIcon className="w-8 mr-4 text-red-600" />, featureTitle: "Premium Contract" },
    ]
    return (
        <div id='#pricing' className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto py-12">
                <div className="text-center py-8 mx-auto relative">
                    <h2 className="uppercase text-3xl text-gray-400">pricing</h2>
                    <p className="font-bold text-5xl py-8">The right price for your research.</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor a eveniet sunt. Laboriosam beatae architecto culpa expedita at. Qui facere non maiores eos molestiae omnis nemo porro voluptas ipsam!</p>
                </div>

                <div className="grid md:grid-cols-2 relative">
                    {/* first card */}
                    <PricingCard
                        price="$49"
                        plane="Standard"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit dignissimos, labore temporibus rem sapiente sequi a beatae repellat laboriosam ex earum minima vero culpa, accusamus reiciendis ullam. Quas, saepe!"
                        features={standardFeatures}
                    />
                    {/* Second card */}
                    <PricingCard
                        price="$60"
                        plane="Premium"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit dignissimos, labore temporibus rem sapiente sequi a beatae repellat laboriosam ex earum minima vero culpa, accusamus reiciendis ullam. Quas, saepe!"
                        features={premiumFeatures}
                    />
                </div>
            </div>
        </div >
    )
}