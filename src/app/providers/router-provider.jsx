import { RouterProvider as ReactRouterProvide } from "react-router-dom";
import { router } from "../router";

export const RouterProvider = () => <ReactRouterProvide router={router} />;
