import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
