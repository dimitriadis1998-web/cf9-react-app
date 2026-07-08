import {useEffect} from "react";
import {useNavigate} from "react-router";

const AutoRedirect = () => {
    const navigate = useNavigate();


    useEffect(() => {
        //Setup
        const timer = setTimeout(() =>{
            navigate("/examples")
        }, 5000)

        //Cleanup
        return () => clearTimeout(timer)

    }, []);

    return(
        <>
            <h1 className="text-center text-xl font-semibold mb-">
                Redirecting in 5 seconds....
            </h1>
        </>
    )
}
export default AutoRedirect;