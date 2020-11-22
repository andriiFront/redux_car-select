import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.scss';

class Details extends Component {
  render() {
    if (!this.props.car) {
      return (<p>Select a car..</p>);
    }

    return (
      <div className="details">
        <h2>{this.props.car.name}</h2>
        <img
          src={this.props.car.img}
          alt={this.props.car.name}
        />
        <br />
        <p>
          speed:
          {this.props.car.speed}
          ,
          weight:
          {this.props.car.weight}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    car: state.active,
  };
}

export const ConnectDetails = connect(mapStateToProps)(Details);
