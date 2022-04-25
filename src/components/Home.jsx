import React from "react";

function Home() {
  return (
    <div className="home">
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
              Search for a person based on first and last name.
            </p>
            <p>
              Search for a person based on birthdate.
            </p>
            <p>
              Select person from a list.
            </p>
            <p>
              Display a tree (ancestor, descendent).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;