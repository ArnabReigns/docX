import React from 'react'
import short from '../functions/textShortner';
import image1 from '../assets/image1.jpg';

const FilePreview = ({hidden}) => {

  var heading = 'Dashboard>Files>Validated>Insurance_Claim>Something';
  heading = short(heading,50);

  return (
    <div className='Filepreview'  style={{display: hidden? "none": ""}}> 

        <div className="topnav">
          <h1>{heading}</h1>
          <div className="innernav">
          <h3>3:45</h3>
          <h3>FFT_IMPORT_BILL__CC</h3>
          <h3>Batch No: <span>82311283_283988223</span> </h3>
          </div>
        </div>
        <div className="plannercontainer">
          <div className="left">
          
          </div>
          <div className="right">
            <div className="top">
              <p className='minipdf'></p>
            </div>


            <div className="rcard">
              <div className="header">
                <div className='.headerleft'>
                <h3>Bol_Notify_Center <span className="per">91% </span></h3>
                
                </div>

                <div className="dots">
                  <div className="green"></div>
                  <div className="green"></div>
                  <div className="red"></div>
                </div>
              </div>
              <input className="content" value={"india"} />
            </div>
            <div className="rcard">
              <div className="header">
                <div className='.headerleft'>
                <h3>Bol_Fortop_Landing <span className="per">85% </span></h3>
                
                </div>

                <div className="dots">
                  <div className="green"></div>
                  <div className="green"></div>
                  <div className="red"></div>
                  <div className="green"></div>
                  <div className="red"></div>
                </div>
              </div>
              <input className="content" value={"Koashing,Taiwan"} />
            </div>
            <div className="rcard">
              <div className="header">
                <div className='.headerleft'>
                <h3>Bol_Notify_Center <span className="per">91% </span></h3>
                
                </div>

                <div className="dots">
                  <div className="green"></div>
                  <div className="red"></div>
                  <div className="red"></div>
                </div>
              </div>
              <input className="content" value={"india"} />
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default FilePreview