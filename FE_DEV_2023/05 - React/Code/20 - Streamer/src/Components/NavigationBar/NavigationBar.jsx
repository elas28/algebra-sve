import { useState } from 'react';
import { Container, Navbar, Nav, Form, Row, Col } from 'react-bootstrap';
import Streamer from '../../Images/Logo/streamer.svg';

export default function NavigationBar() {

    const [query, setQuery] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location = `/search?searchTerm=${query}`
    }

    return (
        <Navbar expand='lg' className='navbar-dark sticky-top'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src={Streamer} className='logo' alt='Stream+' />
                </Navbar.Brand>

                {/* <Navbar.Toggle aria-controls='navbarScroll' /> */}

                <Navbar.Collapse id='navbarScroll'>
                    <Nav navbarScroll>
                        <Nav.Link href='/trending/tv/week'>TV Shows</Nav.Link>
                        <Nav.Link href='/trending/movie/week'>Movies</Nav.Link>
                    </Nav>

                    <Form className='search' onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Control type='text' placeholder='search' onChange={(e) => setQuery(e.target.value)} />
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}