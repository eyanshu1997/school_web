import React from "react";

export default function Contact() {
  return (
    <div className="contact container py-5" style={{background:'#f8fafc'}}>
      <div className="rounded-4 shadow p-4 mb-5" style={{background:'#fff', border:'2px solid #10b981'}}>
        <h1 className="h2 fw-bold mb-3" style={{color:'#2563eb'}}>Contact Us</h1>
        <p className="lead mb-4" style={{color:'#22223b'}}>Visit us at SVS Playway & Primary School, Jammu or reach out for more information.</p>
        <div className="mb-4 d-flex flex-row gap-3 justify-content-center align-items-center">
          <a href="tel:9419170373" className="btn btn-lg d-flex align-items-center gap-2" style={{background:'#10b981', color:'#fff', border:'none'}}>
            <i className="bi bi-telephone-fill"></i>Call Now
          </a>
          <a href="https://maps.app.goo.gl/X84GEbi4Y71sFCtf6" target="_blank" rel="noopener noreferrer" className="btn btn-lg d-flex align-items-center gap-2" style={{background:'#2563eb', color:'#fff', border:'none'}}>
            <i className="bi bi-geo-alt-fill"></i>Get Directions
          </a>
          <a href="https://www.instagram.com/saraswati_vidhyala/" target="_blank" rel="noopener noreferrer" className="btn btn-lg d-flex align-items-center gap-2" style={{background:'#fff', color:'#f59e42', border:'2px solid #f59e42'}}>
            <i className="bi bi-instagram"></i>Instagram
          </a>
        </div>
        <div className="mb-4 text-center">
          <h5 className="fw-semibold mb-1" style={{color:'#a78bfa'}}>Address</h5>
          <p className="mb-0" style={{color:'#22223b'}}>SVS Playway & Primary School, Jammu<br/>Near Birpur, Jammu, Jammu and Kashmir 180001</p>
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
