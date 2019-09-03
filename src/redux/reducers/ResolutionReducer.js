import {
  UPDATE_RESOLUTIONS,
} from '../constants/CommonConstants';
import { sizes } from '../../lib/Resolution';

const defaultState = {};
Object.keys(sizes).forEach(size => defaultState[size] = false);

export default function (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_RESOLUTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
