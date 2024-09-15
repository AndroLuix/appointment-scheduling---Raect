import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


const FormDate = ({ setAllDate }) => {
    const [appuntamento, setAppuntamento] = useState({
        name: '',
        phone: '',
        datetime: '',
    })

    const handleSubit = (e) => {
        e.preventDefault();
        if (appuntamento.name && appuntamento.datetime && appuntamento.phone) {
            setAllDate(prevAllDate => [
                ...prevAllDate, //manienti gli appuntamenti esistenti
                {
                    id: Date.now().toString(),
                    ...appuntamento, //inserisici i nuovi dati del form
                }
            ]);


            setAppuntamento({ name: '', phone: '', datetime: '' });
        } else {
            alert('Insert All Data');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppuntamento({ ...appuntamento, [name]: value });
        

    }

    return (
        <form className='p-5  rounded border border-secondary' onSubmit={handleSubit}>
            <div className="form-group">
                <label htmlFor="full-name">Name</label>
                <input type="Full Name" name='name' className="form-control" id="full-name" placeholder="Full Name"
                    value={appuntamento.name}
                    onChange={handleChange}

                />
            </div>

            <div className="form-group">
                <label htmlFor="tel">Phone number</label>
                <input type="tel" name='phone' className="form-control" id="tel" placeholder="555-555-1234"
                    pattern="\d{10,}" // accetta solo numeri con almeno 10 cifre

                    value={appuntamento.phone}
                    onChange={handleChange}
                />
                <small id="cellHelp" className="form-text text-muted">Minimum 10 numbers</small>
            </div>

            <div className="form-group">
                <label htmlFor="datetime">Date and Time</label>
                <input type="datetime-local" name='datetime' className="form-control" id="datetime"
                    value={appuntamento.datetime}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                    max="2999-12-31T23:59"
                />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-75 my-2 shadow mt-5">Add Date</button>
            </div>
        </form>
    )
}

export default FormDate