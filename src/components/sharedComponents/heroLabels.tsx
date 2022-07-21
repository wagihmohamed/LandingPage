interface HeroLabelsProps {
    title: string;
    icon: JSX.Element;
}
export const HeroLabel: React.FC<HeroLabelsProps> = ({ title, icon }) => {
    return (
        <p className="flex px-6 py-2 font-medium">{icon} {title}</p>
    );
}

