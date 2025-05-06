import React from "react";
import "./CustomerFeedback.css"; // Nhớ tạo file CSS từ phần mình đã gửi ở trên

const testimonialsData = [
  {
    text: `CASA COHIBA bán hàng online có thương hiệu uy tín được hình thành
    và phát triển mạnh mẽ trong hơn 5 năm qua với các sản phẩm phụ
    kiện cigar cao cấp phục vụ nhu cầu sử dụng của giới chơi cigar`,
    img: "https://bivaco.net/casacohibastore/_assets/media/93173de4ed802ac40868fa5fa2d5faad.jpg",
    name: "- Hannah Morales",
  },
  {
    text: `CASA COHIBA bán hàng online có thương hiệu uy tín được hình thành
    và phát triển mạnh mẽ trong hơn 5 năm qua với các sản phẩm phụ
    kiện cigar cao cấp phục vụ nhu cầu sử dụng của giới chơi cigar`,
    img: "https://bivaco.net/casacohibastore/_assets/media/c4764a243ea2ef1bdc35b448a9ac0fd4.jpg",
    name: "- Hannah Morales",
  },
  {
    text: `CASA COHIBA bán hàng online có thương hiệu uy tín được hình thành
    và phát triển mạnh mẽ trong hơn 5 năm qua với các sản phẩm phụ
    kiện cigar cao cấp phục vụ nhu cầu sử dụng của giới chơi cigar`,
    img: "https://bivaco.net/casacohibastore/_assets/media/2463a1a1970ffaf945d62edaa325bc34.jpg",
    name: "- Hannah Morales",
  },
];

const CustomerFeedback = () => {
  return (
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
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>{testimonial.text}</p>
            <img src={testimonial.img} alt={`Khách ${index + 1}`} />
            <div className="testimonial-name">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerFeedback;
