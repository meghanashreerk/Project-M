import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>OOPS!! Something went wrong</h1>
    </div>
  );
};
export default Error;
