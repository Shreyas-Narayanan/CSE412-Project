import React from 'react';
import { Fragment } from 'react';
import InputMech from './InputMech';
import ListMech from './ListMech';

export default function MechTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Mechanic Table</h2>
            <ListMech/>
            <InputMech/>
        </Fragment>
    );
}