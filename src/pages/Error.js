import { useRouteError } from "react-router"




const Error = () => {
const error = useRouteError();
// console.log(error);
  return (
    <>
      <h1>Oops</h1>
      {/* <h3>{error.error.message}</h3> */}
      <p>Something went wrong</p>
    </>
  )
}

export default Error
