import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error=useRouteError();
    console.log("err in error component",error);
    
return (
    <div>
        <h1>Oops</h1>
        <h2>Something went Wrong</h2>
        <h3>{error.status} - {error.statusText}</h3>
        <h3>{error.error.message}</h3>
    </div>
)
}
export default Error;