import React, {useState, useEffect, Fragment} from 'react';
import EditMaintenance from './EditMaintenace';

export default function ListMaintenance() {

    const [main, setMain] = useState([]);
    const [filteredMain, setFilteredMain] = useState(main);

    const deleteMain = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteMain = await fetch(`http://localhost:5000/maintenance/${id}`, {
                method: "DELETE"
            });

            setFilteredMain(main.filter(m => m.ticket_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getMain = async () => {
        try {
            const response = await fetch('http://localhost:5000/maintenance');
            const jsonData = await response.json();
            setMain(jsonData);
            setFilteredMain(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMain();
    },[]);

    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(event.target.value);
        result = main.filter((data) => {
            return (data.car_issue.search(value) !== -1 || data.date_received.search(value) !== -1 || data.date_returned.search(value) !== -1);
        });
        setFilteredMain(result);
    }

    return (
        <Fragment>
            <input type="text" className='form-control' placeholder = "Search Maintenance" onChange={(event) =>handleSearch(event)} />
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
                    {filteredMain.map(m => (
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