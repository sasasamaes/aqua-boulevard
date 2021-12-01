import { Col, Row } from 'react-bootstrap'
import PlanMasterImg from '../../img/masterPlan.png'
import Fondo4 from '../../img/fondo4.png'

import './Style.css'

const MasterPlan = ({ lg }) => {
  return (
    <Col lg={lg} className="master-container bg-dark text-light">
      <Row>
        <Col className="master-grid">
          <h3>12 AMENIDADES</h3>
        </Col>
        <Col className="master-grid">
          <h3>60% AREA VERDE</h3>
        </Col>
        <Col className="master-grid">
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
      <Row>
        <Col className="fondo4">
          <img alt="" src={Fondo4} className="d-inline-block align-top" />
        </Col>
      </Row>
    </Col>
  )
}

export default MasterPlan
