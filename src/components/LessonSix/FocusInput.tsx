import {useEffect, useRef} from "react";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    }

    // useEffect(() => {
    //     inputRef.current?.focus();
    // },[])

    return (
        <>
            <div className="text-center space-x-4 mt-4">
                <input
                    ref={inputRef}
                    type="text"
                    className="border focus:border-amber-700 px-4 py-2"
                />
                <button
                className="bg-cf-dark-gray  text-white px-4 py-2"
                onClick={handleClick}
                >
                    Focus Input
                </button>
            </div>

        </>
    )
}

export default FocusInput;