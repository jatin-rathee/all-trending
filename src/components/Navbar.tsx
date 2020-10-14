import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Example: React.FC<{}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/">
          <NavbarBrand>Demo</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-3">
              <Link to="/youtube">
                <NavbarText>Youtube</NavbarText>
              </Link>
            </NavItem>
            <NavItem className="mx-3">
              <Link to="/github">
                <NavbarText>Github</NavbarText>
              </Link>
            </NavItem>
            <NavItem className="mx-3">
              <Link to="/twitter">
                <NavbarText>Twitter</NavbarText>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
