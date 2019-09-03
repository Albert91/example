import { UPDATE_RESOLUTIONS } from '../constants/CommonConstants';

export const updateResolutions = object => ({
  type: UPDATE_RESOLUTIONS,
  payload: object,
});
