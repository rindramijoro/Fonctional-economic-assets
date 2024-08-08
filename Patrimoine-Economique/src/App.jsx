import Table from 'react-bootstrap/Table';
import './App.css'
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import data from '../data.json';
import { format } from 'date-fns';

const PickDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container mt-4">
      <InputGroup className="col justify-content-evenly ">
        <h3>Choisissez une date :</h3>
        <div className="d-flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control flex-grow-1 border-end-0 rounded-0"
            dateFormat="yyyy/MM/dd"
            style={{ height: 'calc(1.5vh + .75vh + 2px)' }}
          />
          <Button as="input" type="submit" value="Envoyer" className='border-start-0 rounded-0' style={{ height: 'calc(3vh + .75vh + 2px)' }} />
        </div>

      </InputGroup>

    </div>
  );
};

function GestionPatrimoine() {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetch('../data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const calculateCurrentValue = (initialValue, startDate, endDate, amortizationRate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date(currentDate);

    if (now > end) {
      return "Fin de la Patrimoine";
    }

    const elapsedDuration = (now - start) / (1000 * 60 * 60 * 24 * 365);

    const depreciation = amortizationRate * elapsedDuration;
    const currentValue = initialValue * (1 - depreciation);

    return Math.max(currentValue, 0);
  };

  return (
    <div className="border border-2 " style={{ width: '70vw', height: '13.5vh' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>LIBELLE</th>
            <th>VALEUR INITIALE</th>
            <th>DEBUT</th>
            <th>FIN</th>
            <th>AMORTISSEMENT</th>
            <th>VALEUR ACTUELLE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.LIBELLE}</td>
              <td>{item.INITIALE} Ar</td>
              <td>{item.DEBUT}</td>
              <td>{item.FIN}</td>
              <td>{item.AMORTISSEMENT * 100} %</td>
              <td>{calculateCurrentValue(item.INITIALE, item.DEBUT, item.FIN, item.AMORTISSEMENT).toFixed(2)} Ar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <GestionPatrimoine />
      </div>
      <div>
        <PickDate />
      </div>
    </div>

  );

}

export default App;
