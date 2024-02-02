import { Link } from "react-router-dom";

function Home() {
     return(
          <>
          <div className="text-center">
               
               <Link to={"/Post"} className="btn">POST</Link>
               <Link to={"/Comments"} className="btn">COMMENTS</Link>
               <Link to={"/Albums"} className="btn">ALBUMS</Link>
               <Link to={"/Photos"} className="btn">PHOTOS</Link>
               <Link to={"/Todos"} className="btn">TODOS</Link>
               <Link to={"/Users"} className="btn">USERS</Link>
          </div>
          </>
     )
}

export default Home;