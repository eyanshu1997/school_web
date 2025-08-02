import React from "react";

export default function About() {
  return (
    <div className="about container py-5" style={{background:'#f8fafc'}}>
      <div className="rounded-4 shadow p-4 mb-5" style={{background:'#fff', border:'2px solid #a78bfa'}}>
        <h1 className="h2 fw-bold mb-3" style={{color:'#2563eb'}}>About SVS Playway & Primary School, Jammu</h1>
        <p className="lead mb-4" style={{color:'#22223b'}}>
          SVS Playway & Primary School, Jammu is committed to nurturing young minds and fostering a love for learning. Our mission is to provide a safe, inclusive, and stimulating environment where every child can thrive academically, socially, and emotionally.
        </p>
        <h2 className="h4 fw-bold mb-2" style={{color:'#a78bfa'}}>Our Vision</h2>
        <div className="mb-3" style={{color:'#22223b', fontSize:'1.1rem'}}>
          <p>
            At SVS Playway & Primary School, Jammu, our vision is to empower students to become confident, compassionate, and responsible global citizens. We strive to create an environment where every child is inspired to learn, grow, and realize their full potential.
          </p>
          <ul>
            <li>Fostering curiosity, creativity, and a lifelong love for learning</li>
            <li>Encouraging respect, empathy, and inclusivity among all students</li>
            <li>Promoting holistic development—academic, physical, emotional, and social</li>
            <li>Preparing students to adapt and thrive in a rapidly changing world</li>
            <li>Building a strong foundation for future success and happiness</li>
          </ul>
        </div>
        <h2 className="h5 fw-semibold mb-2" style={{color:'#10b981'}}>Our Curriculum</h2>
        <p className="mb-3" style={{color:'#22223b'}}>
          We offer a balanced curriculum blending academics, co-curricular activities, and life skills. Our teaching methods are child-centric, interactive, and designed to spark curiosity and creativity.
        </p>
        <h2 className="h5 fw-semibold mb-2" style={{color:'#f59e42'}}>Facilities</h2>
        <ul className="mb-3" style={{color:'#22223b'}}>
          <li>Spacious, well-ventilated classrooms</li>
          <li>Safe and secure campus</li>
          <li>Playground and activity areas</li>
          <li>Modern teaching aids and resources</li>
          <li>Experienced and caring faculty</li>
        </ul>
        <h2 className="h5 fw-semibold mb-2" style={{color:'#2563eb'}}>Parent Partnership</h2>
        <p className="mb-3" style={{color:'#22223b'}}>
          We believe in strong collaboration with parents to support each child's growth. Regular parent-teacher meetings and open communication channels ensure transparency and trust.
        </p>
        <h2 className="h5 fw-semibold mb-2" style={{color:'#a78bfa'}}>Contact & Location</h2>
        <p className="mb-4" style={{color:'#22223b'}}>
          SVS Playway & Primary School, Jammu<br />
          Near Birpur, Jammu, Jammu and Kashmir 180001<br />
          <a href="https://www.google.com/maps/place/Svs+playway+%26+primary+school/@32.6577114,74.9303719,5z/data=!4m7!3m6!1s0x391e9d3079c14135:0xef797dc88ab23d54!8m2!3d32.6577343!4d74.9299578!15sChlzdnMgcGxheXdheSBzY2hvb2wgYmlycHVykgEOcHJpbWFyeV9zY2hvb2yqAWUKCC9tLzA2emRqEAEqFiISc3ZzIHBsYXl3YXkgc2Nob29sKAAyIBABIhyFPPBSTOYKn-7MYOv9B8s5yv3602-g1Wn3kKADMh0QAiIZc3ZzIHBsYXl3YXkgc2Nob29sIGJpcnB1cuABAA!16s%2Fg%2F11trtdns2h?entry=tts" target="_blank" rel="noopener noreferrer" style={{color:'#f59e42', textDecoration:'underline'}}>View on Google Maps</a>
        </p>
      </div>
    </div>
  );
}

