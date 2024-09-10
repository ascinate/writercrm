import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import DataTable from "react-data-table-component";
import AllBills  from "../component/BillData";
import AddBill from "../component/AddBill";
import { NavLink } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import Select from 'react-select';
import { DateTime, Button } from 'react-form-elements';
import { FiSearch } from "react-icons/fi";


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
      name: "Order ID",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Comments",
      selector: (row) => row.comments,
      sortable: true
    },
    {
      name: "Vendor",
      selector: (row) => row.vendor,
      sortable: true,
      right: true
    },
    {
        name: "Created",
        selector: (row) => row.created,
        sortable: true,
        right: true
    },
    {
        name: "Delivered",
        selector: (row) => row.delivered,
        sortable: true,
        right: true
    },
    {
        name: "Words",
        selector: (row) => row.words,
        sortable: true,
        right: true
    },
    {
        name: "GBP",
        selector: (row) => row.gbp,
        sortable: true,
        right: true
    },
    {
        name: "USD",
        selector: (row) => row.usd,
        sortable: true,
        right: true
    },
    {
        name: "INR",
        selector: (row) => row.inr,
        sortable: true,
        right: true
    },
    {
        name: "INR Conversion",
        selector: (row) => row.conversion,
        sortable: true,
        right: true
    },
    {
        name: "Freelance",
        selector: (row) => row.freelance,
        sortable: true,
        right: true
    },
    {
        name: "Profit",
        selector: (row) => row.profit,
        sortable: true,
        right: true
    },
    
    
    {
        name: "Action",
        selector: (row) => row.action,
        button: true,
        cell: () => (
          <div className="App">
            <div class="d-flex align-items-center">
                <NavLink to="/" className="btn btn-edit"> <MdOutlineEdit /> </NavLink>
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


function Billing(){
    const [ mcworkData, setworkData] = useState(AllBills);
    console.log(mcworkData);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> Manage Bills </h2>
                    </div>
                    <div className="right-serach-div col-lg-9 d-flex align-items-center ps-5">
                       <AddBill/>
                      <NavLink to="/" className="btn adver btn-success ctre-2 ms-3"> Add Vendor </NavLink>
                        
                    </div>
                </div>
                <div className="d-flex align-items-center subnm-menu-div my-2">
                     <div className="form-t-search d-flex align-items-center ms-4">
                        <div className="comon-filed01 d-flex align-items-center">
                            <span className="me-2 text-white">Vendor:</span>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                name="color"
                                options={options}
                            />
                        </div>
                        <div className="comon-filed01 d-flex align-items-center ms-3">
                            <span className="me-2 text-white">From:</span>
                            <DateTime label="" name="from" className="form-control cv-u" />
                        </div>
                        <div className="comon-filed01 d-flex align-items-center ms-3">
                            <span className="me-2 text-white">To:</span>
                            <DateTime label="" name="to" className="form-control cv-u" />
                        </div>
                        <Button className="btn btn-serach d-flex align-items-center"
                        onClick={e => {
                            console.info('The button was clicked')
                        }}
                        >
                        <FiSearch/>
                         Search
                        </Button>
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
export default Billing;