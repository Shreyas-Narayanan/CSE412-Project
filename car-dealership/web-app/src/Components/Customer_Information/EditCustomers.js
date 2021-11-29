import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditCustomers({customer}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFName(customer.first_name);
        setLName(customer.last_name);
        setPNum(customer.phone_number);
        setAddr(customer.address);
        setCity(customer.city);
        setPCode(customer.postal_code);
        setState(customer.state);
        setCountry(customer.country);
        setShow(true);
    }

    const [first_name, setFName] = useState(customer.first_name);
    const [last_name, setLName] = useState(customer.last_name);
    const [phone_number, setPNum] = useState(customer.phone_number);
    const [address, setAddr] = useState(customer.address);
    const [city, setCity] = useState(customer.city);
    const [postal_code, setPCode] = useState(customer.postal_code);
    const [state, setState] = useState(customer.state);
    const [country, setCountry] = useState(customer.country);

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


    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {first_name, last_name, phone_number, address, city, postal_code, state, country};
            // eslint-disable-next-line
            const response = await fetch(`http://localhost:5000/customers/${customer.customer_id}`, {
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
                    <Modal.Title>Editing Customer {customer.customer_id}</Modal.Title>
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
                    <Button variant="primary" onClick={updateDescription}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}