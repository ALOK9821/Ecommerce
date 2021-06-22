import React from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
    return (
            <div className=" login d-flex flex-wrap justify-content-around">
                <div className="customer">
                    <h2>Customer Signin</h2>
                  <h3>User Id:- </h3>  <input type="text" />
                  <h3>Password: </h3> <input type="text" /> <br />
                  <Link to="/Home"> <button className="btn-success">
                 LogIn  
                    </button></Link>
                </div>
                <div className="adminlogin">
                    <h2>Admin Portal</h2>
                    <h3>User Id:- </h3>  <input type="text" />
                  <h3>Password: </h3> <input type="text" /> <br />
                  <button className="btn-success">LogIn</button>
                </div>
            </div>
        
    )
}

export default Signin
