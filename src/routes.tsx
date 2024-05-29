import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/error-page";
import FilePage from "./pages/file-page";

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/visualizar-arquivo/:slug',
    element: <FilePage />
  }
]);

export default Routes;