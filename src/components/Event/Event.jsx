import React, { Component } from 'react'

export default class Event extends Component {
  render() {
    return (
      <React.Fragment>
  <div id="preloader">
    <div className="loader absolute-center">
      <div className="loader__box"><b className="top" /></div>
      <div className="loader__box"><b className="top" /></div>
      <div className="loader__box"><b className="top" /></div>
    </div>
  </div>
  {/*================ Frist hader Area =================*/}
  <div className="first_header">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="header_contact_details">
            <a href="#"><i className="fa fa-phone" />+1 (168) 314 5016</a>
            <a href="#"><i className="fa fa-envelope-o" />+1 (168) 314 5016</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event_btn_inner">
            <a className="event_btn" href="table.html"><i className="fa fa-table" aria-hidden="true" />Book a Table</a>
            <a className="event_btn" href="event.html"><i className="fa fa-calendar" aria-hidden="true" />Book an Event</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="header_social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-rss" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*================End Footer Area =================*/}
  {/*================End Footer Area =================*/}
  <header className="main_menu_area">
    <nav className="navbar navbar-default">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#"><img src="img/logo-1.png" alt /></a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="index.html">Home</a></li>
            <li className="dropdown submenu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About US <i className="fa fa-angle-down" aria-hidden="true" /></a>
              <ul className="dropdown-menu">
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="about-us2.html">About Us2</a></li>
              </ul>
            </li>
            <li className="dropdown submenu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <i className="fa fa-angle-down" aria-hidden="true" /></a>
              <ul className="dropdown-menu">
                <li><a href="menu-grid.html">Menu Grid</a></li>
                <li><a href="menu-list.html">Menu List</a></li>
              </ul>
            </li>
            <li><a href="gallery.html">Gallery</a></li>
            <li className="dropdown submenu active">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="fa fa-angle-down" aria-hidden="true" /></a>
              <ul className="dropdown-menu">
                <li><a href="event.html">Event</a></li>
                <li><a href="table.html">Table</a></li>
              </ul>
            </li>
            <li className="dropdown submenu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News <i className="fa fa-angle-down" aria-hidden="true" /></a>
              <ul className="dropdown-menu">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-gallery.html">Blog Gallery</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact US</a></li>
            <li><a href="#"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
          </ul>
        </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
    </nav>
  </header>
  {/*================End Footer Area =================*/}
  {/*================Banner Area =================*/}
  <section className="banner_area">
    <div className="container">
      <div className="banner_content">
        <h4>Event Form</h4>
        <a href="#">Home</a>
        <a className="active" href="table.html">Event Form</a>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================Booking Table Area =================*/}
  <section className="booking_table_area booking_area_white">
    <div className="container">
      <div className="s_black_title">
        <h3>Book a</h3>
        <h2>Table</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <form className="form_area">
        <div className="row">
          <div className="col-md-4 form-group">
            <div className="input-append date form_datetime">
              <input size={16} type="text" defaultValue readOnly placeholder="Date" />
              <span className="add-on"><i className="icon-th" /></span>
            </div>
          </div>
          <div className="col-md-4 form-group">
            <div className="input-append date form_time">
              <input size={16} type="text" defaultValue readOnly placeholder="Dining Time" />
              <span className="add-on"><i className="icon-th" /></span>
            </div>
          </div>
          <div className="col-md-4 form-group">
            <div className="party_size">
              <select className="selectpicker">
                <option>Party Size</option>
                <option>Party Size 2</option>
                <option>Party Size 3</option>
              </select>
            </div>
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="form-group col-md-4">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="phone" placeholder="Phone" />
          </div>
          <div className="form-group col-md-12">
            <textarea className="form-control" rows={3} placeholder="Additional notes.." defaultValue={""} />
          </div>
          <div className="col-md-12 form-group">
            <button type="button" className="btn btn-default submit_btn">BOOK MY TABLE</button>
          </div>
        </div>
      </form>
      <div className="row map_contact">
        <div className="col-md-6">
          <div className="map_area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387145.8666396062!2d-74.25819367467702!3d40.70531099097622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1489317146051" style={{border: 0}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_contact_info">
            <h3>Contact Information</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor utim labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <ul>
              <li><a href="#"><span>Address:</span>RedCayenne Restaurant, 414 Columbus Ave, San Francisco, CA 94133</a></li>
              <li><a href="#"><span>Phone:</span>+0 000-000-0000</a></li>
              <li><a href="#"><span>Email</span> support@themeXart.com</a></li>
            </ul>
            <h4>Opening Times</h4>
            <h5>Monday - Friday 9am - 11pm</h5>
            <h5>Saturday 2pm - 10pm | Sunday 2pm - 10pm</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Booking Table Area =================*/}
  {/*================End Recent Blog Area =================*/}
  <footer className="footer_area">
    <div className="footer_widget_area">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <aside className="f_widget about_widget">
              <div className="f_w_title">
                <h4>ABOUT RedCayenne</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut.</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </aside>
          </div>
          <div className="col-md-3">
            <aside className="f_widget contact_widget">
              <div className="f_w_title">
                <h4>CONTACT US</h4>
              </div>
              <p>Have questions, comments or just want to say hello:</p>
              <ul>
                <li><a href="#"><i className="fa fa-envelope" />backpiper.com@gmail.com</a></li>
                <li><a href="#"><i className="fa fa-phone" />+88 01911 854 378</a></li>
                <li><a href="#"><i className="fa fa-map-marker" />5001 E. Colorado Blvd. Suite 820,<br /> Pasadena, CA 91106</a></li>
              </ul>
            </aside>
          </div>
          <div className="col-md-3">
            <aside className="f_widget twitter_widget">
              <div className="f_w_title">
                <h4>Twitter Feed</h4>
              </div>
              <ul>
                <li>
                  <a href="#">@_sumonrahman:</a> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </li>
                <li>
                  <a href="#">@_sumonrahman:</a> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-md-3">
            <aside className="f_widget gallery_widget">
              <div className="f_w_title">
                <h4>Gallery On Flickr</h4>
              </div>
              <ul>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-1.jpg" alt /><i className="fa fa-search" /></a></li>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-2.jpg" alt /><i className="fa fa-search" /></a></li>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-3.jpg" alt /><i className="fa fa-search" /></a></li>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-4.jpg" alt /><i className="fa fa-search" /></a></li>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-5.jpg" alt /><i className="fa fa-search" /></a></li>
                <li><a href="#"><img src="img/gallery/f-w-gallery/f-w-gallery-6.jpg" alt /><i className="fa fa-search" /></a></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div className="copy_right_area">
      <div className="container">
        <div className="pull-left">
          <h5><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p></h5>
        </div>
        <div className="pull-right">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li className="active"><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
      </React.Fragment>
    )
  }
}
