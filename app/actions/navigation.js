import {
  GET_MENU_LIST
} from '../constants';


export function getMenuList() {
  return {
    type: GET_MENU_LIST,
		payload: [
			{
				label: 'Кампуса и контакты',
				icon: 'MdBusiness',
				to: 'contacts'
			}, {
				label: 'Об университете',
				icon: 'MdGoat',
				to: 'about'
			}, {
				label: 'Мероприятия',
				icon: 'MdEventAvailable',
				to: 'events'
			}, {
				label: 'Избранное',
				icon: 'MdFavoriteOutline',
				to: 'favorite'
			}, {
				label: 'Подать заявку',
				icon: 'MdFiberNew',
				to: 'applience'
			}, {
				label: 'Расписание занятий',
				icon: 'MdEventNote',
				to: 'schedule'
			}, {
				label: 'Задать вопрос',
				icon: 'MdForum',
				to: 'chat'
			}, {
				label: 'FAQ',
				icon: 'MdForum',
				to: 'faq'
			},
		]
  };
}
