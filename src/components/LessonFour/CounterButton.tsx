type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    addClasses?: string;
};

const CounterButton = (props: ButtonProps) => {
    console.log("PROPS:", props);

    return (
        <button
            className={`disabled:bg-cf-gray text-white py-2 px-4 ${props.addClasses ?? "bg-cf-dark-gray"}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export default CounterButton;