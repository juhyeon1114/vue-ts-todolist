<template>
	<div>
		<div>
			<h1>To Do List</h1>
		</div>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><router-link to="/">All</router-link></li>
				<li class="breadcrumb-item"><router-link to="/active">Active</router-link></li>
				<li class="breadcrumb-item"><router-link to="/clear">Clear</router-link></li>
			</ol>
		</nav>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {}
</script>
