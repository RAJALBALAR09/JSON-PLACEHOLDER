import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Col, Container, Row, Table, Card, Button } from 'react-bootstrap';
import Home from './Home';


function Photos() {

     let [photos, setphotos] = useState([]);


     useEffect(() => {

          axios.get('https://jsonplaceholder.typicode.com/photos')
               .then(function (response) {
                    // handle success
                    setphotos(response.data)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          <>

               <div>
                   <Home/>
                    <Container>
                         <Row>

                              {
                                   photos.map((ele, ind) => {
                                        return (
                                             
                                                  <Col>
                                                       <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src={ele.url} />
                                                            <Card.Body>
                                                                 <Card.Title>{ele.title}</Card.Title>
                                                                 <Card.Text>
                                                                      {ele.thumbnailUrl}
                                                                 </Card.Text>
                                                                 {/* <Button variant="primary">Go somewhere</Button> */}
                                                            </Card.Body>
                                                       </Card>
                                                  </Col>
                                             

                                        )
                                   })
                              }

                         </Row>
                    </Container>
               </div>
          </>
     )

}
export default Photos;