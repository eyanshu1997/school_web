

import React, { useState, useEffect, useMemo } from "react";

// Dynamically import all images from src/assets/images
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const images = Object.values(imageModules).map(mod => mod.default).filter(Boolean);

function FacilitiesAccordion() {
  const [open, setOpen] = useState(null);
  const facilities = [
    {
      title: 'Smart Classrooms',
      color: '#10b981',
      bg: '#e0f7f1',
      border: '#10b981',
      details: 'Equipped with interactive boards, projectors, and digital content to make learning engaging and effective.'
    },
    {
      title: 'Playground & Sports',
      color: '#f59e42',
      bg: '#fff6e3',
      border: '#f59e42',
      details: 'Spacious playgrounds and sports facilities for physical development, teamwork, and fun.'
    },
    {
      title: 'Library & Reading Zone',
      color: '#a78bfa',
      bg: '#f3f0fa',
      border: '#a78bfa',
      details: 'A well-stocked library and cozy reading corners to foster a love for books and independent learning.'
    },
    {
      title: 'Transport Facility',
      color: '#2563eb',
      bg: '#f8fafc',
      border: '#2563eb',
      details: 'Safe and reliable transport for students, covering major routes in the city.'
    }
  ];
  return (
    <div className="row g-3">
      {facilities.map((f, idx) => (
        <div className="col-md-3 col-6" key={f.title}>
          <div
            className="rounded-3 p-3 text-center h-100 position-relative"
            style={{background:f.bg, border:`2px solid ${f.border}`, cursor:'pointer', transition:'box-shadow 0.2s'}}
            onClick={()=>setOpen(open===idx?null:idx)}
          >
            <span className="fw-bold" style={{color:f.color}}>{f.title}</span>
            <span style={{position:'absolute',top:10,right:16,fontSize:18,color:f.color}}>{open===idx?'−':'+'}</span>
            {open===idx && (
              <div className="mt-3 text-start small" style={{color:'#22223b'}}>{f.details}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5 position-relative" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #fff 100%)'}}>
      <div className="rounded-4 shadow p-4 mb-5" style={{background:'#fff', border:'2px solid #a78bfa'}}>
        {/* Slideshow */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8">
            <div className="position-relative rounded-4 overflow-hidden shadow border border-primary" style={{height:'300px', background:'#e3f0ff'}}>
              <img
                src={images[current]}
                alt="School Slideshow"
                className="w-100 h-100 object-fit-cover transition"
                style={{objectFit:'cover',height:'300px', filter:'brightness(0.95)'}}
              />
              <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 pb-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`d-inline-block rounded-circle ${idx === current ? 'bg-primary' : 'bg-secondary'} opacity-75`} style={{width:12,height:12, border: '2px solid #fff'}}>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <h2 className="h2 fw-bold mb-3 text-center" style={{color:'#2563eb'}}>A Place to Learn, Grow, and Shine</h2>
        <p className="lead mb-4 text-center" style={{color:'#22223b'}}>
          At <span className="fw-semibold" style={{color:'#f59e42'}}>SVS Playway & Primary School</span>, we believe in holistic education that nurtures every aspect of a child's development. Our experienced teachers, modern facilities, and engaging curriculum ensure that students are inspired to reach their full potential.
        </p>

        {/* Features */}
        <div className="row mb-4 g-3">
          <div className="col-md-4">
            <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#e0f7f1', borderTop:'4px solid #10b981'}}>
              <h4 className="h6 fw-bold mb-2" style={{color:'#10b981'}}>Play-based Learning</h4>
              <p className="mb-0" style={{color:'#22223b'}}>Fun, interactive activities for early years to spark curiosity and creativity.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#fff6e3', borderTop:'4px solid #f59e42'}}>
              <h4 className="h6 fw-bold mb-2" style={{color:'#f59e42'}}>All-round Development</h4>
              <p className="mb-0" style={{color:'#22223b'}}>Focus on academics, sports, arts, and life skills for balanced growth.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#f3f0fa', borderTop:'4px solid #a78bfa'}}>
              <h4 className="h6 fw-bold mb-2" style={{color:'#a78bfa'}}>Safe & Inclusive</h4>
              <p className="mb-0" style={{color:'#22223b'}}>A nurturing environment where every child feels valued and secure.</p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-4">
          <h3 className="h4 fw-bold mb-3" style={{color:'#2563eb'}}>Facilities</h3>
          <FacilitiesAccordion />
        </div>
         {/* School Activities Section */}
        <div className="mb-4">
          <h3 className="h4 fw-bold mb-3" style={{color:'#8e44ad'}}>School Activities</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#eafaf1', borderLeft:'6px solid #27ae60'}}>
                <h5 className="fw-bold mb-2" style={{color:'#27ae60'}}>Annual Sports Day</h5>
                <p className="mb-0 text-secondary">A day full of fun, games, and healthy competition to encourage teamwork and fitness.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#fff6e3', borderLeft:'6px solid #f39c12'}}>
                <h5 className="fw-bold mb-2" style={{color:'#f39c12'}}>Art & Craft Week</h5>
                <p className="mb-0 text-secondary">Creative workshops where students express themselves through various art forms.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rounded-3 p-3 h-100 shadow-sm" style={{background:'#f5e6fa', borderLeft:'6px solid #8e44ad'}}>
                <h5 className="fw-bold mb-2" style={{color:'#8e44ad'}}>Science Exhibition</h5>
                <p className="mb-0 text-secondary">Showcasing innovative projects and experiments by our budding scientists.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary text-white rounded-3 p-4 text-center shadow-sm">
          <h3 className="h5 fw-bold mb-2">Why Choose Us?</h3>
          <p className="mb-0">We are dedicated to building a strong foundation for lifelong learning. Join our school community and watch your child thrive!</p>
        </div>
      </div>
    </div>
  );
}


export default Home;
