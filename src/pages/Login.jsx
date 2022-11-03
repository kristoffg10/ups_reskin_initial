import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

import "../styles/styles.css";

//import PHlogo from "../assets/images/philippines.png"
import FBlogo from "../assets/images/facebook_minilogo.png";
import Googlelogo from "../assets/images/google_minilogo.png";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

const handleClickUnderDevelopment = () => {
    let timerInterval
    Swal.fire({
      icon: 'info',
        imageWidth: 115,
        imageHeight: 100,
        imageAlt: 'Under development',
        title: 'This button is still under development!',
        allowOutsideClick: false,
        // html: 'Refreshing page in a few seconds.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          localStorage.setItem('isLoggedIn', true);
        }
      })
      setTimeout((function() {
        window.location.href = "/dashboard" 
      }), 1600);
}

const handleSubmit = (e) => {
  e.preventDefault();
  this.setState({isLoading: true});
  const url =  'https://v2.unified.ph/admin/login';
  this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJlbmVib3kiLCJyZWdjb2RlIjoidGVzdCIsImlhdCI6MTY1MzM3ODI2M30.nk3ltTC06VmmDuqYAwNpiP-URQGNsg_IwvoAnQZewbQ';
  const loginNameRef = this.state.username;
  const loginPasswordRef = this.state.loginPasswordRef;
  let bodyFormData = new FormData();
  bodyFormData.set('username', loginNameRef);
  bodyFormData.set('password', loginPasswordRef);
  axios.post(url, bodyFormData, {
      headers: {
          'Authorization': `bearer ${this.token}`
      },
  })
      .then(result => {
          if (result.status === 200) {
              Swal.fire({
                  position: 'middle',
                  icon: 'success',
                  title: 'Logged In Successfully!',
                  showConfirmButton: false,
                  timer: 1500
                })
              // console.log(result.data.result[0])
              setTimeout((function() {
                  window.location.href = "/kyc"
                }), 1600);
              localStorage.setItem('currentUser', JSON.stringify(result.data.result[0]));
              //this.setState({redirect: true, isLoading: false});
              localStorage.setItem('isLoggedIn', true);
          }
      })
      .catch(error => {
          console.log(error);
          Swal.fire({
              position: 'middle',
              icon: 'error',
              title: 'Invalid Credentials!',
              text: 'Please try again.',
              showConfirmButton: false,
              timer: 1500
            })
          this.setState({authError: true, isLoading: false});
      });
};

  return (
    <Helmet title="Login Page">
      {/* <CommonSection title="Login" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-8" onSubmit={handleSubmit}>
                <div className="form__group">
                  <p className="title__login1">Login to your </p><br></br>
                  <p className="title__login2" style={{ color: '#FFC914' }}>account</p>
                  <div>
                  <p className="PIN__title" >Enter Email/Username</p>
                  <div class="row">
                    <div class="col-12">
                    <input
                    className="input__Text"
                    type="text"
                    placeholder="Enter Username"                    
                    //required
                    maxLength={24}
                    ref={loginNameRef}   
                  />
                    </div>
                  </div> 
                  </div>
                </div>
                <div className="form__group">
                  <p className="PIN__title">Enter your Password</p>
                  <input
                    className="input__PIN"
                    type="password"
                    placeholder="Enter Password"
                    //onKeyPress={(e) => { const re = /[0-9]+/g; if (!re.test(e.key)) e.preventDefault(); }}
                    //required
                    maxLength={30}
                    ref={loginPasswordRef}
                  />
                     <div className="invalid-feedback">
                        The PIN you have entered is incorrect / does not exist.
                     </div>
                  <br></br>
                  <Link to={'#'} className="forgot__pass" onClick={handleClickUnderDevelopment}>I forgot my password</Link>
                </div>

                <button type="submit" className="Signin__btn" onClick={handleClickUnderDevelopment}>
                  Sign In 
                </button>

                <p className="terms_condition" >
                  By continuing, you agree to our <b>Terms of Service </b>  
                  and acknowledge that you've read our <b>Privacy Policy</b>.
                </p>
                <p>
                  <b>or continue using</b>
                </p>

                <span>
                <Link to={'#'}>
                  <img className="logo__apps" src={Googlelogo} alt="google_logo" onClick={handleClickUnderDevelopment}></img>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to={'#'}>
                  <img className="logo__apps" src={FBlogo} alt="facebook_logo" onClick={handleClickUnderDevelopment}></img>
                </Link>{" "}
              </span>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
