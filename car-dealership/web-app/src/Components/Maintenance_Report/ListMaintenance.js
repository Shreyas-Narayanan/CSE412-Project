import React, {useState, useEffect, Fragment} from 'react';
import EditMaintenance from './EditMaintenace';

export default function ListMaintenance() {

    const [main, setMain] = useState([]);

    const deleteMain = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteMain = await fetch(`http://localhost:5000/maintenance/${id}`, {
                method: "DELETE"
            });

            setMain(main.filter(m => m.ticket_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getMain = async () => {
        try {
            const response = await fetch('http://localhost:5000/maintenance');
            const jsonData = await response.json();
            setMain(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMain();
    },[]);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Ticket Id</th>
                        <th>Car Id</th>
                        <th>Customer Id</th>
                        <th>Mechanic Id</th>
                        <th>Car Issue</th>
                        <th>Date Received</th>
                        <th>Date Returned</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {main.map(m => (
                        <tr key = {m.ticket_id}>
                            <td>{m.ticket_id}</td>
                            <td>{m.car_id}</td>
                            <td>{m.customer_id}</td>
                            <td>{m.mechanic_id}</td>
                            <td>{m.car_issue}</td>
                            <td>{m.date_received}</td>
                            <td>{m.date_returned}</td>
                            <td>
                                <EditMaintenance m={m}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteMain(m.ticket_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}