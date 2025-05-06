import React from "react";

function ProductShowcase() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0px",
        flexWrap: "wrap",
        maxWidth: "100%",
        margin: "0 7%",
      }}
    >
      {/* Logo và dấu ngoặc mở */}
      <div style={{ flex: 1, textAlign: "left", minWidth: "200px" }}>
        <img
          src="https://bivaco.net/casacohibastore/_assets/media/abb6eaaba851ef3b19fbd3979117519e.png"
          alt="logo"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
        />
      </div>

      <div
        style={{ flex: 1 }}
        className="quote-section text-white text-center py-5"
      >
        <div className="container d-flex justify-content-center align-items-start">
          {/* Dấu nháy phải */}
          <img
            src="/nhay.png"
            alt="Dấu nháy phải"
            style={{
              height: "60px",
              marginLeft: "0px",
              transform: "scaleX(-1)",
              marginTop: "-10px",
            }}
          />

          {/* Nội dung trích dẫn */}
          <p
            style={{
              fontStyle: "italic",
              maxWidth: "100%",
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            Khám phá một thế giới nơi hương vị và tinh hoa hội tụ – nơi từng
            điếu cigar nhập khẩu là bản giao hưởng của thời gian, từng giọt rượu
            quý là dấu ấn của đẳng cấp...
          </p>

          {/* Dấu nháy trái */}
          <img
            src="/nhay.png"
            alt="Dấu nháy trái"
            style={{
              height: "60px",
              marginRight: "15px",
              marginTop: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;
