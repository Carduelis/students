import { GET_MENU_LIST } from '../constants';

const initialState = {
	menu: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;
  switch (type) {
    case GET_MENU_LIST:
			return Object.assign({}, state, { menu: payload });
    //   // we cant change state via push
    //   // we creates a new copy of state by concat
    //   return state.(action.payload);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    default:
      return state;
  }
}
