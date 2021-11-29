import React from 'react';
import { Fragment } from 'react';
import InputSales from './InputSales';
import ListSales from './ListSales';

export default function SalesTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Sales Table</h2>
            <ListSales/>
            <InputSales/>
        </Fragment>
    );
}