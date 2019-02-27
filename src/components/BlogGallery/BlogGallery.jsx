import React, { Component } from 'react'

export default class BlogGallery extends Component {
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
            <li className="dropdown submenu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="fa fa-angle-down" aria-hidden="true" /></a>
              <ul className="dropdown-menu">
                <li><a href="event.html">Event</a></li>
                <li><a href="table.html">Table</a></li>
              </ul>
            </li>
            <li className="dropdown submenu active">
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
        <h4>Blog Gallery</h4>
        <a href="#">Home</a>
        <a href="blog.html">Blog</a>
        <a className="active" href="blog-gallery.html">Blog Gallery</a>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================Blog List Area =================*/}
  <section className="blog_list_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row m0">
            <article className="blog_gallery_item row m0">
              <div className="blog_date">
                <div className="media">
                  <div className="media-left">
                    <h4>14</h4>
                    <h4>FEB</h4>
                  </div>
                  <div className="media-body"><i className="fa fa-picture-o" /></div>
                </div>
              </div>
              <h3>Image Post Type Restaurant News</h3>
              <div className="blog_gallery_img">
                <img src="img/blog/blog-gallery/blog-g-1.jpg" alt />
                <div className="blog_social">
                  <div className="pull-left">
                    <h4>Posted by <a href="http://rocky.obaidul.com">Rocky</a></h4>
                    <a href="#"><i className="fa fa-eye" />206</a>
                    <a href="#"><i className="fa fa-comment-o" />19</a>
                    <a href="#"><i className="fa fa-heart-o" />56</a>
                  </div>
                  <div className="pull-right">
                    <h5>Share :</h5>
                    <ul className="social_icon">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra eaet commodo and consequat. Duis aute irure dolor in reprehderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident... <a href="blog-detail.html">Read More</a></p>
            </article>
            <article className="blog_gallery_item row m0">
              <div className="blog_date">
                <div className="media">
                  <div className="media-left">
                    <h4>14</h4>
                    <h4>FEB</h4>
                  </div>
                  <div className="media-body"><i className="fa fa-camera-retro" /></div>
                </div>
              </div>
              <h3>Gallery Post Type Restaurant News</h3>
              <div className="blog_gallery_img">
                <div className="blog_gallery_slider">
                  <div className="item">
                    <img src="img/blog/blog-gallery/blog-g-3.jpg" alt />
                  </div>
                  <div className="item">
                    <img src="img/blog/blog-gallery/blog-g-1.jpg" alt />
                  </div>
                  <div className="item">
                    <img src="img/blog/blog-gallery/blog-g-3.jpg" alt />
                  </div>
                  <div className="item">
                    <img src="img/blog/blog-gallery/blog-g-1.jpg" alt />
                  </div>
                </div>
                <div className="blog_social">
                  <div className="pull-left">
                    <h4>Posted by <a href="http://rocky.obaidul.com">Rocky</a></h4>
                    <a href="#"><i className="fa fa-eye" />206</a>
                    <a href="#"><i className="fa fa-comment-o" />19</a>
                    <a href="#"><i className="fa fa-heart-o" />56</a>
                  </div>
                  <div className="pull-right">
                    <h5>Share :</h5>
                    <ul className="social_icon">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra eaet commodo and consequat. Duis aute irure dolor in reprehderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident... <a href="blog-detail.html">Read More</a></p>
            </article>
            <article className="blog_gallery_item row m0">
              <div className="blog_date">
                <div className="media">
                  <div className="media-left">
                    <h4>14</h4>
                    <h4>FEB</h4>
                  </div>
                  <div className="media-body"><i className="fa fa-youtube-play" /></div>
                </div>
              </div>
              <h3>Video Post Type Restaurant News</h3>
              <div className="blog_gallery_img">
                <div className="row m0 video_row">
                  <iframe id="video" src="http://www.youtube.com/embed/ZOVvJJDuAvo?enablejsapi=1&html5=1&rel=0&fs=0&loop=1&showinfo=0&disablekb=1&controls=0&color=white&playlist=ZOVvJJDuAvo" />
                  <div className="overlay" id="video_overlay">
                    <div className="overlay_bg" />
                    <div className="play_pause row m0">
                      <i className="fa fa-youtube-play" aria-hidden="true" id="play_btn" />
                      <i className="fa fa-pause" aria-hidden="true" id="pause_btn" />
                    </div>
                  </div>
                </div>
                <div className="blog_social">
                  <div className="pull-left">
                    <h4>Posted by <a href="http://rocky.obaidul.com">Rocky</a></h4>
                    <a href="#"><i className="fa fa-eye" />206</a>
                    <a href="#"><i className="fa fa-comment-o" />19</a>
                    <a href="#"><i className="fa fa-heart-o" />56</a>
                  </div>
                  <div className="pull-right">
                    <h5>Share :</h5>
                    <ul className="social_icon">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra eaet commodo and consequat. Duis aute irure dolor in reprehderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident... <a href="blog-detail.html">Read More</a></p>
            </article>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog_right_sidebar">
            <aside className="right_widget search_widget">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><i className="fa fa-search" /></button>
                </span>
              </div>
            </aside>
            <aside className="right_widget category_widget">
              <div className="sidebar_title">
                <h3>Categories</h3>
              </div>
              <ul>
                <li><a href="#"><i className="fa fa-chevron-right" />Brasserie and Bistro (15)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Buffet and Smorgasbord (9)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Free Keyword Suggestion (19)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Barbecue (12)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Cafe (26)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Destination Restaurant (29)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Coffee House (42)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Tabletop Cooking (27)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Fast Food (13)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Pub (17)</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />Mongolian Barbecue (21)</a></li>
              </ul>
            </aside>
            <aside className="right_widget calender_widget">
              <div className="sidebar_title">
                <h3>Calendar</h3>
              </div>
              <div id="my-calendar" />
            </aside>
            <aside className="right_widget category_widget">
              <div className="sidebar_title">
                <h3>Archives</h3>
              </div>
              <ul>
                <li><a href="#"><i className="fa fa-chevron-right" />November 2017</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />August 2017</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />July 2017</a></li>
                <li><a href="#"><i className="fa fa-chevron-right" />June 2017</a></li>
              </ul>
            </aside>
            <aside className="right_widget recent_widget">
              <div className="sidebar_title">
                <h3>RECENT POST</h3>
              </div>
              <div className="media">
                <div className="media-left">
                  <img src="img/blog/recent-post/recent-post-1.jpg" alt />
                </div>
                <div className="media-body">
                  <a href="#"><h4>Tailgating with Simon's Cheese: Bratwurst and Sauerkraut Pizza Recipe.</h4></a>
                  <h5>November 18, 2017</h5>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <img src="img/blog/recent-post/recent-post-2.jpg" alt />
                </div>
                <div className="media-body">
                  <a href="#"><h4>Tailgating with Simon's Cheese: Bratwurst and Sauerkraut Pizza Recipe.</h4></a>
                  <h5>November 18, 2017</h5>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <img src="img/blog/recent-post/recent-post-3.jpg" alt />
                </div>
                <div className="media-body">
                  <a href="#"><h4>Tailgating with Simon's Cheese: Bratwurst and Sauerkraut Pizza Recipe.</h4></a>
                  <h5>November 18, 2017</h5>
                </div>
              </div>
            </aside>
            <aside className="right_widget tags_widget">
              <div className="sidebar_title">
                <h3>Tags</h3>
              </div>
              <ul>
                <li><a href="#">Restaurant</a></li>
                <li><a href="#">Barbecue</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Pub</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">html</a></li>
                <li><a href="#">Bar</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">WordPress</a></li>
                <li><a href="#">Optimization</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Blog List Area =================*/}
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
