<template>
	<div class="form-group">
		<input type="text" class="form-control" @keyup.enter="addItem" placeholder="할일을 입력해주세요" v-model="title" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
	title!: string;

	addItem() {
		const id = this.$store.state.todoList.length + 1;
		this.$store.commit('addItem', { id, title: this.title, status: 'active' });
		this.title = '';
	}
}
</script>
