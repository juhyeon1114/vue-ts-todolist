import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/index.interface.ts';

Vue.use(Vuex);

const store: StoreOptions<State> = {
	state: {
		todoList: [
			{ id: 0, title: 'test1', status: 'active' },
			{ id: 1, title: 'test2', status: 'active' },
			{ id: 2, title: 'test3', status: 'clear' },
		],
	},
	mutations: {
		addItem(state, item: Item) {
			state.todoList.push(item);
		},
		changeStatus(state, { id, status }: { id: number; status: 'active' | 'clear' }) {
			state.todoList[id].status = status;
		},
		removeItem(state, id: number) {
			state.todoList.splice(id, 1);
		},
	},
	actions: {},
	getters: {
		everyTodoList: state => state.todoList,
		activeTodoList: state => state.todoList.filter(v => v.status === 'active'),
		clearTodoList: state => state.todoList.filter(v => v.status === 'clear'),
	},
};

export default new Vuex.Store(store);
