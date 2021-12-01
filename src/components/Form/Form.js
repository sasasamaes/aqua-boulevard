import { Form, Button, Col, Row } from 'react-bootstrap'
import Logo from '../../img/logo2.png'
const FormComponent = ({ lg }) => {
  return (
    <Col lg={lg} className="form-container bg-dark p-4">
      <Row>
        <Col lg={12}>
          <img
            alt=""
            src={Logo}
            width="150"
            className="d-inline-block align-top"
          />
        </Col>
        <Col className="text-light">
          <p>APARTAMENTOS EN CONDOMINIO A 1,5 KM DE RUTA 27,LA. GUACIMA.</p>
          <h2>Desde $105 000</h2>
          <p>LLENA EL FORMULARIO PARA RECIBIR MAS INFORMACION.</p>
        </Col>
      </Row>

      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type="text" placeholder="Nombre Completo*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Correo*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTel">
          <Form.Control type="text" placeholder="Teléfono*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="text" placeholder="Motivo de interés*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComments">
          <Form.Control as="textarea" rows={3} placeholder="Comentarios*" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Contactanos
        </Button>
        <p className="text-light">Tu información es 100% confidencial</p>
      </Form>
    </Col>
  )
}

export default FormComponent
