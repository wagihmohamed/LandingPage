interface AllInOneArray {
    title: String;
    icon: JSX.Element;
    body: string;
}
interface AllInOneCardProp {
    dataArray: AllInOneArray[];
}
export const AllInOneCard: React.FC<AllInOneCardProp> = ({ dataArray }) => {
    return (
        <>
            {dataArray.map((element) => (
                <div className="flex">
                    <div>
                        {element.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">{element.title}</h3>
                        <p className="text-lg pt-2 pb-4">{element.body}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
