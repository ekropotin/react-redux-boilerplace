import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import './NavigationBar.scss';

class NavigationBar extends React.Component {
  render () {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <IndexLinkContainer to='/'>
              <NavLink>Home</NavLink>
            </IndexLinkContainer>
          </NavItem>
          <LinkContainer to='/counter'>
            <NavLink>Counter</NavLink>
          </LinkContainer>
        </Nav>
      </div>
    );
  }
}

export default NavigationBar;
