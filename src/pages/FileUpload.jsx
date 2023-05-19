import React, { useEffect, useState } from "react";
import { useRef } from "react";


const FileUpload = ({hidden}) => {

  const [fileList, setFiles] = useState([]);
  const fileinp = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove('drag-enter');
    var files = e.dataTransfer.files;
    console.log([...files]);
    setFiles([...files]);
  }

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    };
    const files = [...e.target.files];

    setFiles(files);
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList])


  return <>
    <div className="uploadpage" style={{display: hidden? "none": ""}}>

      <h1>File Upload</h1>
      <div className="upper">

        <div className="content" 
        onDrop={handleDrop} 
        onDragOver={e => e.preventDefault()} 
        >

          <h1>Drag Folders or Browse</h1>
          <input type={'file'} ref={fileinp} multiple hidden onChange={handleFileChange} />
          <button className="btn" onClick={() => { fileinp.current.click() }}>+ Create New Upload</button>
        </div>
      </div>

      <h5>Uploaded Files</h5>
      <div className="filenames">

        <div>
          {fileList.map((file, i) => (
            <p key={i}>
              {file.name} - {file.type}
            </p>
          ))}
        </div>
      </div>
    </div>


  </>;
};

export default FileUpload;