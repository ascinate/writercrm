import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import DataTable from "react-data-table-component";
import Allcomments from "../component/CommentsData";
import CreateTask from "../component/CreateTask";
import MobileMenu from "../component/MobileMenu";


function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }
  
  function toPages(pages) {
    const results = [];
  
    for (let i = 1; i < pages; i++) {
      results.push(i);
    }
  
    return results;
  }
  
  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Active",
      selector: (row) => row.active,
      sortable: true
    },
    {
      name: "Deadline",
      selector: (row) => row.deadline,
      sortable: true,
      right: true
    },
    {
        name: "Responsible Person",
        selector: (row) => row.responsible,
        sortable: true,
        right: true
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
        right: true
    },
    
  ];
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage,
    currentPage
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };
  
    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };
  
    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };
  
    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;
    
  
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";
  
            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };



function Comments(){
    const [ mcworkData, setworkData] = useState(Allcomments);
    console.log(mcworkData);

    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> My tasks </h2>
                    </div>
                    <div className="right-serach-div col-lg-9 d-flex align-items-center ps-5">
                       <CreateTask/>
                        
                        
                    </div>
                </div>
             </section>
             <section className="mail-sercotu d-inline-block w-100 mt-4">
                <div className="onisde d-inline-block w-100 position-relative"> 
                <DataTable
                    columns={columns}
                    data={mcworkData}
                    defaultSortFieldID={1}
                    pagination
                    paginationComponent={BootyPagination}
                    selectableRows
                    />
                </div>
             </section>

             <MobileMenu/>
          </main>


        </>
    )
}
export default Comments;