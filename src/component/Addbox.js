import React, { Component } from 'react';

export default class Addbox extends React.Component {
  constructor(props) {
    super(props);
  }
   render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <h1>Add New Sauce</h1>
          <form onSubmit={this.props.onSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.props.value.title} onChange={this.props.onChange} />
        </label>
         <label>
          subtitle:
          <input type="text" name="subtitle" value={this.props.value.subtitle} onChange={this.props.onChange} />
        </label>
         <label>
          Description:
          <input type="text" name="description" value={this.props.value.description} onChange={this.props.onChange} />
        </label>
         <label>
          ImageUrl:
          <input type="text" name="imageURL" value={this.props.value.imageURL} onChange={this.props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

        <span className="close2" onClick={this.props.closePopup}>x</span>
        </div>
      </div>
    );
  }
}