interface InputProps {
    label: string;
    type: string;
    id: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SharedIput: React.FC<InputProps> = ({ onChange, value, label, type, id }) => {
    return (
        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
            <div className="mt-1">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className="border-gray-300 w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    id={id}
                />
            </div>
        </div>
    );
}