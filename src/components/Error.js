import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log("error", err);
  return (
    <>
      <div className="error">
        <h1>Oops!!</h1>
        <h2>Something went wrong!!!</h2>
        <h2>Please check your URL!!</h2>
        <h2>
          {err.status}-{err.error.message}
        </h2>
      </div>
    </>
  );
};

export default Error;
