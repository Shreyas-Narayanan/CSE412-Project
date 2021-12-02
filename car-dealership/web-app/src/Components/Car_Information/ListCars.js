import React, {useState, useEffect, Fragment} from 'react';
import EditCars from './EditCars';

export default function ListCars() {

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState(cars);

    const deleteCar = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteCars = await fetch(`http://localhost:5000/cars/${id}`, {
                method: "DELETE"
            });

            setFilteredCars(cars.filter(car => car.car_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getCars = async () => {
        try {
            const response = await fetch('http://localhost:5000/cars');
            const jsonData = await response.json();
            setCars(jsonData);
            setFilteredCars(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getCars();
    },[]);

    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(event.target.value);
        result = cars.filter((data) => {
            return (data.type.search(value) !== -1 || data.make.search(value) !== -1 || data.model.search(value) !== -1 || data.color.search(value) !== -1);
        });
        setFilteredCars(result);
    }

    return (
        <Fragment>
            <input type="text" className='form-control' placeholder = "Search Cars" onChange={(event) =>handleSearch(event)} />
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Car Id</th>
                        <th>Type</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        {/* <th>New</th> */}
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCars.map(car => (
                        <tr key = {car.car_id}>
                            <td>{car.car_id}</td>
                            <td>{car.type}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            {/* <td>{car.new}</td> */}
                            <td>{car.price}</td>
                            <td>
                                <EditCars car={car}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteCar(car.car_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}