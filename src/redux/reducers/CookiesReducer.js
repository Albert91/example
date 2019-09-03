import { COOKIES_ACCEPT } from '../constants/CommonConstants';
import LocalStore from '../../lib/LocalStore';

const defaultState = {
  acceptedCookies: !!LocalStore.readCookie('ACCEPTED_COOKIES'),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case COOKIES_ACCEPT:
      LocalStore.setCookie('ACCEPTED_COOKIES', true);

      return {
        ...state,
        acceptedCookies: true,
      };
    default:
      return state;
  }
}
