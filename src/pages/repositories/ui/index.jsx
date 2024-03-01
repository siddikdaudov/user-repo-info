import { Header } from "../../../widget";
import { Cards } from "./cards";
import { Pagination } from "../../../shared";

export const RepositoriesPage = () => {
  return (
    <main>
      <Header />
      <Cards />
      <div style={{ margin: "50px 0" }}>
        <Pagination />
      </div>
    </main>
  );
};
