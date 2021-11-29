import React from 'react';
import { Fragment } from 'react';
import InputCustomers from './InputCustomers';
import ListCustomers from './ListCustomers';

export default function CustomerTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Customer Information Table</h2>
            <ListCustomers/>
            <InputCustomers/>
        </Fragment>
    );
}