import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditCars({car}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setType(car.type);
        setMake(car.make);
        setModel(car.model);
        setYear(car.year);
        setNew(car.new);
        setColor(car.color);
        setPrice(car.price);
        setShow(true);
    }

    const [type, setType] = useState(car.type);
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [year, setYear] = useState(car.year);
    const [isNew, setNew] = useState(car.new);
    const [color, setColor] = useState(car.color);
    const [price, setPrice] = useState(car.price);

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

    const onEditNew = (e) => {
        setNew(e.target.value);
    }

    const onEditColor = (e) => {
        setColor(e.target.value);
    }

    const onEditPrice = (e) => {
        setPrice(e.target.value);
    }


    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {type, make, model, year, isNew, color, price};
            // eslint-disable-next-line
            const response = await fetch(`http://localhost:5000/cars/${car.car_id}`, {
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
                    <Modal.Title>Editing Car {car.car_id}</Modal.Title>
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
                        <h6>New</h6>
                        <input type='text' className='form-control' value={isNew} onChange={onEditNew}/>
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
                    <Button variant="primary" onClick={updateDescription}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}