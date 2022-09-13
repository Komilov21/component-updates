import { Component } from 'react'
import {Card} from 'react-bootstrap'

 class BookDetails extends Component {
    state={
        booksObject:null,
    }


    componentDidMount(){
        this.fetchBook()
    }


    fetchBook =()=>{
        fetch("https://striveschool-api.herokuapp.com/api/comments",
        { method:"GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3NzQ5OTFlYjc2ZDAwMTUxNTAxODkiLCJpYXQiOjE2NjI5OTM1NDUsImV4cCI6MTY2NDIwMzE0NX0.rIwTc_Mxlncui9nOXxghz-kHKSnPFS5j9CzzddolWoE"
            }})
      
        .then(response =>{
            if(response.ok){
                return response.json();
            }
        })
        .then (book => {
            console.log(book)
            // this.setState({
            // booksObject:book[0]
            // })
        })
    }


  render() {
    // console.log("Props", this.state.bookTitle)
    return (
        <Card >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default BookDetails