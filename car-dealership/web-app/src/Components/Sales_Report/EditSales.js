import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditSales({sale}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCar(sale.car_id);
        setCust(sale.customer_id);
        setMan(sale.salesman_id);
        setDate(sale.date);
        setShow(true);
    }

    const [car_id, setCar] = useState(sale.car_id);
    const [customer_id, setCust] = useState(sale.customer_id);
    const [salesman_id, setMan] = useState(sale.salesman_id);
    const [date, setDate] = useState(sale.date);

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

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {car_id, customer_id, salesman_id, date};
            // eslint-disable-next-line
            const response = await fetch(`http://localhost:5000/sales/${sale.sales_id}`, {
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
                    <Modal.Title>Editing Sale {sale.sales_id}</Modal.Title>
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
                    <Button variant="primary" onClick={updateDescription}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}