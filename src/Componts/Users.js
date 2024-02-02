import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import Home from './Home';


function Users(){

  let [users,setusers] = useState([]);
     

     useEffect(() => {
          
          axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
              // handle success
              setusers(response.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        }, [])

     return(
          <>
          <Home/>
          <Container>
               <table className='border'>

                    <tr className='header'>
                         <td>ID</td>
                         <td>name</td>
                         <td>username</td>
                         <td>email</td>
                         <td>address</td>
                         <td>phone</td>
                         <td>website</td>
                    </tr>
                    
               {
                    users.map((ele,ind)=>{
                         return(
                              <tr>
                                   <td>{ele.id}</td>
                                   <td>{ele.name}</td>
                                   <td>{ele.username}</td>
                                   <td>{ele.email}</td>
                                   <Table striped bordered hover border={3}>
                                        <thead>
                                             <tr>
                                                  <th>street</th>
                                                  <th>suite</th>
                                                  <th>city</th>
                                                  <th>zipcode</th>
                                             </tr>
                                             <tr>
                                                  <td>{ele.address.street}</td>
                                                  <td>{ele.address.suite}</td>
                                                  <td>{ele.address.city}</td>
                                                  <td>{ele.address.zipcode}</td>
                                             </tr>
                                        </thead>
                                   </Table>
                                   <td>{ele.phone}</td>
                                   <td>{ele.website}</td>
                              </tr>
                         )
                    })
               }
               </table>
          </Container>
          
          </>
     )
}
export default Users;
