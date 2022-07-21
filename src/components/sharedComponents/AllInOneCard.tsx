interface AllInOneCardProp {
    title: String;
    body: string;
    icon: JSX.Element;
}
export const AllInOneCard: React.FC<AllInOneCardProp> = ({ title, body, icon }) => {
    return (
        <div className="flex">
            <div>
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-lg pt-2 pb-4">{body}</p>
            </div>
        </div>
    )
}
