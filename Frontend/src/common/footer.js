import React from 'react';

import './footer.css';

function Footer () {

  return (
    <section className="footer">
        <div className="footer-content">
      <hr className="footer-seperator" />
      <section className="contact">
            <div className="left">
                <p><a href="tel:+910123456789">+91 0123456789</a></p>
                <p>Free support line!</p>
            </div>
            <div className="center">
                <p><a href="mailto:someone@example.com">Send email</a></p>
                <p>Orders Support!</p>

            </div>
            <div className="right">
            <p>Mon - Fri / 8:00 - 18:00</p>
            <p>Working Days/Hours!</p>
            </div>
      </section>
      <section className="footer-info">
      <section className="footer-info-left">
          <section className="footer-info__name">
          We are a team of designers and <br/>developers that create high quality <br/>Magento, Prestashop, Opencart.
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-left">
            <ul className="footer-info__name" >
          QUICK CONTACT<br /><br />
            <li className="footer-info__returns"><a> Returns Policy</a><br /><br /></li>
            <li className="footer-info__returns"><a> About Us</a><br /><br /></li>
            <li className="footer-info__returns"><a> Our Services</a><br /><br /></li>
            <li className="footer-info__returns"><a> Contact Us</a><br /><br /></li>
            <li className="footer-info__returns"><a> Blog</a><br /><br /></li>

            </ul>

        </section>
        <section className="footer-info-center">
        <ul className="footer-info__name">
        MY ACCOUNT<br /><br />
            <li className="footer-info__returns"><a> Login For Public</a><br /><br /></li>
            <li className="footer-info__returns"><a> Login For Worker</a><br /><br /></li>
            <li className="footer-info__returns"><a> Register For Public</a><br /><br /></li>
            <li className="footer-info__returns"><a> Register For Worker</a><br /><br /></li>

            </ul>
        </section>
        <section className="footer-info-right">
        <ul className="footer-info__name">
        MY ACCOUNT<br /><br />
            <li className="footer-info__returns"><a>Mobile No. : 9769830037, 9471924659</a><br /><br /></li>
            <li className="footer-info__returns"><a> Email : Info@Sewakar.Com</a><br /><br /></li>

            </ul>
        </section>
      </section>

      <section className="end">
          <section className="center-end"><p>Copyright © 2021 Sewakar. All rights reserved.</p></section>
                 
       
      </section>
      </div>
    </section>
  )

}

export default Footer;