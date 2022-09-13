import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  
  return (
    <div className="App">
      <Container>
        <Row>
          < Col md={6}> 
          <BookList/>
          <BookDetails />
          </Col>


          <Col></Col>
        </Row>

      </Container>
     </div>
  );
}

export default App;
