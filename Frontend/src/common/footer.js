import React from 'react';

import './footer.css';

function Footer () {

  return (
    <section className="footer">
        <div className="footer-content">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
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
              Software Engineer Haydn
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            shop.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            99999999999
          </section>
          <section className="footer-info__contact">
            My Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      </div>
    </section>
  )

}

export default Footer;