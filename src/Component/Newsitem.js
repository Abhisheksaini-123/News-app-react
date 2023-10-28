
import React, { Component } from 'react';

class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="card" style={{ width: "15rem" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description}</p>
          <a href={newsurl} target="blank" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default Newsitem;

