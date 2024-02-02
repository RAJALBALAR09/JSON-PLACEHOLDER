import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import Home from './Home';


function Todos(){

  let [todos,settodos] = useState([]);
     

     useEffect(() => {
          
          axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
              // handle success
              settodos(response.data)
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
                         <td>title</td>
                         <td>completed</td>
                    </tr>
                    
               {
                    todos.map((ele,ind)=>{
                         return(
                              <tr>
                                   <td>{ele.id}</td>
                                   <td>{ele.title}</td>
                                   <td>{ele. completed ? 'True' : 'False'}</td>
                              </tr>
                         )
                    })
               }
               </table>
          </Container>
          
          </>
     )
}
export default Todos;