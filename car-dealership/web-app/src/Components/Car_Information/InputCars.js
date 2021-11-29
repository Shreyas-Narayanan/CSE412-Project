import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function InputCars() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setType("");
        setMake("");
        setModel("");
        setYear("");
        setNew("true");
        setColor("");
        setPrice("");
        setShow(true);
    }

    const [type, setType] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [isNew, setNew] = useState("true");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");

    const onEditType = (e) => {
        setType(e.target.value);
    }

    const onEditMake = (e) => {
        setMake(e.target.value);
    }

    const onEditModel = (e) => {
        setModel(e.target.value);
    }

    const onEditYear = (e) => {
        setYear(e.target.value);
    }

    // eslint-disable-next-line
    const onEditNew = (e) => {
        setNew(e.target.value);
    }

    const onEditColor = (e) => {
        setColor(e.target.value);
    }

    const onEditPrice = (e) => {
        setPrice(e.target.value);
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {type, make, model, year, isNew, color, price};
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/cars", {
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
                Add a New Car
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>Type</h6>
                        <input type='text' className='form-control' value={type} onChange={onEditType}/>
                        <h6>Make</h6>
                        <input type='text' className='form-control' value={make} onChange={onEditMake}/>
                        <h6>Model</h6>
                        <input type='text' className='form-control' value={model} onChange={onEditModel}/>
                        <h6>Year</h6>
                        <input type='text' className='form-control' value={year} onChange={onEditYear}/>
                        {/* <h6>New</h6>
                        <input type='text' className='form-control' value={isNew} onChange={onEditNew}/> */}
                        <h6>Color</h6>
                        <input type='text' className='form-control' value={color} onChange={onEditColor}/>
                        <h6>Price</h6>
                        <input type='text' className='form-control' value={price} onChange={onEditPrice}/>
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