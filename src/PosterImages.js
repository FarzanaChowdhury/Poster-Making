import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';
import './styles.css';

const CustomPoster = () => {
  const containerRef = useRef(null);
  const [sidetext, setSideText] = useState('');
  const [contact, setContact] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [logoSrc, setLogoSrc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  useEffect(() => {
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoSrc(e.target.result);
      reader.readAsDataURL(logoFile);
    }
  }, [logoFile]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleDownload = () => {
    const node = containerRef.current;

    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'poster.png';
        link.click();
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  };

  return (
    <div className="flex-container">
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <div>
          <label htmlFor="sidetext">Side Label Text: </label>
          <textarea
            id="sidetext"
            name="sidetext"
            value={sidetext}
            onChange={(e) => setSideText(e.target.value)}
          />
          </div>

          <div>
          <label htmlFor="contact">Contact: </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="websiteName">Website Name: </label>
          <input
            type="text"
            id="websiteName"
            name="websiteName"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
          />
          </div>

          <div>
          <label htmlFor="slogan">Slogan: </label>
          <input
            type="text"
            id="slogan"
            name="slogan"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          />
          </div>

          <div>
          <label htmlFor="logo">Logo Image: </label>
          <input
            type="file"
            id="logo-input"
            name="logo"
            onChange={(e) => setLogoFile(e.target.files[0])}
          />
          </div>

          <div>
         
          <label htmlFor="image">Background Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
             </div>

          <button type="submit">Create Poster</button>
        </form>
      </div>
      <div className="poster-container">
        <div className="svg-container" ref={containerRef}>
          <div className="svg-wrapper">


          <div className="svg-box svg-shape0"><div className="contact-no">{contact}</div></div>
            <div className="svg-box svg-shape1" style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}></div>
            
            <div className="svg-box svg-shape3">
              <div id="contact-us">CONTACT US</div>
            </div>
            <div className="svg-box svg-shape4">
              <div id="logo">
                {logoSrc && (
                  <img src={logoSrc} alt="Logo" className="logo-image" />
                )}
              </div>
              <br></br>
              <div className="slogan-text">{slogan}</div>
            </div>

            <div className="svg-box svg-shape2"></div>
            <div className="svg-box svg-shape5">
              <div className="sidelabel-text">{sidetext}</div>
              <div className="website-name">{websiteName}</div>
            </div>
          </div>
        </div>
        
        
      </div>
      <button onClick={handleDownload}>Download Poster</button>
    </div>
  );
};

export default CustomPoster;
