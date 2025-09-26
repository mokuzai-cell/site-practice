<script setup lang="ts">
import { ref } from "vue";

const text = ref("クリック前");
const onBtnClick = (args: string): void => {
	text.value = args;
};
</script>

<template>
	<button v-on:click="onBtnClick('クリック後')">クリック</button>
	<p>クリックの結果：{{ text }}</p>
</template>