<template>
	<div id="app">
		<app-header></app-header>
		<list-item-input></list-item-input>
		<!-- <list-item></list-item> -->
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/AppHeader.vue';
// import ListItem from '@/components/ListItem.vue';
import ListItemInput from '@/components/ListItemInput.vue';

@Component({
	components: {
		AppHeader,
		// ListItem,
		ListItemInput,
	},
})
export default class App extends Vue {}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 100px 200px;
}
</style>
