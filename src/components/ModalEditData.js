import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalEditData({ handleClose, date, allDate, setAllDate, toggleModal }) {
  const [formData, setFormData] = useState({
    name: date.name,
    phone: date.phone,
    datetime: date.datetime,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedDate = {
      ...date,
      ...formData,
    };
    setAllDate(allDate.map((appuntamento) =>
      appuntamento.id === date.id ? updatedDate : appuntamento
    ));
  toggleModal()
  };

  return (
    <Modal show={true} onHide={(handleClose)} dialogClassName="modal-dark">
      <Modal.Header   className="bg-dark text-white">
        <Modal.Title>Edit Appointment for {date.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-secondary text-white">
        <form>
          <p>
            <strong>Phone:</strong>
            <input
              type="text"
              className='form-control'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              pattern="\d{10,}" // accetta solo numeri con almeno 10 cifre

            />
          </p>
          <p>
            <strong>Name:</strong>
            <input
              type="text"
              name='name'
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Date and Time:</strong>
            <input
              type="datetime-local"
              name='datetime'
              className="form-control"
              value={formData.datetime}
              onChange={handleChange}
              min={new Date().toISOString().slice(0, 16)}
              max="2999-12-31T23:59"
            />
          </p>
        </form>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditData;
