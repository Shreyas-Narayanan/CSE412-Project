import React, {useState, useEffect, Fragment} from 'react';
import EditSales from './EditSales';

export default function ListSales() {

    const [sales, setSales] = useState([]);

    const deleteSale = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteSales = await fetch(`http://localhost:5000/sales/${id}`, {
                method: "DELETE"
            });

            setSales(sales.filter(sale => sale.sales_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getSales = async () => {
        try {
            const response = await fetch('http://localhost:5000/sales');
            const jsonData = await response.json();
            setSales(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getSales();
    },[]);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Sales Id</th>
                        <th>Car Id</th>
                        <th>Customer Id</th>
                        <th>Salesman Id</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key = {sale.sales_id}>
                            <td>{sale.sales_id}</td>
                            <td>{sale.car_id}</td>
                            <td>{sale.customer_id}</td>
                            <td>{sale.salesman_id}</td>
                            <td>{sale.date}</td>
                            <td>
                                <EditSales sale={sale}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteSale(sale.sales_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}