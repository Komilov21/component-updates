import { Component } from 'react'
import {Form} from 'react-bootstrap'

class BookList extends Component {
    state={
        bookTitle:"Book 1"
      }


  render() {
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label className="text-white" style={{fontSize:"30px"}}>Strive Books</Form.Label>
        <Form.Control as="select" value={this.state.bookTitle} onChange={(e) => this.setState({bookTitle:e.target.value})}>
          <option>Book </option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </Form.Control>
      </Form.Group>
    )
  }
}

export default BookList
