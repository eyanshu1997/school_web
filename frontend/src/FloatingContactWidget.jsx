import React, { useState } from "react";

export default function FloatingContactWidget() {
  const [showWidget, setShowWidget] = useState(false);
  return (
    <div style={{position:'fixed',bottom:24,right:24,zIndex:9999}}>
      {showWidget ? (
        <div className="card shadow-lg p-3" style={{minWidth:220}}>
          <button className="btn-close ms-auto mb-2" aria-label="Close" onClick={()=>setShowWidget(false)}></button>
          <a href="tel:9419217073" className="btn btn-success w-100 mb-2">
            <i className="bi bi-telephone-fill me-2"></i>Call Now
          </a>
          <a href="https://maps.app.goo.gl/X84GEbi4Y71sFCtf6" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 mb-2">
            <i className="bi bi-geo-alt-fill me-2"></i>Get Directions
          </a>
          <a href="https://www.instagram.com/saraswati_vidhyala/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger w-100 mb-2">
            <i className="bi bi-instagram me-2"></i>Instagram
          </a>
          <a href="https://www.facebook.com/people/Svs-playway-primary-school/100054675074520/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
            <i className="bi bi-facebook me-2"></i>Facebook
          </a>
        </div>
      ) : (
        <button className="btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center" style={{width:56,height:56, fontSize: '1.5rem'}} onClick={()=>setShowWidget(true)} aria-label="Open contact widget">
          <i className="bi bi-telephone-fill" style={{color:'#fff'}}></i>
        </button>
      )}
    </div>
  );
}
