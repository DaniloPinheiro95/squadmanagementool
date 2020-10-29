import React from 'react';
import orderBy from 'lodash/orderBy';
import DataTable from "react-data-table-component";
import MyTeamsData from "../../data/myteams_data";

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        }
    },
    headCells: {
        style: {
            padding: '0px 40px 40px',
            fontSize: "16px"
        }
    },
    cells: {
        style: {
            paddingLeft: '40px', // override the cell padding for data cells
            paddingRight: '40px',
            fontWeight: "500 !important",
            fontSize: "16px"
        },
    },
};

const customSort = (rows, field, direction) => {
    const handleField = row => {
        if (row[field]) {
            return row[field].toLowerCase();
        }

        return row[field];
    };

    return orderBy(rows, handleField, direction);
};

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Description',
        selector: 'description',
        sortable: true,
    },
    {
        name: '',
        sortable: false
    }
];

const data = {
    rows: MyTeamsData
};

function MyTeamsContent() {

    const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);

    return (
        <div>
            <DataTable 
                columns={columns}
                data={data.rows}
                onSort={handleSort}
                sortFunction={customSort} 
                customStyles={customStyles}/>
        </div>
    );
}

export default MyTeamsContent;