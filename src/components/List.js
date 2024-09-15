import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalEditData from './ModalEditData';




const List = ({ allDate, setAllDate }) => {



    const [modal, showModal] = useState(false)
    const [client, setClient] = useState([])
    const toggleModal = (date) => {
        showModal(!modal)
        setClient(date)
    }
    const deleteButton = (date) => {
        if (window.confirm(`Are you sure you want to delete this appointment ${date.name} at ${Date(date.datetime).toString()}`)) {

            console.log("Appointment deleted:", date.id);
            setAllDate(allDate.filter(el => el.id !== date.id));

        }
    }




    console.log(allDate)
    if (allDate.length === 0) {
        return (
            <div className="bg-white my-5 rounded shadoww w-25 mx-auto">
                <p className="text-center text-dark "> No Appontments, add one</p>
            </div>
        )
    } else {
        return (
            <div className='list-date'>
                <div className="bg-white my-5 rounded shadoww w-25 mx-auto">
                    <h2 className='text-center text-dark'>Appointment List</h2>
                </div>


                <div className="bg-white rounded">
                    <ul className="list-group  ">
                        {
                            allDate
                                .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
                                .map((date) => (
                                    <li key={date.id} className='list-group-item d-flex justify-content-between align-items-center flex-column'>
                                        <h5>{new Date(date.datetime).toLocaleString('it-IT', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</h5>
                                        <h5>Client: {date.name}</h5>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor"
                                                class="bi bi-telephone" viewBox="0 4 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                            <span className='ms-4 me-3 text-success fs-4'>{date.phone}</span>
                                        </p>

                                        <div className="d-flex gap-5 pb-4">
                                            <button className="btn btn-danger" onClick={() => deleteButton(date)}>Delete</button>
                                            <button className="btn btn-primary" onClick={() => toggleModal(date)}>Edit</button>
                                        </div>

                                    </li>

                                ))
                        }
                    </ul>
                </div>
                {
                    modal && (<ModalEditData date={client} allDate={allDate} setAllDate={setAllDate} toggleModal={toggleModal} />)

                }


            </div>

        )
    }

}

export default List