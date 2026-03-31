import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [zoom, setZoom] = useState(15);
  const [mapUrl, setMapUrl] = useState(
    `https://www.openstreetmap.org/export/embed.html?bbox=38.7380,9.0230,38.7580,9.0430&layer=mapnik&marker=9.0330,38.7480`,
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const location = {
    name: "Derartu Tulu Building",
    address: "Megenagna, Addis Ababa, Ethiopia",
    lat: 9.033,
    lng: 38.748,
    fullAddress: "Derartu Tulu Building, Megenagna, Addis Ababa, Ethiopia",
  };
  const minZoom = 0;
  const maxZoom = 20;
  const handleZoomIn = () => {
    if (zoom < maxZoom) {
      const newZoom = zoom + 1;
      setZoom(newZoom);
      updateMapZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (zoom > minZoom) {
      const newZoom = zoom - 1;
      setZoom(newZoom);
      updateMapZoom(newZoom);
    }
  };

  const updateMapZoom = (newZoom) => {
    const centerLat = location.lat;
    const centerLng = location.lng;
    const maxRange = 180; 
    const minRange = 0.0005; 
    const zoomFactor = Math.pow(2, maxZoom - newZoom);
    const range = maxRange / zoomFactor;

    const minLat = Math.max(-90, centerLat - range);
    const maxLat = Math.min(90, centerLat + range);
    const minLng = Math.max(-180, centerLng - range);
    const maxLng = Math.min(180, centerLng + range);

    const newMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLng},${minLat},${maxLng},${maxLat}&layer=mapnik&marker=${centerLat},${centerLng}`;
    setMapUrl(newMapUrl);
  };

  const getZoomDescription = (level) => {
    if (level === 0) return "World View";
    if (level <= 3) return "Continent";
    if (level <= 6) return "Country";
    if (level <= 9) return "Region";
    if (level <= 12) return "City";
    if (level <= 15) return "District";
    if (level <= 17) return "Street";
    if (level <= 19) return "Building";
    if (level === 20) return "Street Level";
    return "Zoom Level";
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>

        <div className="contact-grid">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📞 +251 910 857 444</p>
            <p>✉️ gebiyaw2004@gmail.com</p>
            <p>{location.fullAddress}</p>

            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="map-section">
          <h3>Our Location - Around Megenagna</h3>

          <div className="map-zoom-controls">
            <button
              className="zoom-btn zoom-in"
              onClick={handleZoomIn}
              disabled={zoom >= maxZoom}
              aria-label="Zoom In"
            >
              +
            </button>
            <button
              className="zoom-btn zoom-out"
              onClick={handleZoomOut}
              disabled={zoom <= minZoom}
              aria-label="Zoom Out"
            >
              -
            </button>
            <div className="zoom-info">
              <span className="zoom-level">Zoom: {zoom}</span>
              <span className="zoom-description">
                ({getZoomDescription(zoom)})
              </span>
            </div>
          </div>

          <div className="zoom-range">
            <span className="zoom-min">🌍 World (0)</span>
            <input
              type="range"
              min={minZoom}
              max={maxZoom}
              value={zoom}
              onChange={(e) => {
                const newZoom = parseInt(e.target.value);
                setZoom(newZoom);
                updateMapZoom(newZoom);
              }}
              className="zoom-slider"
            />
            <span className="zoom-max">🔍 Street (20)</span>
          </div>

          <div className="map-container">
            <iframe
              title="MULUR COFFEE Location - Derartu Tulu Building"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="embedded-map"
            ></iframe>
          </div>
          <p className="map-address">
            <strong>MULUR COFFEE</strong> - {location.fullAddress}
          </p>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(location.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-button"
          >
             Open in Google Maps (Larger View)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
