import update from 'react-addons-update';
import {combineReducers} from 'redux';

import {SAVE_JD, REMOVE_JD} from '../actions/jd';
import {getStringId} from '../../helper/utils';

/*
store sample:
{
  jds: {
    id_1: {
      title: 'this is job title',
      description: 'this is job description',
      location: 'job location',
      salaryFrom: 'salary from',
      salaryTo: 'salary to'
    },
    id_2: {
      ...
    }
  }
}
*/

function jds(state = {}, action) {
  switch (action.type) {
  case SAVE_JD:
    let id = action.id ? action.id : getStringId(8);
    return update(state, {[id]: {$set: action.info}});
  case REMOVE_JD:
    let newState = Object.assign({}, state);
    delete newState[action.id];
    return newState;
  default:
    return state;
  }
}

const jdApp = combineReducers({
  jds
});

export default jdApp;
