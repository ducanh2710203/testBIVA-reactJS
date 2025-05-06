import React from "react";
import "./VideoTutorial.css";

const VideoTutorial = () => (
  <div className="container">
    <div className="left">
      <h2 style={{ borderBottom: "2px solid white" }}>VIDEO HƯỚNG DẪN</h2>
      <div className="video-main">
        <img
          src="https://bivaco.net/casacohibastore/_assets/media/e1ca2133ff02e7c900ef3fc196f40bea.jpg"
          alt="Video rượu sang"
        />
        <div className="play-button"></div>
        <div className="video-title">Video đập hộp rượu sang</div>
      </div>
      <div className="video-grid">
        <div>
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/43e8607540da779af5474144b27a48cf.jpg"
            alt="Cigar"
          />
          <div className="play-button"></div>
        </div>
        <div>
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/66b84248aa2ac4263fcbb38ab7222a05.jpg"
            alt="Rượu 1"
          />
          <div className="play-button"></div>
        </div>
        <div>
          <img
            src="https://bivaco.net/casacohibastore/_assets/media/20cc2654d22d400ea289303eaa618e7f.jpg"
            alt="Rượu 2"
          />
          <div className="play-button"></div>
        </div>
      </div>
    </div>
    <div className="right">
      <h2 style={{ borderBottom: "2px solid white" }}>VIDEO HƯỚNG DẪN</h2>
      <div className="video-item">
        <img
          src="https://bivaco.net/casacohibastore/_assets/media/bf4348460d4702806dd2bb913e66d604.png"
          alt="Bao da cigar"
        />
        <div>
          <h3>Bao da cigar mini & ống bảo quản xì gà – Sự lựa chọn nào tốt?</h3>
          <p>
            Bao da cigar mini & ống bảo quản xì gà - Đâu là sự lựa chọn tốt? Nếu
            bạn cũng đang quan tâm đến câu hỏi này và chưa biết nên lựa chọn bao
            da cigar mini hay...
          </p>
        </div>
      </div>
      <div className="video-item">
        <img
          src="https://bivaco.net/casacohibastore/_assets/media/b457e401e9f65bef54af462d2deda063.png"
          alt="Tủ lạnh xì gà"
        />
        <div>
          <h3>
            Có nên để xì gà trong tủ lạnh không? Cần lưu ý gì để giữ trọn chất
            lượng, hương vị?
          </h3>
          <p>
            Bao da cigar mini & ống bảo quản xì gà - Đâu là sự lựa chọn tốt? Nếu
            bạn cũng đang quan tâm đến câu hỏi này và chưa biết...
          </p>
        </div>
      </div>
      <div className="video-item">
        <img
          src="https://bivaco.net/casacohibastore/_assets/media/c9740b5d7c02968bfb8501722e7e53ee.png"
          alt="Bao da cigar 2"
        />
        <div>
          <h3>Bao da cigar mini & ống bảo quản xì gà – Sự lựa chọn nào tốt?</h3>
          <p>
            Bao da cigar mini & ống bảo quản xì gà - Đâu là sự lựa chọn tốt? Nếu
            bạn cũng đang quan tâm đến câu hỏi này và chưa biết nên lựa chọn bao
            da cigar mini hay...
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default VideoTutorial;
