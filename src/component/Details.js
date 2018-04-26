import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let sauce = this.props.sauce;
    let title = this.props.value;
    const currentSauce = sauce.filter(x => x.title === title)[0];
    console.log(currentSauce);
    return (
      <div className="row">
        <div className="right">
          <div className="details-header">
            <Link className="link" to="/">
              <h2 id="back"> &lt; back to the sauce list </h2>
            </Link>
            <h1>{currentSauce.title}</h1>
          </div>
          <img src={currentSauce.imageURL} />
        </div>
        <div className="left">
          <h3 id="description">{currentSauce.description}</h3>
        </div>
      </div>
    );
  }
}