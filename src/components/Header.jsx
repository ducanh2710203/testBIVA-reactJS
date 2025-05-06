import React from "react";
import "./Header.css";

function Header() {
  function scrollToNext() {
    document
      .getElementById("next-section")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header style={{ textAlign: "center" }}>
      <img
        src="https://bivaco.net/casacohibastore/_assets/media/505619289fe88f5574ce621653968830.jpg"
        className="bg-img"
        alt="Background"
      />

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
            style={{ width: "150px", height: "100px" }}
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
          alt="Background"
        />
      </div>

      <section className="hero-section">
        <div className="hero-content text-center text-white">
          <p style={{ margin: "20px" }}>
            <span
              style={{
                fontSize: "55px",
                fontWeight: 400,
                fontStyle: "normal",
                color: "rgb(179, 142, 46)",
                fontKerning: "none",
                textDecoration: "none",
              }}
            >
              Wellcome
            </span>
            <br />
            <span
              style={{
                fontSize: "55px",
                fontWeight: 400,
                fontStyle: "normal",
                color: "rgb(179, 142, 46)",
                fontKerning: "none",
                textDecoration: "none",
              }}
            >
              to
            </span>
          </p>
          <span
            style={{
              fontSize: "55px",
              fontWeight: 700,
              fontStyle: "normal",
              color: "rgb(245, 219, 104)",
              fontKerning: "none",
              textDecoration: "none",
            }}
          >
            casa cohiba store
          </span>
          <p className="lead mt-3" style={{ color: "white", fontSize: "20px" }}>
            Hệ thống phân phối xì gà chính hãng, rượu, trà và quà biếu cao cấp
            tại Việt Nam
          </p>
          <div className="Izwocg" onClick={scrollToNext}>
            <img
              src="xuonpng.png"
              className="Dt3KRw"
              width="50"
              draggable="false"
              alt="Decorative Arrow"
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
