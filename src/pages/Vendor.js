import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import DataTable from "react-data-table-component";
import Allvender  from "../component/VenderData";
import { NavLink } from "react-router-dom";
import AddVendor from "../component/AddVendor";
import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";



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
      name: "Serial No.",
      selector: (row) => row.serial,
      sortable: true
    },
    {
      name: "Vendor",
      selector: (row) => row.vendor,
      sortable: true
    },

    {
        name: "Action",
        selector: (row) => row.action,
        button: true,
        cell: () => (
          <div className="App">
            <div class="d-flex align-items-center">
                <NavLink to="/editvendor" className="btn btn-edit"> <MdOutlineEdit /> </NavLink>
                <NavLink to="/" className="btn btn-edit ms-3"> < TfiTrash /> </NavLink>
              
             
            </div>
          </div>
        )
      }
    
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

  const options = [
    { value: 'editor', label: 'Editor' },
    { value: 'administrator', label: 'Administrator' },
    { value: 'writer', label: 'Writer' }
  ]


function Vendor(){
    const [ mcworkData, setworkData] = useState(Allvender);
    console.log(mcworkData);

    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> Vendors </h2>
                    </div>
                    <div className="right-serach-div col-lg-9 d-flex align-items-center ps-5">
                        <AddVendor/>
                    </div>
                </div>
               
             </section>
             <section className="mail-sercotu new-data d-inline-block w-100 mt-4">
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
          </main>


        </>
    )
}
export default Vendor;