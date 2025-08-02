
// Dynamically import all images from assets/images
const imageModules = import.meta.glob('../assets/images/*.{jpeg,jpg,png,gif,webp}', {eager: true, import: 'default'});
const images = Object.values(imageModules);

export default function ImagesFeed() {
  return (
    <div className="container py-4">
      <h1 className="h3 fw-bold mb-4" style={{color:'#2563eb'}}>Gallery</h1>
      <div className="row g-2">
        {images.map((img, idx) => (
          <div className="col-6 col-md-4 col-lg-3" key={idx}>
            <div className="rounded-3 shadow-sm overflow-hidden bg-white" style={{aspectRatio:'1/1',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <img
                src={img}
                alt={`Gallery ${idx+1}`}
                style={{width:'100%',height:'100%',objectFit:'cover'}}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
