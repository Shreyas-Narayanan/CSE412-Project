import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditMech({m}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setF(m.first_name);
        setL(m.last_name);
        setYW(m.years_worked);
        setShow(true);
    }

    const [first_name, setF] = useState(m.first_name);
    const [last_name, setL] = useState(m.last_name);
    const [years_worked, setYW] = useState(m.years_worked);

    const onEditF = (e) => {
        setF(e.target.value);
    }

    const onEditL = (e) => {
        setL(e.target.value);
    }

    const onEditYW = (e) => {
        setYW(e.target.value);
    }


    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {first_name, last_name, years_worked};
            // eslint-disable-next-line
            const response = await fetch(`http://localhost:5000/mechanics/${m.mechanic_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            
            handleClose();
            window.location = '/';
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <Fragment>
            <button type="button" className="btn btn-warning" onClick={handleShow}>
                Edit
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing Mechanic {m.mechanic_id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>First Name</h6>
                        <input type='text' className='form-control' value={first_name} onChange={onEditF}/>
                        <h6>Last Name</h6>
                        <input type='text' className='form-control' value={last_name} onChange={onEditL}/>
                        <h6>Years Worked</h6>
                        <input type='text' className='form-control' value={years_worked} onChange={onEditYW}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateDescription}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}