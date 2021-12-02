import React, {useState, useEffect, Fragment} from 'react';
import EditMan from './EditMan';

export default function ListMan() {

    const [man, setMan] = useState([]);
    const [fman, setFilteredMan] = useState(man);

    const deleteMan = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteMan = await fetch(`http://localhost:5000/salesman/${id}`, {
                method: "DELETE"
            });

            setFilteredMan(man.filter(m => m.salesman_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getMans = async () => {
        try {
            const response = await fetch('http://localhost:5000/salesman');
            const jsonData = await response.json();
            setMan(jsonData);
            setFilteredMan(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMans();
    },[]);

    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(event.target.value);
        result = man.filter((data) => {
            return (data.first_name.search(value) !== -1 || data.last_name.search(value) !== -1);
        });
        setFilteredMan(result);
    }

    return (
        <Fragment>
            <input type="text" className='form-control' placeholder = "Search Salesman" onChange={(event) =>handleSearch(event)} />
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Salesman Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Years Worked</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {fman.map(m => (
                        <tr key = {m.salesman_id}>
                            <td>{m.salesman_id}</td>
                            <td>{m.first_name}</td>
                            <td>{m.last_name}</td>
                            <td>{m.years_worked}</td>
                            <td>
                                <EditMan m={m}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteMan(m.salesman_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}