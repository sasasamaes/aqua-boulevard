import { Col, Row } from 'react-bootstrap'

import Tree from '../../img/icons/tree.svg'
import Run from '../../img/icons/run.svg'
import Gym from '../../img/icons/gym.svg'

import Swim from '../../img/icons/swim.svg'
import Dog from '../../img/icons/dog.svg'
import Club from '../../img/icons/club.svg'

import Fun from '../../img/icons/fun.svg'
import SwimChild from '../../img/icons/swim-child.svg'
import Bbq from '../../img/icons/bbq.svg'

import Fut from '../../img/icons/fut.svg'
import Bodega from '../../img/icons/bodega.svg'
import Parking from '../../img/icons/parking.svg'

import Slider from '../Slider/Slider'
import './style.css'

const Amenities = ({ lg }) => {
  return (
    <Col lg={lg} className="amenities-container bg-light">
      <Row>
        <Col className="amenities-menu">
          <Row>
            <Col>
              <h3>60% AREA VERDE</h3>
              <img alt="" src={Tree} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>SENDEROS</h3>
              <img alt="" src={Run} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>GYM</h3>
              <img alt="" src={Gym} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>PISCINA ADULTO</h3>
              <img alt="" src={Swim} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>PET PARK</h3>
              <img alt="" src={Dog} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>CASA CLUB</h3>
              <img alt="" src={Club} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>JUEGOS INFANTILES</h3>
              <img alt="" src={Fun} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>PISCINA INFANTIL</h3>
              <img
                alt=""
                src={SwimChild}
                className="d-inline-block align-top"
              />
            </Col>
            <Col>
              <h3>AREA BBQ</h3>
              <img alt="" src={Bbq} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>CANCHA MULTIUSO</h3>
              <img alt="" src={Fut} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>MINI BODEGA</h3>
              <img alt="" src={Bodega} className="d-inline-block align-top" />
            </Col>
            <Col>
              <h3>PARQUEO VISITAS</h3>
              <img alt="" src={Parking} className="d-inline-block align-top" />
            </Col>
          </Row>
        </Col>
        <Col className="amenities-slider">
          <Slider lg={9} />
        </Col>
      </Row>
    </Col>
  )
}

export default Amenities
