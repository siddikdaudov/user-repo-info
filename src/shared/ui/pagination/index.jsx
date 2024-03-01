import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getRepositoriesThunk } from "../../../app/store/reducers/repositories/thunks";
import styles from "./styles.module.css";

const PER_PAGES = [10, 25, 50];

export const Pagination = () => {
  const totalCount = useSelector((state) => state.repositories.totalCount);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setOpen] = useState(false);

  const totalPages = Math.ceil(totalCount / Number(searchParams.get("per_page")));

  const handlePage = ({ selected }) => {
    searchParams.set("page", selected + 1);
    setSearchParams(searchParams.toString());

    dispatch(getRepositoriesThunk());
  };

  const handlePerPage = (value) => {
    searchParams.set("per_page", value);
    setSearchParams(searchParams.toString());
    setOpen(false);

    dispatch(getRepositoriesThunk());
  };

  useEffect(() => {
    searchParams.set("per_page", searchParams.get("per_page") ?? PER_PAGES[0]);
    searchParams.set("page", searchParams.get("page") ?? 1);

    setSearchParams(searchParams.toString());
  }, []);

  if (!totalCount) return null;
console.log('')
  return (
    <div className={styles.wrapper}>
      <div className={styles.perPage}>
        <p>{searchParams.get("per_page")}</p>
        <button onClick={() => setOpen((current) => !current)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 22L0.607697 0.25L21.3923 0.25L11 22Z" fill="#C4C4C4" />
          </svg>
        </button>
        {isOpen && (
          <div className={styles.popover}>
            {PER_PAGES.map((item) => (
              <button key={item} onClick={() => handlePerPage(item)}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.pages}>
        <ReactPaginate
          onPageChange={handlePage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={Math.min(10, totalPages)}
          breakLabel="..."
          initialPage={Number(searchParams.get("page")) - 1}
          renderOnZeroPageCount={null}
          activeClassName={styles.active}
          className={styles.pagination}
          nextLabel=""
          previousLabel=""
        />
      </div>
    </div>
  );
};
