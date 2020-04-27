import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy,faMap } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Xcie Maps</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>SideBar</p>
          <NavItem>
            <NavLink tag={Link} to={'/'}>
              <FontAwesomeIcon icon={faHome} className="mr-2"/>Home
            </NavLink>
            </NavItem>

            <NavItem>
            <NavLink tag={Link} to={'/maps'}>
              <FontAwesomeIcon icon={faMap} className="mr-2"/>Maps
            </NavLink>
            </NavItem>
            

          <NavItem> 
            <NavLink tag={Link} to={'/about'}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to={'/faq'}>
              <FontAwesomeIcon icon={faQuestion} className="mr-2"/>FAQ
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to={'/contact'}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Contact
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  

export default SideBar;
