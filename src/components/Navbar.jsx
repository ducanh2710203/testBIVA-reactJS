import React from "react";

const Navbar = () => (
  <div className="overlay-navbar">
    <div className="nav-menu">
      <div className="nav-item">
        <a href="#">TRANG CHỦ</a>
      </div>
      <div className="nav-item">
        <a href="#">GIỚI THIỆU</a>
      </div>
      <div className="nav-item">
        <a href="#">SẢN PHẨM</a>
      </div>
      <img
        src="https://bivaco.net/casacohibastore/_assets/media/cbd43cca237bca72d3af35a3779e92e4.png"
        className="logo"
        alt="Logo"
      />
      <div className="nav-item">
        <a href="#">TIN TỨC</a>
      </div>
      <div className="nav-item">
        <a href="#">DỊCH VỤ</a>
      </div>
      <div className="nav-item">
        <a href="#">LIÊN HỆ</a>
      </div>
    </div>
    <img
      src="https://bivaco.net/casacohibastore/_assets/media/d6d578497e2dac4892c8ecc7ffa024e8.png"
      className="bg-img1"
      style={{ width: "80%", height: "100%", marginLeft: "10%" }}
      alt="Overlay"
    />
  </div>
);

export default Navbar;
