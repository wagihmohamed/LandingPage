interface InfoCardProp {
    title: string;
    text: string;
}
export const InfoCard: React.FC<InfoCardProp> = ({ title, text }) => {
    return (
        <div className="text-center rounded-3xl border mx-6 shadow-md py-10">
            <p className="text-6xl font-bold text-primary">{title}</p>
            <p className="text-gray-400 mt-3 font-medium">{text}</p>
        </div>
    );
}