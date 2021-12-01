import { Carousel, Col } from 'react-bootstrap'
import Fondo from '../../img/fondo1.png'
// import Fondo2 from '../img/fondo2.png'
// import Fondo3 from '../img/fondo3.png'
import './Style.css'

const Slider = ({ lg }) => {
  return (
    <Col lg={lg} className="slider-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Fondo} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
        <img className="d-block w-100" src={Fondo2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Fondo3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      </Carousel>
    </Col>
  )
}

export default Slider
