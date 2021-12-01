import Navbar from '../components/Navbar'
import Slider from '../components/Slider/Slider'
import Form from '../components/Form/Form'

import MasterPlan from '../components/MasterPlan/MasterPlan'

import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row className="content">
        <Slider lg={9} />
        <Form lg={3} />
        <MasterPlan />
      </Row>
    </Container>
  )
}

export default Home
