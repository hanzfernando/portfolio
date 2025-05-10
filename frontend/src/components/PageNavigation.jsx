import { Link } from "react-router-dom";

const PageNavigation = ({ previousPage = null, nextPage = null, prevPageName = null, nextPageName= null }) => {
  return (
    <>
      {previousPage && (
        <Link
          to={previousPage}
        >
           <div className="page-control page-control_prev">
            <span>{prevPageName}</span>
            <div className="page-control_arrow">
                <div className="page-control_arrow-bottom page-control_arrow-bottom--prev"></div>
                <div className="page-control_arrow-top page-control_arrow-top--prev"></div>
            </div>
        </div>
        </Link>
      )}

      {nextPage && (
        <Link
          to={nextPage}         
        >
          <div className="page-control page-control_next">
            <span>{nextPageName}</span>
            <div className="page-control_arrow">
                <div className="page-control_arrow-top page-control_arrow-top--next"></div>
                <div className="page-control_arrow-bottom page-control_arrow-bottom--next"></div>
            </div>
        </div>
        </Link>
      )}
    </>
  );
};

export default PageNavigation;
