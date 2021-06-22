import React from "react";
const Owner = () => {
  return (
    <div className="owner container">
      <div class="alert alert-primary" role="alert">
        Important message
      </div>
     <h1>Sales</h1>
     <hr />
     <h3>Samsung 25%</h3>
      <div className="progress mybar">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

      </div>
      <hr />
      <h3>Apple 50%</h3>
      <div className="progress mybar">
        <div
          className="progress-bar   bg-info"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <hr />
      <h3>Oneplus 75%</h3>
      <div className="progress mybar">
        <div
          className="progress-bar  bg-warning"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
       <hr />
       <h1>Reports</h1>
       <div className="salecards d-flex flex-wrap my-4 justify-content-around">
       <div className="card text-white bg-primary mb-3" style={{width  : "18rem"}} >
  <div className="card-header"><h4>Samsung</h4></div>
  <div className="card-body">
    <h5 className="card-title">Total products 100</h5>
    
  </div>
</div>
<div className="card text-white bg-secondary mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Apple</h4></div>
  <div className="card-body">
    <h5 className="card-title">total roducts 100</h5>
    
  </div>
</div>
<div className="card text-white bg-success mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Oneplus</h4></div>
  <div className="card-body">
    <h5 className="card-title">total products 100</h5>
    
  </div>
</div>
<div className="card text-white bg-danger mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Total sales</h4></div>
  <div className="card-body">
    <h5 className="card-title">52 items</h5>
    
  </div>
</div>
<div className="card text-dark bg-warning mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Profits</h4></div>
  <div className="card-body">
    <h5 className="card-title">25% profits</h5>
    
  </div>
</div>
<div className="card text-dark bg-info mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Losses</h4></div>
  <div className="card-body">
    <h5 className="card-title">No losses</h5>
    
  </div>
</div>
<div className="card text-dark bg-light mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Employee attendence</h4></div>
  <div className="card-body">
    <h5 className="card-title">50/50 (all present)</h5>
    
  </div>
</div>
<div className="card text-white bg-dark mb-3" style={{width : "18rem"}}>
  <div className="card-header"><h4>Total visits</h4></div>
  <div className="card-body">
    <h5 className="card-title">100</h5>
    
  </div>
</div>
<div className="card text-white bg-dark mb-3" style={{width : "18rem"}}>
  <div className="card-header">Total cutomer logins</div>
  <div className="card-body">
    <h5 className="card-title">90</h5>
    
  </div>
</div>
       </div>
    </div>
  );
};

export default Owner;
