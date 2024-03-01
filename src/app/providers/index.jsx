import { StoreProvider } from "./store-provider";
import { RouterProvider } from "./router-provider";

export const Providers = () => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};
