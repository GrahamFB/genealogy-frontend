import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Choose what you want to do</h1>
            <p>
              Administration.
            </p>
            <p>
              Search for a person..
            </p>
            <p>
              Reports.
            </p>
            <p>
              Add New Person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;