import React, { useEffect, useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import config from "../../config";

import logo from "../../assets/images/logo.png";
import "./Header.scss";

const nav_link = [
  {
    path: config.routes.home,
    display: "Home",
  },
  {
    path: config.routes.about,
    display: "About",
  },
  {
    path: config.routes.tours,
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    window.removeEventListener("scroll", stickyHeaderFunc);
    return;
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      className={(navClass) => (navClass.isActive ? "active__link" : "")}
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={config.routes.login}>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to={config.routes.register}>Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
