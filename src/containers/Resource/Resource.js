import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table';
// import BootstrapTable from "react-bootstrap-table-next";
// import {TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table-next';
import cellEditFactory from "react-bootstrap-table2-editor";

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
            <button style={ { color: 'red' } } onClick={ openModal }>Add rows</button>
        );
    }

    createCustomDeleteButton = (onClick) => {
        return (
            <button style={ { color: 'red' } } onClick={onClick}>Delete Rows</button>
        );
    }

    render() {
        const options = {
            insertBtn: this.createCustomInsertButton,
            deleteBtn: this.createCustomDeleteButton
        };

        const cellEditProp = {
            mode: 'dbclick'
        };
        return (
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
            <div className = "App">
                <h1>Resource Page</h1>
                <div className="container">
            <BootstrapTable data={resources} options={options} insertRow deleteRow cellEdit={cellEditProp}
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
