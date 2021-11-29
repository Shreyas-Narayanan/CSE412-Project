import React from 'react';
import { Fragment } from 'react';
import InputMaintenace from './InputMaintenance';
import ListMaintenance from './ListMaintenance';

export default function MaintenanceTable() {
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Maintenance Table</h2>
            <ListMaintenance/>
            <InputMaintenace/>
        </Fragment>
    );
}