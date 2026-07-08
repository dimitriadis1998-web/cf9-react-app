import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const AutoRedirectAdvanced = () => {
    const navigate = useNavigate();
    const [secondsLeft,setSecondsLeft] = useState(5);


    useEffect(() => {
        //Setup
        const intervalId  = setInterval(()=>{
            setSecondsLeft((prev)=> prev -1);
        },1000)

        const timer = setTimeout(() => {
            navigate("/example")
        })



        //Cleanup
        return () => {
            clearInterval(intervalId);
            clearTimeout(timer)
        }

    }, []);

    return(
        <>
            <h1 className="text-center text-xl font-semibold mb-">
                Redirecting in {secondsLeft} second{secondsLeft !== 1 && "s"}....
            </h1>
        </>
    )
}
export default AutoRedirectAdvanced;