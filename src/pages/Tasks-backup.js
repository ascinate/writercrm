import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import DataTable from "react-data-table-component";
import Alltask from "../component/Taskdata";


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
        selector: (row) => row.deadline,
        sortable: true,
        right: true
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
        right: true
    },
    {
      button: true,
      cell: () => (
        <div className="App">
          <div class="openbtn text-center">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Open modal
            </button>
            <div class="modal" tabindex="-1" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
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
  
  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));


function Tasks(){
    const [ mcworkData, setworkData] = useState(Alltask);
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
                        <button type="button" className="btn btn-catrea ctre-2" data-bs-toggle="offcanvas" data-bs-target="#addnew">
                          Create
                        </button>
                        
                        
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
                    selectableRowsComponent={BootyCheckbox}
                    />
                </div>
             </section>
          </main>


        </>
    )
}
export default Tasks;