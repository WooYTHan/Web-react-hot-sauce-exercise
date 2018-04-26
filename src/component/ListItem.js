import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);   
  }
   render() {
    let newState = this.props.state.sauce;
    let searchString = this.props.searchString;
    if (searchString.length > 0) {
       newState = newState.filter(function(i) {
         return i.title.toLowerCase().match( searchString );
       });
     }
    return newState.map(value => {
      return (
        <div className="listItem">
          <span class="close" onClick={this.props.delete.bind(this, value)}>
            x
          </span>
          <Link className="link" to={`/sauceList/${value.title}/${value.id}`}>
            <div>
            <img src={value.imageURL} />
            <h2 className="subtitle">{value.title}</h2>
            <p classNames="discription">{value.subtitle}</p>
            </div>
          </Link>
        </div>
      );
    });
  }
}