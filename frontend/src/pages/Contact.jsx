import React from "react";

export default function Contact() {
  return (
    <div className="contact container py-5">
      <div className="bg-light rounded-4 shadow p-4 mb-5">
        <h1 className="h2 fw-bold mb-3 text-primary">Contact Us</h1>
        <p className="lead text-secondary mb-4">Visit us at SVS Playway & Primary School or reach out for more information.</p>
        <div className="mb-4 d-flex flex-row gap-3 justify-content-center align-items-center">
          <a href="tel:9419170373" className="btn btn-success btn-lg d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill"></i>Call Now
          </a>
          <a href="https://maps.app.goo.gl/X84GEbi4Y71sFCtf6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg d-flex align-items-center gap-2">
            <i className="bi bi-geo-alt-fill"></i>Get Directions
          </a>
          <a href="https://www.instagram.com/saraswati_vidhyala/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-lg d-flex align-items-center gap-2">
            <i className="bi bi-instagram"></i>Instagram
          </a>
        </div>
        <div className="mb-4 text-center">
          <h5 className="fw-semibold mb-1">Address</h5>
          <p className="mb-0">SVS Playway & Primary School<br/>Near Birpur, Jammu, Jammu and Kashmir 180001</p>
        </div>
        <div className="mb-4" style={{ width: "100%", maxWidth: 600, margin: "2rem auto" }}>
          <iframe
            src="https://www.google.com/maps?q=SVS+Playway+%26+Primary+School&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
