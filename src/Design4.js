import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';
import './styles/styles.css';
import './styles/design4.css';
import './styles/mediaQuery.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const CustomDesign4 = () => {
  const containerRef = useRef(null);
  const [sidetext, setSideText] = useState('Experience the luxury of premium water');
  const [contact, setContact] = useState('+123456789');
  const [websiteName, setWebsiteName] = useState('goodsite.com');
  const [slogan, setSlogan] = useState('Best Digital Agency');
  const [logoFile, setLogoFile] = useState(null);
  const [logoSrc, setLogoSrc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [action, setAction] = useState('Learn More');
  const [name, setCompanyName] = useState('Best Digital Agency');
  const [primaryColor, setPrimaryColor] = useState('#13367A');
  const [secondaryColor, setSecondaryColor] = useState('#FC902E');
  const [bgColor, setbgColor] = useState('#1C2449');


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
                        <label htmlFor="slogan">Heading: </label>
                        <textarea
                            id="slogan"
                            name="slogan"
                            value={slogan}
                            onChange={(e) => setSlogan(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="sidetext">Subheading: </label>
                        <textarea
                            id="sidetext"
                            name="sidetext"
                            value={sidetext}
                            onChange={(e) => setSideText(e.target.value)}
                        />
                    </div>


                    <div>
                        <label htmlFor="logo">Action Button: </label>
                        <input
                            type="text"
                            id="action"
                            name="action"
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="websiteName">Email Address: </label>
                        <input
                            type="text"
                            id="websiteName"
                            name="websiteName"
                            value={websiteName}
                            onChange={(e) => setWebsiteName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact">Phone Number: </label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>




                    <div>
                        <label htmlFor="logo">Company Logo: </label>
                        <input
                            type="file"
                            id="logo-input"
                            name="logo"
                            onChange={(e) => setLogoFile(e.target.files[0])}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Company Name: </label>
                        <input
                            type="text"
                            id="company-name"
                            name="company-name"
                            value={name}
                            onChange={(e) => setCompanyName(e.target.value)}
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
                    <div>
                        <label htmlFor="bgColor">Background Color:</label>
                        <input
                            type="color"
                            id="bgColor"
                            name="secondaryColor"
                            value={bgColor}
                            onChange={(e) => setbgColor(e.target.value)}
                        />
                    </div>



          <button type="submit">Create Poster</button>
        </form>
      </div>
      <div className="poster-container">
        <div className="svg-container" ref={containerRef}>
          <div className="svg-wrapper">


             <div className="svg-box svg-d4shape0" style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}>

             {!imageSrc && <FontAwesomeIcon className="camera" icon={faCamera} />}
            
             </div>

            
            

            <div className="logo-container svg-box svg-d4shape1" style={{ backgroundColor: primaryColor }}>
              <div id="logo">
                {logoSrc && (
                  <img src={logoSrc} alt="Logo" className="logo-image" />
                )}

{!logoSrc && <FontAwesomeIcon className="logo-camera" icon={faCamera} />}

              </div>
              <div className='company-name'><div className="company">{name}</div></div>
                            
              <br></br>
              
            
            </div>

            <div className="svg-box svg-d4shape2" style={{ backgroundColor: bgColor }}>
            <div className='slogan-container'><div className="slogan-text" style={{color: secondaryColor}}>{slogan}</div></div>
              <div className='sidetext-container'><div className="sidelabel-text">{sidetext}</div></div>
              
              </div>



           <div className="svg-box svg-d4shape3" style={{ backgroundColor: secondaryColor }}>
              
            </div>

            
            <div className="svg-box svg-d4shape4" style={{ backgroundColor: 'white' }}>
            <div id="contact-us">{action}</div>
            <div className='contact-no'>
                            <FontAwesomeIcon icon={faPhone} />
                            {contact}
                        </div>

                        <div className='websitename-container'><FontAwesomeIcon icon={faPhone} /><div className="website-name">{websiteName}</div></div>
            
              </div>
          </div>
        </div>


      </div>
      <button className='download' onClick={handleDownload}>Download Poster</button>
    </div>
  );
};

export default CustomDesign4;
