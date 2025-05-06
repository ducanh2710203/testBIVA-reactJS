import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: Thông tin */}
        <div className="footer-column">
          <h2 className="footer-title">CASA COHIBA STORE</h2>
          <p>
            Hệ Thống Phân Phối Xì Gà Chính Hãng, Rượu, Trà và Quà biếu Cao Cấp
            Tại Việt Nam
          </p>
          <p>Địa chỉ: Sunrise I, The Manor Centre Park</p>
          <p>Số điện thoại: 0933.555.113 (09:00–21:00)</p>
          <p>
            Email:{" "}
            <a href="mailto:casacohiba@gmail.com">casacohiba@gmail.com</a>
          </p>
        </div>

        {/* Cột 2: Logo và liên hệ */}
        <div className="footer-column center">
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/dbbb50e571cefa734a4a1cc7f914582e.png"
            alt="Casa Cohiba Logo"
            style={{ width: "100%", height: "70%" }}
            className="footer-logo"
          />
          <div className="footer-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
          <div className="footer-bottom">
            Copyrights © 2024 by Casa Cohiba Store
          </div>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div className="footer-column">
          <h2 className="footer-title">HỖ TRỢ KHÁCH HÀNG</h2>
          <ul>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn thanh toán</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
