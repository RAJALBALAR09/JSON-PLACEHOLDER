import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import Home from './Home';


function Post(){

  let [post,setpost] = useState([]);
     

     useEffect(() => {
          
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
              // handle success
              setpost(response.data)
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
                         <td>body</td>
                    </tr>
                    
               {
                    post.map((ele,ind)=>{
                         return(
                              <tr>
                                   <td>{ele.id}</td>
                                   <td>{ele.title}</td>
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
export default Post;