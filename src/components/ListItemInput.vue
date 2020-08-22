<template>
	<div class="form-group">
		<input type="text" class="form-control" @keyup.enter="addItem" placeholder="할일을 입력해주세요" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
	addItem() {
		console.log(1);
	}
}
</script>
