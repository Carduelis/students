import {
	FETCH_NEWS
} from '../constants';

const initialState = {
	data: {},
	meta: {},
	error: false,
	pending: true
};

export default function (state = initialState, action) {
  const { type, payload, error, meta, pending } = action;
  switch (type) {
    case FETCH_NEWS: {
      // we cant change state via push
      // we creates a new copy of state by concat
      // const newState = Object.keys(payload).map((key, index) => {
      //   console.debug(key, index);
      //   const stateProject = state[key];
      //   const freshProject = payload[key];
      //   return Object.assign({}, stateProject, freshProject);
      // });
      // console.warn(newState);
			const data = fixKeys(payload);
			let newState = {};
			if (error) {
				newState = { error, pending };
			} else {
				newState = {
					data: Object.assign({}, state.data, data),
					meta: Object.assign({}, state.meta, meta),
					error: false,
					pending,
				}
			}
      return Object.assign({}, state, newState);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    }
    default: {
      return state;
    }
  }
}


const fixKeys = (payload) => {
	const newPayload = {};
	for (let i in payload) {
		const item = payload[i];
		newPayload[i] = {
			title: item.title || item.name,
			description: item.description || item.detail_text,
			tags: item.tags || [{
				id: 'tag1',
				label: 'Институт кибернетики'
			}, {
				id: 'tag2',
				label: 'МЧС'
			}, {
				id: 'tag3',
				label: 'Ректор'
			}],
			content: item.content || item.detail_text,
			author: item.author || 'Приемная комиссия',
			createdAt: item.date || '14 июл. 2017',
			updatedAt: item.updatedAt || '15 авг. 2017',
		}
	}
	return newPayload;
}
