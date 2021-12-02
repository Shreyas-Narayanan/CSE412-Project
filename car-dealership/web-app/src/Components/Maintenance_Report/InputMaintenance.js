import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function InputMaintenace() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCar("");
        setCust("");
        setMech("");
        setIssue("");
        setReceived("");
        setReturned("");
        setShow(true);
    }

    const [car_id, setCar] = useState("");
    const [customer_id, setCust] = useState("");
    const [mechanic_id, setMech] = useState("");
    const [car_issue, setIssue] = useState("");
    const [date_received, setReceived] = useState("");
    const [date_returned, setReturned] = useState("");

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

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {car_id, customer_id, mechanic_id, car_issue, date_received, date_returned};
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/maintenance", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            } );

            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    return(
        <Fragment>
            <div className="d-grid gap-2">
            <Button variant="primary" size ="lg" className="mb-5" onClick={handleShow}>
                Add a New Ticket
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Ticket</Modal.Title>
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
                    <Button variant="primary" onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}