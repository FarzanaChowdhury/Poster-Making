import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';
import './styles/styles.css';
import './styles/design4.css';
import './styles/mediaQuery.css'
const CustomDesign4 = () => {
  const containerRef = useRef(null);
  const [sidetext, setSideText] = useState('Experience the luxury of premium water');
  const [contact, setContact] = useState('+123456789');
  const [websiteName, setWebsiteName] = useState('gootsite.com');
  const [slogan, setSlogan] = useState('Best Digital Agency');
  const [logoFile, setLogoFile] = useState(null);
  const [logoSrc, setLogoSrc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#08062B');
  const [secondaryColor, setSecondaryColor] = useState('#A9111E');


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
            <textarea
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

          <div>
            <label htmlFor="primaryColor">Primary Color:</label>
            <input
              type="color"
              id="primaryColor"
              name="primaryColor"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="secondaryColor">Secondary Color:</label>
            <input
              type="color"
              id="secondaryColor"
              name="secondaryColor"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>




          <button type="submit">Create Poster</button>
        </form>
      </div>
      <div className="poster-container">
        <div className="svg-container" ref={containerRef}>
          <div className="svg-wrapper">


             <div className="svg-box svg-d4shape0" style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}></div>

            
            <div className="svg-box svg-d4shape1" style={{ backgroundColor: primaryColor }}>
              <div id="logo">
                {logoSrc && (
                  <img src={logoSrc} alt="Logo" className="logo-image" />
                )}
              </div>
              <br></br>
              <div className='slogan-container'><div className="slogan-text">{slogan}</div></div>
              <div className='sidetext-container'><div className="sidelabel-text">{sidetext}</div></div>
              <div className='websitename-container'><div className="website-name">{websiteName}</div></div>
            
            
            </div>

            <div className='website'>
              {websiteName}
            </div>

            <div className="svg-box svg-d4shape2" style={{ backgroundColor: secondaryColor }}></div>
            <div className="svg-box svg-d4shape3" style={{ backgroundColor: primaryColor }}>
              
            </div>

            
            <div className="svg-box svg-d4shape4" style={{ backgroundColor: secondaryColor }}>
            <div id="contact-us">Learn More</div>
              </div>
          </div>
        </div>


      </div>
      <button className='download' onClick={handleDownload}>Download Poster</button>
    </div>
  );
};

export default CustomDesign4;
