import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditMaintenance({m}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCar(m.car_id);
        setCust(m.customer_id);
        setMech(m.mechanic_id);
        setIssue(m.car_issue);
        setReceived(m.date_received);
        setReturned(m.date_returned);
        setShow(true);
    }

    const [car_id, setCar] = useState(m.car_id);
    const [customer_id, setCust] = useState(m.customer_id);
    const [mechanic_id, setMech] = useState(m.mechanic_id);
    const [car_issue, setIssue] = useState(m.car_issue);
    const [date_received, setReceived] = useState(m.date_received);
    const [date_returned, setReturned] = useState(m.date_returned);

    const onEditCar = (e) => {
        setCar(e.target.value);
    }

    const onEditCust = (e) => {
        setCust(e.target.value);
    }

    const onEditMech = (e) => {
        setMech(e.target.value);
    }

    const onEditIssue = (e) => {
        setIssue(e.target.value);
    }

    const onEditReceived = (e) => {
        setReceived(e.target.value);
    }

    const onEditReturned = (e) => {
        setReturned(e.target.value);
    }


    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {car_id, customer_id, mechanic_id, car_issue, date_received, date_returned};
            // eslint-disable-next-line
            const response = await fetch(`http://localhost:5000/maintenance/${m.ticket_id}`, {
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
                    <Modal.Title>Editing Ticket {m.ticket_id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>Car Id</h6>
                        <input type='text' className='form-control' value={car_id} onChange={onEditCar}/>
                        <h6>Customer Id</h6>
                        <input type='text' className='form-control' value={customer_id} onChange={onEditCust}/>
                        <h6>Mechanic Id</h6>
                        <input type='text' className='form-control' value={mechanic_id} onChange={onEditMech}/>
                        <h6>Car Issue</h6>
                        <input type='text' className='form-control' value={car_issue} onChange={onEditIssue}/>
                        <h6>Date Received (YYYY-MM-DD)</h6>
                        <input type='text' className='form-control' value={date_received} onChange={onEditReceived}/>
                        <h6>Date Returned (YYYY-MM-DD)</h6>
                        <input type='text' className='form-control' value={date_returned} onChange={onEditReturned}/>
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