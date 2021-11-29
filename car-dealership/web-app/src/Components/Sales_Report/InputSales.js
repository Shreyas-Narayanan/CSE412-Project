import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function InputSales() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCar("");
        setCust("");
        setMan("");
        setDate("");
        setShow(true);
    }

    const [car_id, setCar] = useState("");
    const [customer_id, setCust] = useState("");
    const [salesman_id, setMan] = useState("");
    const [date, setDate] = useState("");

    const onEditCar = (e) => {
        setCar(e.target.value);
    }

    const onEditCust = (e) => {
        setCust(e.target.value);
    }

    const onEditMan = (e) => {
        setMan(e.target.value);
    }

    const onEditDate = (e) => {
        setDate(e.target.value);
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {car_id, customer_id, salesman_id, date};
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/sales", {
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
                Add a New Sale
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>Car Id</h6>
                        <input type='text' className='form-control' value={car_id} onChange={onEditCar}/>
                        <h6>Customer Id</h6>
                        <input type='text' className='form-control' value={customer_id} onChange={onEditCust}/>
                        <h6>Salesman Id</h6>
                        <input type='text' className='form-control' value={salesman_id} onChange={onEditMan}/>
                        <h6>Date (YYYY-MM-DD)</h6>
                        <input type='text' className='form-control' value={date} onChange={onEditDate}/>
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