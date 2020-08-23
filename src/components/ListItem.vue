<template>
	<div class="input-group">
		<div class="input-group-prepend">
			<div class="input-group-text">
				<input type="checkbox" ref="checkbox" :checked="status === 'clear'" @change="changeStatus" />
			</div>
		</div>
		<input type="text" class="form-control" :value="title" />
		<div class="input-group-append">
			<button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="removeItem">X</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
	@Prop() readonly id!: string;
	@Prop() readonly title!: string;
	@Prop() readonly status!: 'active' | 'clear';

	changeStatus($event: any) {
		const status = $event.target.checked ? 'clear' : 'active';
		this.$store.commit('changeStatus', { id: this.id, status });
	}
	removeItem() {
		this.$store.commit('removeItem', this.id);
	}
}
</script>
