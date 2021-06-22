import React from "react";
import {Card,Button} from 'react-bootstrap'
import Phone from './phonenobg.png'
const Itemcard = ({imgg,Name,Price}) => {
  return (
    <div>
      <div className="card cardedit m-2" style={{width: "18rem"}}>
        <div className="card-body">
        <img className="card-img-top" src={imgg} alt="Card image cap" />
          <h5 className="card-title"> {Name} </h5>
          <h6>Rs:- {Price} /-</h6>
          <p className="card-text">
           we can populate this sections using phone information received through Api 
          </p>
          <a href="#" className="btn  btn-danger">
            BUY-NOW
          </a>
          <a href="#" className="btn mx-2 btn-primary">
            ADD TO CART
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Itemcard;
