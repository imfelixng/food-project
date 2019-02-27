import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Table from './components/Table/Table';
import Event from './components/Event/Event';
import Gallery from './components/Gallery/Gallery';
import MenuGrid from './components/Menu/Grid/MenuGrid';
import MenuList from './components/Menu/List/MenuList';
import Blog from './components/Blog/Blog';
import BlogGallery from './components/BlogGallery/BlogGallery';
import BlogDetail from './components/BlogDetail/BlogDetail';
import About from './components/About/About';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = '/' exact component = { Home }/>
      <Route path = '/table' exact component = { Table }/>
      <Route path = '/event' exact component = { Event }/>
      <Route path = '/gallery' exact component = { Gallery }/>
      <Route path = '/menu-grid' exact component = { MenuGrid }/>
      <Route path = '/menu-list' exact component = { MenuList }/>
      <Route path = '/blog' exact component = { Blog }/>
      <Route path = '/blog-gallery' exact component = { BlogGallery }/>
      <Route path = '/blog-detail' exact component = { BlogDetail }/>
      <Route path = '/about' exact component = { About }/>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
