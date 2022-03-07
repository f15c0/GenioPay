import { Button, Col, Container, Row, Nav} from "react-bootstrap";

const Wallet = () => {
    return ( 
        <div>
                <Container>
                        <Row>
                            <div className="content-title">
                                Your Wallet (s)
                                <div className="content-title2">
                                    <Button variant="success" className="wallet-btn3">
                                    <i class="bi bi-plus"></i>{' '}
                                        Create New Wallet
                                    </Button>
                                </div>
                            </div> 
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Container>
                                <Nav variant="pills" defaultActiveKey="/">
                                    <Nav.Item>
                                        <Nav.Link href="#">Active (3)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Inactive (2)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="disabled" >
                                             Closed(0)
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Container>
                            </Col>
                            <Col md={6}>
                              
                            </Col>
                        </Row>
                </Container>
        </div>
     );
}
 
export default Wallet;