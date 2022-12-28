import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          The ecommerce push has already begun, as more companies and more shoppers are turning to ecommerce stores to make their purchases. In 2020, Walmart's online sales increased by 97%. Amazon's Q2 sales and profit growth was 40%. It's not just the big guys either, benefiting from consumers' spiked appetite for online shopping. Smaller retailers such as Howards Storage World and B-Wear Sportswear, among others, are seeing double and even triple-digit growth in ecommerce revenues compared to the year before.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Put simply, it’s the process of creating an online store for your business to sell digitally to target shoppers. To design an ecommerce website, you need to plan, conceptualize and arrange your content and products for effective display on the Internet.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Emart</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
