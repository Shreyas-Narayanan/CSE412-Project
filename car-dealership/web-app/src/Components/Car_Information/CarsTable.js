import React from 'react';
import { Fragment } from 'react';
import InputCars from './InputCars';
import ListCars from './ListCars';

export default function CarsTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Car Information Table</h2>
            <ListCars/>
            <InputCars/>
        </Fragment>
    );
}