import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const visitedPlaces = [
    { id: 1, name: 'Cuma öncesi dua ettik, dua aldık.', location: 'Mevlana Türbesi', image: 'https://pbs.twimg.com/media/GEM13p0XYAAFdXv?format=jpg&name=medium', mapLink: 'https://maps.google.com/?q=Mevlana+Türbesi' },
    { id: 2, name: 'Cuma öncesi dua ettik, dua aldık.', location: 'Bedesten Çarşısı', image: 'https://pbs.twimg.com/media/GEM15HOX0AA0jw8?format=jpg&name=medium', mapLink: 'https://maps.google.com/?q=Konya+Bedesten+Çarşısı' },
    { id: 3, name: 'Cuma öncesi dua ettik, dua aldık.', location: 'Üçler Mezarlığı', image: 'https://pbs.twimg.com/media/GEM14OyW0AACbhi?format=jpg&name=medium', mapLink: 'https://maps.google.com/?q=Üçleer+Mezarlığı' },
    { id: 4, name: 'Üç Aylar’ın müjdecisi Regaib Gecemiz mübarek olsun.', location: 'Kapu Camii', image: 'https://pbs.twimg.com/media/GDlEIenXcAAKkaG?format=jpg&name=4096x4096', mapLink: 'https://maps.google.com/?q=Konya+Kapu+Cami' },
    { id: 5, name: 'Bizim Meram’ın güzelliklerini görmek için Ankara’dan gelen misafirlerimizle Tarihi Meram Köprüsü civarında karşılaştık.', location: 'Tarihi Meram Köprüsü', image: 'https://pbs.twimg.com/media/GDE8Dp2W8AAKDgu?format=jpg&name=4096x4096', mapLink: 'https://maps.google.com/?q=Tarihi+Meram+Köprüsü' },
  ];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Our Mayor's Visits</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="https://www.meram.bel.tr/">Our Meram Official Website</Nav.Link>
              <Nav.Link href="https://www.meram.bel.tr/baskan">About Our Mayor</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Our Mayor's Visits</h1>
            {visitedPlaces.map((place) => (
              <Card key={place.id} style={{ marginBottom: '1rem' }}>
                <Card.Img variant="top" src={place.image} alt={place.name} />
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>Location: {place.location}</Card.Text>
                  <Card.Text>
                    <a href={place.mapLink} target="_blank" rel="noopener noreferrer">
                      View on Map
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;