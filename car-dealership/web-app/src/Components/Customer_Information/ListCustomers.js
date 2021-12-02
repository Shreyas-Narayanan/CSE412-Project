import React, {useState, useEffect, Fragment} from 'react';
import EditCustomers from './EditCustomers';

export default function ListCustomers() {

    const [customers, setCustomers] = useState([]);
    const [filteredCust, setFilteredCust] = useState(customers);


    const deleteCustomer = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteCustomers = await fetch(`http://localhost:5000/customers/${id}`, {
                method: "DELETE"
            });

            setFilteredCust(customers.filter(customer => customer.customer_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getCustomers = async () => {
        try {
            const response = await fetch('http://localhost:5000/customers');
            const jsonData = await response.json();
            setCustomers(jsonData);
            setFilteredCust(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getCustomers();
    },[]);

    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(event.target.value);
        result = customers.filter((data) => {
            return (data.first_name.search(value) !== -1 || data.last_name.search(value) !== -1 || data.phone_number.search(value) !== -1 || data.address.search(value) !== -1 || data.city.search(value) !== -1 || data.state.search(value) !== -1 || data.country.search(value) !== -1);
        });
        setFilteredCust(result);
    }

    return (
        <Fragment>
            <input type="text" className='form-control' placeholder = "Search Customers" onChange={(event) =>handleSearch(event)} />
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCust.map(customer => (
                        <tr key = {customer.customer_id}>
                            <td>{customer.customer_id}</td>
                            <td>{customer.first_name}</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.postal_code}</td>
                            <td>{customer.state}</td>
                            <td>{customer.country}</td>
                            <td>
                                <EditCustomers customer={customer}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteCustomer(customer.customer_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}