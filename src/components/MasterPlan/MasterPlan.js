import { Col, Row } from 'react-bootstrap'
import PlanMasterImg from '../../img/masterPlan.png'
import './Style.css'

const MasterPlan = ({ lg }) => {
  return (
    <Col lg={lg} className="master-container bg-dark text-light">
      <Row>
        <Col>
          <h3>12 AMENIDADES</h3>
        </Col>
        <Col>
          <h3>60% AREA VERDE</h3>
        </Col>
        <Col>
          <h3>SERVICIO DE INTERNET DE FIBRA OPTICA </h3>
        </Col>
      </Row>
      <Row>
        <Col className="master-img">
          <img
            alt=""
            src={PlanMasterImg}
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
    </Col>
  )
}

export default MasterPlan
