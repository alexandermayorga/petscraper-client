type PaginationProps = {
  pages: number;
  currentPage: number;
  onPageChange: Function;
};

export default function Pagination(props: PaginationProps) {
  const { pages, currentPage, onPageChange } = props;
  
  function onClickHandler(pageNum: number) {
    window.scrollTo(0, 80);
    onPageChange(pageNum);
  }

  function listPages(pages: number) {
    const list = [];

    for (let i = 1; i <= pages; i++) {
      list.push(
        <li
          className={`page-item ${currentPage === i && "active"}`}
          key={i}
          onClick={() => (currentPage !== i ? onClickHandler(i) : null)}
        >
          <div className="page-link" style={{ cursor: "pointer" }}>
            {i}
          </div>
        </li>
      );
    }

    return list;
  }

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}

          {listPages(pages)}

          {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
          {/* Lets Skip Next and Previous Buttons, we dont have that many */}
        </ul>
      </nav>
    </div>
  );
}
