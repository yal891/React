import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table';
// import BootstrapTable from "react-bootstrap-table-next";
// import {TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table-next';
import cellEditFactory from "react-bootstrap-table2-editor";

import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "./Resource.css";

//By default
const resources = [
    { id: 1, name: "Sports", code: 123456 },
    { id: 2, name: "Music", code: 123456 },
    { id: 3, name: "Transportation", code: 123456 },
    { id: 4, name: "Camera", code: 8167404 },

];

const columns = [
    {
        dataField: "id",
        text: "Resource ID",
        sort: true
    },
    {
        dataField: "name",
        text: "Resource Name",
        sort: true
    },
    {
        dataField: "code",
        text: "Resource Code",
        sort: true,
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
                return {
                    valid: false,
                    message: "Resource code should be numeric"
                };
            }
            return true;
        }
    }
];

const defaultSorted = [
    {
        dataField: "name",
        order: "desc"
    }
];



export default class Resource extends React.Component {
    createCustomInsertButton = (openModal) => {
        return (
            <button style={ { color: 'saddlebrown' } } onClick={ openModal }>Add rows</button>
        );
    }

    createCustomDeleteButton = (onBtnClick) => {
        return (
            <button style={ { color: 'brown' } } onClick={onBtnClick}>Delete Rows</button>
        );
    }

    createCustomExportCSVButton = (onClick) => {
        return (
            <button style={ { color: 'rosybrown' } } onClick={ onClick }>Export CSV</button>
        );
    }

    render() {
        const options = {
            insertBtn: this.createCustomInsertButton,
            deleteBtn: this.createCustomDeleteButton,
            exportCSVBtn: this.createCustomExportCSVButton
        };

        const selectRow = {
            mode: 'checkbox',
            // clickToSelect: false
        };

        const cellEditProp = {
            mode: 'dbclick'
        };

        const handleForce = (data, fileInfo) => console.log(data, fileInfo);

        const papaparseOptions = {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
        };

        return (
            <div className = "App">
                <h1>Resource Page</h1>
                <div className="container">
                    <CSVReader
                        cssClass="react-csv-input"
                        label="Import CSV Here"
                        onFileLoaded={handleForce}
                        parserOptions={papaparseOptions}
                    />
            <BootstrapTable data={resources} options={options} insertRow deleteRow selectRow={ selectRow } cellEdit={cellEditProp} exportCSV
            >
                <TableHeaderColumn dataField='id' dataSort={true} isKey={true} >ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataSort={true} filter={{ type: 'TextFilter' }}>Resource Name</TableHeaderColumn>
                <TableHeaderColumn dataField='code' >Resource code</TableHeaderColumn>

            </BootstrapTable>
                </div>
            </div>
        );

    }
}


// <div className = "App">
//     <h1>Resource Page</h1>
//     <div className="container">
// <BootstrapTable
//     bootstrap4
//     keyField="id"
//     data={resources}
//     columns={columns}
//     defaultSorted={defaultSorted}
//     cellEdit={cellEditFactory({
//         mode: "click",
//         blurToSave: true
//     })}
// />
// </div>
// </div>