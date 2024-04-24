import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Useful links",
      cls: "footer-col-2",
      links: [
        { name: "Contact us", link: "/contact" },
        { name: "Help & About us", link: "/about" },
        { name: "Services", link: "/service-3" },
        { name: "Refund Policy", link: "/shop-details" },
      ],
    },
    {
      id: 2,
      title: "Contact info",
      cls: "footer-col-3",
      links: [
        { name: "27 route St, Rabat, 10002, Morocco" },
        { name: "(+212)52462545632" },
        { name: "support@genolab.com" },
        { name: "Office Hours: 8AM - 11PM" },
        { name: "Sunday - Wekend Day" },
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " 27 route St, Rabat, 10002, Morocco",
        "(+212)52462545632",
        " support@genolab.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Theme_pure</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/white-logo.png" alt="logo" />
                    </a>
                  </h4>
                  <p>
                    Your gateway to genetic exploration. We specialize in
                    groundbreaking research, unlocking the secrets of DNA to
                    propel advancements in healthcare and personalized medicine.
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_info.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">{item.title}</h4>
                    <div className="footer-widget__links">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link href={`${link?.link ? link.link : "/"}`}>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="footer-widget__title mb-20">
                    Subscribe Newslatter
                  </h4>
                  <p>Join Us for more news.</p>
                  <div className="footer-widget__newsletter p-relative">
                    <form action="#">
                      <input type="email" placeholder="Enter Mail" />
                      <button className="footer-widget__fw-news-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>
                    © Copyright © 2024 GenoLab. All Rights Reserved Copyright
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="shop">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
