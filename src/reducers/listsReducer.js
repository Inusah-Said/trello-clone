import { CONSTANTS } from '../actions/index';
let listId = 2;
let cardId = 4;
const initialState = [
	{
		title: 'Last episode',
		id: 3,
		cards: [
			{
				id: 0,
				text: 'we created a static list and card',
			},
			{
				id: 1,
				text: 'we used a mix between material ui react and styled components',
			},
		],
	},
	{
		title: 'kpodjiemo',
		id: 1,
		cards: [
			{
				id: 0,
				text: 'hello friends',
			},
		],
	},
	{
		title: 'kpodjiemo',
		id: 2,
		cards: [
			{
				id: 0,
				text: 'hello friends',
			},
			{
				id: 1,
				text: 'wassup baby',
			},
			{
				id: 2,
				text: 'yoyoyo',
			},
		],
	},
];
const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: listId,
			};
			listId += 1;
			return [...state, newList];
		case CONSTANTS.ADD_CARD:
			const newCard = {
				text: action.payload.text,
				id: cardId,
			};
			cardId += 1;

			const newState = state.map((list) => {
				if (list.id === action.payload.listId) {
					console.log(action.payload.listId);
					return {
						...list,
						cards: [list.cards, newCard],
					};
				} else {
					return list;
				}
			});
			return newState;
		default:
			return state;
	}
};
export default listsReducer;
