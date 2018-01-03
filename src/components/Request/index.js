import React from "react";
import Request from "./Request.js";
import axios from "axios";

const defaultJSON = "Loading Data...";

class RequestContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: defaultJSON,
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadJSON = this.loadJSON.bind(this);
    this.loadJSON();
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.loadJSON();
  }
  loadJSON() {
    let url = "";
    if(this.state.search) {
      url = this.props.endpoint + this.state.search;
    } else if(this.props.option) {
      url = this.props.endpoint + this.props.option;
    } else {
      url = this.props.endpoint;
    }
    axios.get("http://" + url).then((response) => {
      this.setState((prevState) => ({
        json: response.data
      }));
    }).catch((error) => {
      this.setState((prevState) => ({
        json: String(error)
      }));
    });
  }
  render() {
    return (
      <Request {...this.props} {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    )
  }
}

export default RequestContainer;
