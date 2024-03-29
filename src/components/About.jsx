import React from "react";

function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
              This app is designed to display and update a genealogy database.
            </p>
            <p>
               
              <b>
                <i>
                  Version:       0.2
                </i>
              </b>
            </p>
            <p>
            <b>
                <i>
               
                   Version Date:  13 August 2022
                </i>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;