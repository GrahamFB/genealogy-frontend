import React from "react";

function Login() {
  return (
    <div className="login">
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
            <h1 class="font-weight-light">Login</h1>
            <p>
            Genealogy System Login
            </p>
            <p>
              <b>
                  Name:
                  </b>
            </p>
            <p>
              <b>
                  Password:
                  </b>
            </p>
            <p>
           
                or 
            </p>
            <p>
              <b>
                Login using Google
                </b>
            </p>
            <p>
            <b>
                Login using Facebook
                </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;