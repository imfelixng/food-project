import React, { Component } from 'react'

export default class Home extends Component {
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
                  <li className="active"><a href="index.html">Home</a></li>
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
        {/*================Slider Area =================*/}
        <section className="slider_area">
          <div className="slider_inner">
            <div className="rev_slider fullwidthabanner" data-version="5.3.0.2" id="home-slider">
              <ul> 
                <li data-slotamount={7} data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed={600} data-rotate={0} data-saveperformance="off">
                  {/* MAIN IMAGE */}
                  <img src="img/home-slider/slider-1.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 */}
                  <div className="slider_text_box">
                    <div className="tp-caption bg_box" data-width="none" data-height="none" data-whitespace="nowrap" data-x="center" data-y="['350','350','300','250','0']" data-fontsize="['55']" data-lineheight="['60']" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;" data-start={2000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                    </div>
                    <div className="tp-caption first_text" data-x="center" data-y="center" data-voffset="['-20']" data-hoffset="['0']" data-fontsize="['42','42','42','42','25']" data-lineheight="['52','52','52','52','35']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">Welcome To Our
                    </div>
                    <div className="tp-caption secand_text" data-x="center" data-y="center" data-voffset="['45']" data-hoffset="['0']" data-fontsize="['36']" data-lineheight="['42']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">Red Cayenne
                    </div>
                    <div className="tp-caption third_text" data-x="center" data-y="center" data-voffset="['100']" data-hoffset="['0']" data-fontsize="['24','24','24','24','16']" data-lineheight="['34','34','34','34','26']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1200} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">A PREMIUM RESTAURANT THEME
                    </div>
                    <div className="tp-caption btn_text" data-x="center" data-y="center" data-voffset="['180']" data-hoffset="['0']" data-fontsize="['16.75']" data-lineheight="['26']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1200} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05"><a className="submit_btn_bg" href="#">Look Menu</a>
                    </div>
                  </div>
                </li>
                <li data-slotamount={7} data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed={600} data-rotate={0} data-saveperformance="off">
                  {/* MAIN IMAGE */}
                  <img src="img/home-slider/slider-2.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 */}
                  <div className="slider_text_box text_box2">
                    <div className="tp-caption bg_box" data-width="none" data-height="none" data-whitespace="nowrap" data-x="center" data-y="['350','350','300','250']" data-fontsize="['55']" data-lineheight="['60']" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;" data-start={2000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                    </div>
                    <div className="tp-caption first_text" data-x="center" data-y="center" data-voffset="['-20']" data-hoffset="['0']" data-fontsize="['42','42','42','42','25']" data-lineheight="['52','52','52','52','35']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">Welcome To Our
                    </div>
                    <div className="tp-caption secand_text" data-x="center" data-y="center" data-voffset="['45']" data-hoffset="['0']" data-fontsize="['36']" data-lineheight="['42']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">Red Cayenne
                    </div>
                    <div className="tp-caption third_text" data-x="center" data-y="center" data-voffset="['100']" data-hoffset="['0']" data-fontsize="['24','24','24','24','16']" data-lineheight="['34','34','34','34','26']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1200} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">A PREMIUM RESTAURANT THEME
                    </div>
                    <div className="tp-caption btn_text" data-x="center" data-y="center" data-voffset="['180']" data-hoffset="['0']" data-fontsize="['16.75']" data-lineheight="['26']" data-width="none" data-height="none" data-transform_idle="o:1;" data-whitespace="nowrap" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1200} data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05"><a className="submit_btn_bg" href="#">Look Menu</a>
                    </div>
                  </div>
                </li>
              </ul> 
            </div>{/* END REVOLUTION SLIDER */}
          </div>
        </section>
        {/*================End Slider Area =================*/}
        {/*================Service Area =================*/}
        <section className="service_area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="service_item">
                  <img src="img/service-icon/service-1.png" alt />
                  <h3>Pizzas</h3>
                  <p>Lorem ipsum dolor sit amet, cont tempor incididunt ut labore dolor adipiscing elit, sed do eiusmod et  magna aliquaquat officia.</p>
                  <a className="read_mor_btn" href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service_item">
                  <img src="img/service-icon/service-2.png" alt />
                  <h3>Coffee</h3>
                  <p>Lorem ipsum dolor sit amet, cont tempor incididunt ut labore dolor adipiscing elit, sed do eiusmod et  magna aliquaquat officia.</p>
                  <a className="read_mor_btn" href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service_item">
                  <img src="img/service-icon/service-3.png" alt />
                  <h3>Burgers</h3>
                  <p>Lorem ipsum dolor sit amet, cont tempor incididunt ut labore dolor adipiscing elit, sed do eiusmod et  magna aliquaquat officia.</p>
                  <a className="read_mor_btn" href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="service_item">
                  <img src="img/service-icon/service-4.png" alt />
                  <h3>Drinks</h3>
                  <p>Lorem ipsum dolor sit amet, cont tempor incididunt ut labore dolor adipiscing elit, sed do eiusmod et  magna aliquaquat officia.</p>
                  <a className="read_mor_btn" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Service Area =================*/}
        {/*================Booking Table Area =================*/}
        <section className="booking_table_area">
          <div className="container">
            <div className="s_white_title">
              <h3>Book a</h3>
              <h2>Table</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="input-append date form_datetime">
                  <input size={16} type="text" defaultValue readOnly placeholder="Date" />
                  <span className="add-on"><i className="icon-th" /></span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="input-append date form_time">
                  <input size={16} type="text" defaultValue readOnly placeholder="Dining Time" />
                  <span className="add-on"><i className="icon-th" /></span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="party_size">
                  <select className="selectpicker">
                    <option>Party Size</option>
                    <option>Party Size 2</option>
                    <option>Party Size 3</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-3">
                <button type="button" className="btn btn-default submit_btn">BOOK MY TABLE</button>
              </div>
            </div>
          </div>
        </section>
        {/*================End Booking Table Area =================*/}
        {/*================Our feature Area =================*/}
        <section className="our_feature_area">
          <div className="container">
            <div className="s_black_title">
              <h3>Book a</h3>
              <h2>Table</h2>
            </div>
            <div className="feature_slider">
              <div className="item">
                <div className="feature_item">
                  <div className="feature_item_inner">
                    <img src="img/feature/feature-1.jpg" alt />
                    <div className="icon_hover">
                      <i className="fa fa-search" />
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </div>
                  <div className="title_text">
                    <div className="feature_left"><a href="table.html"><span>Grilled Chicken</span></a></div>
                    <div className="restaurant_feature_dots" />
                    <div className="feature_right">$32</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature_item">
                  <div className="feature_item_inner">
                    <img src="img/feature/feature-2.jpg" alt />
                    <div className="icon_hover">
                      <i className="fa fa-search" />
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </div>
                  <div className="title_text">
                    <div className="feature_left"><a href="table"><span>Lasagne Pasta</span></a></div>
                    <div className="restaurant_feature_dots" />
                    <div className="feature_right">$16</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature_item">
                  <div className="feature_item_inner">
                    <img src="img/feature/feature-3.jpg" alt />
                    <div className="icon_hover">
                      <i className="fa fa-search" />
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </div>
                  <div className="title_text">
                    <div className="feature_left"><a href="table"><span>Hamburger</span></a></div>
                    <div className="restaurant_feature_dots" />
                    <div className="feature_right">$25</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature_item">
                  <div className="feature_item_inner">
                    <img src="img/feature/feature-1.jpg" alt />
                    <div className="icon_hover">
                      <i className="fa fa-search" />
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </div>
                  <div className="title_text">
                    <div className="feature_left"><a href="table"><span>Grilled Chicken.</span></a></div>
                    <div className="restaurant_feature_dots" />
                    <div className="feature_right">$32</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Our feature Area =================*/}
        {/*================End Our feature Area =================*/}
        <section className="most_popular_item_area">
          <div className="container">
            <div className="s_white_title">
              <h3>Most Popular</h3>
              <h2>Today's Menu</h2>
            </div>
            <div className="popular_filter">
              <ul>
                <li className="active" data-filter="*"><a href>All</a></li>
                <li data-filter=".break"><a href>Breakfast</a></li>
                <li data-filter=".lunch"><a href>Lunch</a></li>
                <li data-filter=".dinner"><a href>Dinner</a></li>
                <li data-filter=".snacks"><a href>Snacks</a></li>
                <li data-filter=".coffee"><a href>Coffee</a></li>
              </ul>
            </div>
            <div className="p_recype_item_main">
              <div className="row p_recype_item_active">
                <div className="col-md-6 break snacks">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-1.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 break coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-2.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 lunch snacks">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-3.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 lunch dinner">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-4.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 break coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-5.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 break coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-6.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 lunch coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-7.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 dinner snacks">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-8.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 dinner coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-9.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 dinner coffee">
                  <div className="media">
                    <div className="media-left">
                      <img src="img/recype/recype-10.jpg" alt />
                    </div>
                    <div className="media-body">
                      <a href="#"><h3>Vegetable Flavour</h3></a>
                      <h4>$32</h4>
                      <p>Lorem ipsum dolor sit amets, consectetur adipiscing </p>
                      <a className="read_mor_btn" href="#">Add To Cart</a>
                      <ul>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Our feature Area =================*/}
        {/*================Our Chefs Area =================*/}
        <section className="our_chefs_area">
          <div className="container">
            <div className="s_black_title">
              <h3>Meet</h3>
              <h2>OUR CHEFS</h2>
            </div>
            <div className="chefs_slider_active">
              <div className="item">
                <div className="chef_item_inner">
                  <div className="chef_img">
                    <img src="img/chef/chef-1.jpg" alt />
                    <div className="chef_hover">
                      <a href="#"><h4>Thomas Keller</h4></a>
                      <h5>Chef</h5>
                      <p>Lorem ipsum dolor sit amet et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="chef_name">
                    <div className="name_chef_text">
                      <h3>Suzanne Goin</h3>
                      <h4>Chef</h4>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="chef_item_inner">
                  <div className="chef_img">
                    <img src="img/chef/chef-2.jpg" alt />
                    <div className="chef_hover">
                      <a href="#"><h4>Thomas Keller</h4></a>
                      <h5>Chef</h5>
                      <p>Lorem ipsum dolor sit amet et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="chef_name">
                    <div className="name_chef_text">
                      <h3>Suzanne Goin</h3>
                      <h4>Chef</h4>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="chef_item_inner">
                  <div className="chef_img">
                    <img src="img/chef/chef-3.jpg" alt />
                    <div className="chef_hover">
                      <a href="#"><h4>Thomas Keller</h4></a>
                      <h5>Chef</h5>
                      <p>Lorem ipsum dolor sit amet et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="chef_name">
                    <div className="name_chef_text">
                      <h3>Paul Bocuse</h3>
                      <h4>Chef</h4>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="chef_item_inner">
                  <div className="chef_img">
                    <img src="img/chef/chef-4.jpg" alt />
                    <div className="chef_hover">
                      <a href="#"><h4>Thomas Keller</h4></a>
                      <h5>Chef</h5>
                      <p>Lorem ipsum dolor sit amet et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="chef_name">
                    <div className="name_chef_text">
                      <h3>Giada Deen</h3>
                      <h4>Chef</h4>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="chef_item_inner">
                  <div className="chef_img">
                    <img src="img/chef/chef-1.jpg" alt />
                    <div className="chef_hover">
                      <a href="#"><h4>Thomas Keller</h4></a>
                      <h5>Chef</h5>
                      <p>Lorem ipsum dolor sit amet et consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="chef_name">
                    <div className="name_chef_text">
                      <h3>Suzanne Goin</h3>
                      <h4>Chef</h4>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Our Chefs Area =================*/}
        {/*================End Our Chefs Area =================*/}
        <section className="next_event_area">
          <div className="container">
            <div className="s_white_red_title">
              <h3>Events</h3>
              <h2>Next Event</h2>
            </div>
            <div className="next_event_slider">
              <div className="item">
                <div className="col-md-6">
                  <div className="row">
                    <div className="left_event_img">
                      <img src="img/next-event/next-event-1.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="right_event_text">
                      <a href="#"><h3>Opening Party - themeXart IT Farm</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusqs enm tempor incididunt ut labore et dolore magna aliqua. Ut enim advastmi sunt veniam, quis nostrud exercitation... <a href="#">View Detail</a></p>
                      <div className="event_shedule">
                        <time dateTime="P65DT05H16M22S" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="col-md-6">
                  <div className="row">
                    <div className="left_event_img">
                      <img src="img/next-event/next-event-1.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="right_event_text">
                      <a href="#"><h3>Opening Party - themeXart IT Farm</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusqs enm tempor incididunt ut labore et dolore magna aliqua. Ut enim advastmi sunt veniam, quis nostrud exercitation... <a href="#">View Detail</a></p>
                      <div className="event_shedule">
                        <time dateTime="P65DT05H16M22S" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="col-md-6">
                  <div className="row">
                    <div className="left_event_img">
                      <img src="img/next-event/next-event-1.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="right_event_text">
                      <a href="#"><h3>Opening Party - themeXart IT Farm</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusqs enm tempor incididunt ut labore et dolore magna aliqua. Ut enim advastmi sunt veniam, quis nostrud exercitation... <a href="#">View Detail</a></p>
                      <div className="event_shedule">
                        <time dateTime="P65DT05H16M22S" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Our Chefs Area =================*/}
        {/*================Recent Blog Area =================*/}
        <section className="recent_bloger_area">
          <div className="container">
            <div className="s_black_title">
              <h3>News</h3>
              <h2>Recent Blog</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="recent_blog_item">
                  <div className="blog_img">
                    <img src="img/blog/recent-blog/recent-blog-1.jpg" alt />
                  </div>
                  <div className="recent_blog_text">
                    <div className="recent_blog_text_inner">
                      <h6><a href="#">Articles</a></h6>
                      <a href="blog-details.html"><h5>Restaurant Industry &amp; News</h5></a>
                      <p>Lorem Ipsum is simpily dummy texts printing and typesetting industry.</p>
                      <a href="#">Feb 11,ac 2017 <span>/</span></a>
                      <a href="#">No Comments</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recent_blog_item">
                  <div className="blog_img">
                    <img src="img/blog/recent-blog/recent-blog-2.jpg" alt />
                  </div>
                  <div className="recent_blog_text">
                    <div className="recent_blog_text_inner">
                      <h6><a href="#">Articles</a></h6>
                      <a href="blog-details.html"><h5>Restaurant Industry &amp; News</h5></a>
                      <p>Lorem Ipsum is simpily dummy texts printing and typesetting industry.</p>
                      <a href="#">Feb 11,ac 2017 <span>/</span></a>
                      <a href="#">No Comments</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recent_blog_item">
                  <div className="blog_img">
                    <img src="img/blog/recent-blog/recent-blog-3.jpg" alt />
                  </div>
                  <div className="recent_blog_text">
                    <div className="recent_blog_text_inner">
                      <h6><a href="#">Articles</a></h6>
                      <a href="blog-details.html"><h5>Restaurant Industry &amp; News</h5></a>
                      <p>Lorem Ipsum is simpily dummy texts printing and typesetting industry.</p>
                      <a href="#">Feb 11,ac 2017 <span>/</span></a>
                      <a href="#">No Comments</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Recent Blog Area =================*/}
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
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
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
