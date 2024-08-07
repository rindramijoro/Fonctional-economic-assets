import Table from 'react-bootstrap/Table';
import './App.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <div className="border border-2 " style={{ width: '70vw', height: '17.8vh' }}>
        <Table striped bordered hover>
          <thead>
            <h1 style={{ position: 'absolute', top: '5vh', right: '39vw', fontSize: '70px' }}> H-BUSINESS</h1>
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
            <tr>
              <td>Iphone 14</td>
              <td>2500000 Ar</td>
              <td>2024-8-7</td>
              <td>2026-8-7</td>
              <td>5 %</td>
              <td>2500000 Ar</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>

          </tbody>
          <h4 className='mt-5'>Date picker</h4>
          <>
            <InputGroup>
              <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
              <Button variant='primary'>Envoyer</Button>
            </InputGroup>
          </>

        </Table>
      </div>
    </div>

  );

}

export default App;
