import { combineReducers } from 'redux';
import carsReducers from './car';
import ActiveCar from './CarActive';

const allReducers = combineReducers({
  cars: carsReducers,
  active: ActiveCar,
});

export default allReducers;
