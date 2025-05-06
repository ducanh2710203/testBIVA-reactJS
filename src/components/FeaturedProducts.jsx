import React from "react";

function FeaturedProducts() {
  return (
    <>
      <>
        <h2
          style={{
            marginTop: "60px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            textDecoration: "underline",
          }}
        >
          Sản phẩm nổi bật
        </h2>

        <div style={{ margin: "0 7%", paddingTop: "3%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
              padding: "20px",
            }}
          >
            {/* Sản phẩm 1 */}
            <div
              style={{
                background: "rgb(74, 35, 18)",
                maxWidth: "280px",
                height: "470px",
                objectFit: "cover",
              }}
            >
              <img
                src="https://bivaco.net/casacohibastore/_assets/media/f44cc0afc5e60e139a6ab38c66ea98f9.png"
                alt=""
                style={{ width: "100%", height: "80%" }}
              />
              <div className="outstandingProduct">
                Cigar Romeo Y Julieta 1875 Reserve Real Line A De Oro – 3 điếu
              </div>
            </div>

            {/* Sản phẩm 2 */}
            <div
              style={{
                background: "rgb(74, 35, 18)",
                maxWidth: "280px",
                height: "470px",
                objectFit: "cover",
              }}
            >
              <img
                src="https://bivaco.net/casacohibastore/_assets/media/505336065e550d6305156e6b59ae0af7.png"
                alt=""
                style={{ width: "100%", height: "80%" }}
              />
              <div className="outstandingProduct">
                Xì gà God of Fire Serie B Robusto Limited Edition – 10 điếu
              </div>
            </div>

            {/* Sản phẩm 3 */}
            <div
              style={{
                background: "rgb(74, 35, 18)",
                maxWidth: "280px",
                height: "470px",
                objectFit: "cover",
              }}
            >
              <img
                src="https://bivaco.net/casacohibastore/_assets/media/27459eefeea65588bdb911df4e3e8981.jpg"
                alt=""
                style={{ width: "100%", height: "80%" }}
              />
              <div className="outstandingProduct">
                Rượu Whisky Glengoyne 10 Year Old
              </div>
            </div>

            {/* Sản phẩm 4 */}
            <div
              style={{
                background: "rgb(74, 35, 18)",
                maxWidth: "280px",
                height: "470px",
                objectFit: "cover",
              }}
            >
              <img
                src="https://bivaco.net/casacohibastore/_assets/media/05d3d73b2be8efbb8cc2790514d7aa50.png"
                alt=""
                style={{ width: "100%", height: "80%" }}
              />
              <div className="outstandingProduct">
                Hộp Quà Tặng Whisky Tamdhu Cigar Malt III Thuận Buồm Xuôi Gió
              </div>
            </div>
          </div>
        </div>

        {/* Xem tất cả */}
        <div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="button"
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "2px dashed #763E1E",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              xem tất cả
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default FeaturedProducts;
