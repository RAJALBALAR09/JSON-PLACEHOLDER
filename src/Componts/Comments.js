
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import Home from './Home';

function Comments() {

     let [comments,setcomments] = useState([]);


     useEffect(() => {

          axios.get('https://jsonplaceholder.typicode.com/comments')
               .then(function (response) {
                    // handle success
                    setcomments(response.data)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          <>
          <Home/>
               <Container>
                    <table className='border'>

                         <tr className='header'>
                              <td>ID</td>
                              <td>title</td>
                              <td>email</td>
                              <td>body</td>
                         </tr>

                         {
                             comments.map((ele,ind)=>{
                              return(
                                   <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.body}</td>
                                   </tr>
                              )
                             })
                         }
                    </table>
               </Container>
          </>
     )
}
export default Comments;