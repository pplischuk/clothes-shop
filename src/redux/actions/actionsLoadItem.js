import { LOAD_CURRENT_ITEM } from '../constants/currentItemConstants';

export const loadCurrentItem = item => ({
			 type: LOAD_CURRENT_ITEM,
			 item
  });