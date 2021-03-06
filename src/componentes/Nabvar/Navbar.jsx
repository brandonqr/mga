import React from 'react';
import './Navbar.css';
class Navbar extends React.Component {
  render() {
    $(document).ready(function() {
      $('.menu-icon').on('click', function() {
        $('nav ul').toggleClass('showing');
      });
    });

    // Scrolling Effect

    // $(window).on('scroll', function() {
    //   if ($(window).scrollTop()) {
    //     $('nav')
    //       .addClass('black')
    //       .css({ position: 'relative' });
    //   } else {
    //     $('nav').removeClass('black');
    //   }
    // });
    return (
      <div className="wrapper">
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars" />
            </div>

            <div className="logo">LOGO</div>

            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Navbar;
