import React from "react";
import "./Request.css";

const Request = (props) => (
  <div className="request">
    <form className="input-field" onSubmit={props.handleSubmit}>
      <p className="endpoint">{props.endpoint}</p>
      <input type="text" placeholder={props.exampleText} name="search" value={props.search} onChange={props.handleChange}/>
      <button type="submit">Submit</button>
    </form>
    <p className="hint" style={{display: props.hint ? "inherit" : "none"}}>{props.hint}</p>
    <pre className="response" style={{display: props.json ? "inherit" : "none"}}>
      {JSON.stringify(props.json, null, 4)}
    </pre>
  </div>
)

export default Request;
