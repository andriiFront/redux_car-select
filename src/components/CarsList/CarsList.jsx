import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './CarsList.scss';
import { select } from '../../actions';

class CarsList extends Component {
  render() {
    return (
      <div className="carslist">
        <ul className="carslist__list">
          {this.props.cars.map(car => (
            <li
              onClick={() => {
                this.props.select(car);
              }}
              key={car.id}
            >
              {car.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    select,
  }, dispatch);
}

export const ConnectCarsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsList);
