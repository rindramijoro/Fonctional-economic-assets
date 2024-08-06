import Table from 'react-bootstrap/Table';
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function FormFloatingBasicExample() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

function App() {
  return (
    <div>
      <Table responsive="sm">
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
          <tr>
            <td>Iphone 14 pro max</td>
            <td>829 €</td>
            <td>2024-8-6</td>
            <td>2026-8-6</td>
            <td>50%</td>
            <td>207,25 €</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
