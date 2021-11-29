import React, {useState, useEffect, Fragment} from 'react';
import EditMech from './EditMech';

export default function ListMech() {

    const [man, setMan] = useState([]);

    const deleteMan = async (id) => {
        try {
            // eslint-disable-next-line
            const deleteMan = await fetch(`http://localhost:5000/mechanics/${id}`, {
                method: "DELETE"
            });

            setMan(man.filter(m => m.mechanic_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getMans = async () => {
        try {
            const response = await fetch('http://localhost:5000/mechanics');
            const jsonData = await response.json();
            setMan(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMans();
    },[]);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Mechanic Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Years Worked</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {man.map(m => (
                        <tr key = {m.machanic_id}>
                            <td>{m.mechanic_id}</td>
                            <td>{m.first_name}</td>
                            <td>{m.last_name}</td>
                            <td>{m.years_worked}</td>
                            <td>
                                <EditMech m={m}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteMan(m.mechanic_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}