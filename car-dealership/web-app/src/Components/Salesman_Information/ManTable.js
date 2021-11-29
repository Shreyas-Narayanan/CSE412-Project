import React from 'react';
import { Fragment } from 'react';
import InputMan from './InputMan';
import ListMan from './ListMan';

export default function ManTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Salesman Table</h2>
            <ListMan/>
            <InputMan/>
        </Fragment>
    );
}