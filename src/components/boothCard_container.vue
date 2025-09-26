<template>
    <div id="bcc_container">
        <Booth_card v-for="(boothData , card_id) in boothDatas" :key="card_id"
            :id="card_id"
            :title="boothData.title"
            :group="boothData.group"
            :place="boothData.place"
            :tags=boothData.tags
            :describe="boothData.describe"
            :imgsrc="boothData.imgsrc"
        />
        <div id="bcc_notfound" v-if="notfound"></div>
    </div>
</template>
<!--コンポーネント読み込み用-->
<script setup lang="ts">
import boothJson from "../boothData.json";
import Booth_card from "./atoms/booth_card.vue";
</script>
<script lang="ts">
export default {
    data() {
        return {
            boothDatas:boothJson,
            notfound:false,
        }
    }
}
</script>
<style>
#bcc_container{
    margin-left:calc(mod(100% , (320px + 16px)) / 2 - 8px);
    display:flex;
    flex-wrap: wrap;
    row-gap: 16px;
    gap:24px;
}
</style>