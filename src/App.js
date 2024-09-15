import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import List from './components/List';
import FormDate from './components/FormDate';

function App() {

  const [allDate, setAllDate] = useState([]);

 

  return (
    <section >
      <div className="container d-flex justify-content-center flex-column my-5 gap-3">
        <h2>Prossimi Incontri</h2>
        <div className='shadow px-2'>
          <FormDate setAllDate={setAllDate}/>
          <List allDate={allDate} setAllDate={setAllDate}/>

        </div>


      </div>
    </section>
  );
}

export default App;
