import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/UPSlogo.png";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  //const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // const toggleCart = () => {
  //   dispatch(cartUiActions.toggle());
  // };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo"/>
        
          </div>
          <h5 className="page__title">UPS Web Portal</h5>
            <Link to={"/login"}>Our Website</Link>
            <Link to={"/help"}>Help</Link>
            <Link className="nav__register" to="registerDealer"><button class="btn btn-outline-dark">Create Account</button></Link>
  
        

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>

        </div>
      </Container>
    </header>
  );
};

export default Header;