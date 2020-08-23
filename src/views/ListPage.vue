<template>
	<div>
		<list-item v-for="d in renderList" :key="d.id" :id="d.id" :title="d.title" :status="d.status"></list-item>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';
// import { mapGetters } from 'vuex';

@Component({
	components: {
		ListItem,
	},
	computed: {
		// ...mapGetters(['everyTodoList', 'activeTodoList', 'clearTodoList']),
		// status: this.$route.params.status,
	},
})
export default class ListPage extends Vue {
	renderList = [];

	initRenderList(newVal: string) {
		if (!newVal) {
			this.renderList = this.$store.getters.everyTodoList;
		} else if (newVal === 'active') {
			this.renderList = this.$store.getters.activeTodoList;
		} else if (newVal === 'clear') {
			this.renderList = this.$store.getters.clearTodoList;
		}
	}

	@Watch('$route.params.status')
	routeUpdate(newVal: 'active' | 'clear') {
		this.initRenderList(newVal);
	}

	@Watch('$store.state.todoList', { deep: true })
	todoListUpdate() {
		this.initRenderList(this.$route.params.status);
	}

	created() {
		const status = this.$route.params.status;
		this.initRenderList(status);
	}
}
</script>

<style></style>
