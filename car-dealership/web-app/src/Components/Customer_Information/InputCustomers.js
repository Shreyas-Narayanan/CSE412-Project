import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function InputCustomers() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFName("");
        setLName("");
        setPNum("");
        setAddr("");
        setCity("");
        setPCode("");
        setState("");
        setCountry("");
        setShow(true);
    }

    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [phone_number, setPNum] = useState("");
    const [address, setAddr] = useState("");
    const [city, setCity] = useState("");
    const [postal_code, setPCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const onEditFName = (e) => {
        setFName(e.target.value);
    }

    const onEditLName = (e) => {
        setLName(e.target.value);
    }

    const onEditPNum = (e) => {
        setPNum(e.target.value);
    }

    const onEditAddr = (e) => {
        setAddr(e.target.value);
    }

    const onEditCity = (e) => {
        setCity(e.target.value);
    }

    const onEditPCode = (e) => {
        setPCode(e.target.value);
    }

    const onEditState = (e) => {
        setState(e.target.value);
    }

    const onEditCountry = (e) => {
        setCountry(e.target.value);
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {first_name, last_name, phone_number, address, city, postal_code, state, country};
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/customers", {
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
                Add a New Customer
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>First Name</h6>
                        <input type='text' className='form-control' value={first_name} onChange={onEditFName}/>
                        <h6>Last Name</h6>
                        <input type='text' className='form-control' value={last_name} onChange={onEditLName}/>
                        <h6>Phone Number</h6>
                        <input type='text' className='form-control' value={phone_number} onChange={onEditPNum}/>
                        <h6>Address</h6>
                        <input type='text' className='form-control' value={address} onChange={onEditAddr}/>
                        <h6>City</h6>
                        <input type='text' className='form-control' value={city} onChange={onEditCity}/>
                        <h6>Postal Code</h6>
                        <input type='text' className='form-control' value={postal_code} onChange={onEditPCode}/>
                        <h6>State</h6>
                        <input type='text' className='form-control' value={state} onChange={onEditState}/>
                        <h6>Country</h6>
                        <input type='text' className='form-control' value={country} onChange={onEditCountry}/>
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