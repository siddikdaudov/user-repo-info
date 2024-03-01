import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "../shared";
import { RepositoriesPage } from "../pages/repositories";

export const router = createBrowserRouter([
  { path: ROUTES.root, element: <Navigate to={ROUTES.repositoriesPage} replace /> },
  { path: "*", element: <Navigate to={ROUTES.root} replace /> },
  { path: ROUTES.repositoriesPage, element: <RepositoriesPage /> },
]);
