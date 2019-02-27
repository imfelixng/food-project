import React, { Component } from 'react'

export default class About extends Component {
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
            <li className="dropdown submenu active">
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
            <li className="dropdown submenu">
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
        <h4>About Us</h4>
        <a href="#">Home</a>
        <a className="active" href="#">About Us</a>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================About Us Content Area =================*/}
  <section className="about_us_content">
    <div className="container">
      <div className="row about_inner_item">
        <div className="col-md-6">
          <div className="about_left_content">
            <h4>Since 1962</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typeting, remaining essentially unchanged.</p>
            <ul>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> The standard chunk of Lorem Ipsum used.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Sed ut perspiciatis unde omnis iste natus error.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> At vero eos et accusamus et iusto odio dignissimos.</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about_right_image">
            <img src="img/about-item/about-item-1.jpg" alt />
          </div>
        </div>
        <div className="col-md-12">
          <div className="about_single_content">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sture there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          </div>
        </div>
      </div>
      <div className="row about_inner_item">
        <div className="col-md-6">
          <div className="about_right_image">
            <img src="img/about-item/about-item-2.jpg" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about_left_content">
            <h4>About Our Menu</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typeting, remaining essentially unchanged.</p>
            <ul>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> The standard chunk of Lorem Ipsum used.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Sed ut perspiciatis unde omnis iste natus error.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> At vero eos et accusamus et iusto odio dignissimos.</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <div className="about_single_content">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sture there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          </div>
        </div>
      </div>
      <div className="row about_inner_item">
        <div className="col-md-6">
          <div className="about_left_content">
            <h4>Best Services</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typeting, remaining essentially unchanged.</p>
            <ul>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> The standard chunk of Lorem Ipsum used.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> Sed ut perspiciatis unde omnis iste natus error.</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-right" aria-hidden="true" /> At vero eos et accusamus et iusto odio dignissimos.</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about_right_image">
            <img src="img/about-item/about-item-3.jpg" alt />
          </div>
        </div>
        <div className="col-md-12">
          <div className="about_single_content">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sture there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End About Us Content Area =================*/}
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
