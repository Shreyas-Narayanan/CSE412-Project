import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function InputMan() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setF("");
        setL("");
        setYW("");
        setShow(true);
    }

    const [first_name, setF] = useState("");
    const [last_name, setL] = useState("");
    const [years_worked, setYW] = useState("");

    const onEditF = (e) => {
        setF(e.target.value);
    }

    const onEditL = (e) => {
        setL(e.target.value);
    }

    const onEditYW = (e) => {
        setYW(e.target.value);
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {first_name, last_name, years_worked};
            // eslint-disable-next-line
            const response = await fetch("http://localhost:5000/salesman", {
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
                Add a New Salesman
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Salesman</Modal.Title>
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
                    <Button variant="primary" onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}