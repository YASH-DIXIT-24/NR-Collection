import { useRouteError } from "react-router-dom"
export default ErrorCustom=()=>{
    let err= useRouteError();
    
    console.log(err);
    return(
        <>
        <h1>Oops some error occurred!!</h1>
        <h2>{err.status}, {err.statusText}</h2>
        </>
    )
}