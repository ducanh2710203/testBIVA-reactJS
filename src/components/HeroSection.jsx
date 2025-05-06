import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div style={{ margin: "0 7%", paddingTop: "3%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          height: "100vh",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#1e1e1e00",
        }}
      >
        {/* Ảnh dài bên trái */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          data-aos="fade-right"
        >
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/d06fd3b07e0f02556b33317712887faf.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Xì gà chính hãng"
          />
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/a4f16f103b18e52735fbd0d68b57851d.png"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="Overlay cigar"
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontWeight: "bold",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Xì gà chính hãng
          </div>
        </div>

        {/* Hai ảnh giữa */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Ảnh giữa 1 */}
          <div
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
            data-aos="fade-up"
          >
            <img
              src="https://bivaco.net/casacohibastore/_assets/media/6186d7e27ad6d0ae0892e532ef307ae9.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Rượu chính hãng"
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Rượu chính hãng
            </div>
          </div>

          {/* Ảnh giữa 2 */}
          <div
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
            data-aos="fade-up"
          >
            <img
              src="https://bivaco.net/casacohibastore/_assets/media/c5d315c934129764b566f9c207ad961b.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Trà cao cấp"
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Trà cao cấp
            </div>
          </div>
        </div>

        {/* Ảnh dài bên phải */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          data-aos="fade-left"
        >
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/6a8a94dc9ca6ff7273e209b36cf9f422.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Quà biếu cao cấp"
          />
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/a4f16f103b18e52735fbd0d68b57851d.png"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="Overlay gift"
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontWeight: "bold",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Quà biếu cao cấp
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
