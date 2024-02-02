import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import Home from './Home';

function Albums() {

     let [albums, setalbums] = useState([]);


     useEffect(() => {

          axios.get('https://jsonplaceholder.typicode.com/albums')
               .then(function (response) {
                    // handle success
                    setalbums(response.data)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          <>
               <Home />
               <Container>
                    <table className='border'>

                         <tr className='header'>
                              <td>ID</td>
                              <td>title</td>
                         </tr>

                         {
                              albums.map((ele, ind) => {
                                   return (
                                        <tr>
                                             <td>{ele.id}</td>
                                             <td>{ele.title}</td>
                                        </tr>
                                   )
                              })
                         }
                    </table>
               </Container>
          </>
     )

}
export default Albums;