import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import {Display} from "../Maps/mapDisplay.js";



export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Hello" } />
        <Route exact path="/about" component={() => "About" } />
        <Route exact path="/Pages" component={() => "Pages" } />
        <Route exact path="/faq" component={() => "FAQ" } />
        <Route exact path="/contact" component={() => "Contact" } /> 
        <Route exact path="/maps" component={Display} />         
      </Switch>
    </Container>
)
//  <Route exact path="/contact" component={() => "Contact" } />        Create a page with just one word 
//   <Route exact path="/maps" component={() => "Maps" } />