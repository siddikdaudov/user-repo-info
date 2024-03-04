import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "../shared";
import { RepositoriesPage } from "../pages/repositories";
import { RepositoryPage } from "../pages/repository";

export const router = createBrowserRouter([
  { path: ROUTES.root, element: <Navigate to={ROUTES.repositoriesPage} replace /> },
  // { path: "*", element: <Navigate to={ROUTES.root} /> },
  { path: ROUTES.repositoriesPage, element: <RepositoriesPage /> },
  { path: `${ROUTES.repositoriesPage}/:user/:repository`, element: <RepositoryPage /> },
]);
