<template>
	<div>
		<list-item v-for="d in renderList" :key="d.id" :title="d.title" :status="d.status"></list-item>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';

@Component({
	components: {
		ListItem,
	},
})
export default class ListPage extends Vue {
	data = [
		{ id: 0, title: 'test1', status: 'active' },
		{ id: 1, title: 'test2', status: 'active' },
		{ id: 2, title: 'test3', status: 'clear' },
	];
	renderList = this.data;

	@Watch('$route.params.status')
	routeUpdate(newVal: string) {
		if (!newVal) {
			this.renderList = this.data;
		} else {
			this.renderList = this.data.filter(v => v.status === newVal);
		}
	}
}
</script>

<style></style>
