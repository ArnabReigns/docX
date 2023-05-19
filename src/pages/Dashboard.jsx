import React, { useState } from "react";
import Table from "../components/RTable";
import { navContext } from "../context/Context";
import { useContext } from "react";


const Dashboard = ({hidden=false}) => {

  const [option,setOption] = useState(0);

  let options = 
  [
    'All Files',
    'Unprocessed',
    'Processed',
    'Not-Validated',
    'Validated'
  ]

  const ctx = useContext(navContext);

  return <>
    <div className="dashboard" style={{display: hidden? "none": ""}}>

    <h1>DashBoard</h1>
    <div className="upper">
      <div className="left">
        <h1>Upload Files in batches</h1>
        <button className="btn" onClick={()=>{ctx.setTab(2)}}>+ Create New Upload</button>
      </div>
      {/* <span className="bar"></span> */}
      <div className="middle">
        <h1>Status</h1>
        <div><p>Dropbox <span className="dot"></span> </p>  <div className="msg">Something - message about this status</div></div>
        <div><p>Dropbox <span className="dot"></span> </p>  <div className="msg">Something - message about this status</div></div>
        <div><p>Dropbox <span className="dot"></span> </p>  <div className="msg">Something - message about this status</div></div>
        <div><p>Dropbox <span className="dot"></span> </p>  <div className="msg">Something - message about this status</div></div>
      </div>
      {/* <span className="bar"></span> */}
      <div className="right">
        <h1>Recent Activity</h1>
        <p><span>3:09:56</span>Built Ready to Start</p>
        <p><span>3:09:56</span>Built Ready to Start</p>
        <p><span>3:09:56</span>Built Ready to Start</p>
        <p><span>3:09:56</span>Built Ready to Start</p>
        <p><span>3:09:56</span>Built Ready to Start</p>
      </div>
    </div>
    <div className="headers">

        {options.map((option,idx)=>(
        <p key={idx} onClick={()=>{setOption(idx)}}>{option}</p>
        ))}
      </div>  
    <div className="lower">
      <Table heading={options[option]}/>
    </div>
    </div>
  </>;
};

export default Dashboard;
