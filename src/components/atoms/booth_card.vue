<template>
    <div class="bc_all">
        <div class="bc_top">
                <img id="bc_img" :inferSize="isinfersize" :src="img" :alt="title" loading="lazy" />
            <div class="bc_topRight">
                <div>
                    <h1>{{ title }}</h1>
                    <h3>{{ group }}</h3>
                </div>
                <div class="bc_place_date">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z"/></svg>
                    {{ place }}</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--<!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.>--><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
                    {{ date }}</span>
                </div>
            </div>
        </div>
        <div class="bc_bottom">
            <div class="bc_describe">{{describe}}</div>
            <div class="bc_tag">
            <span v-for="tag in tags">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--<!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.>--><path d="M96.5 160L96.5 309.5C96.5 326.5 103.2 342.8 115.2 354.8L307.2 546.8C332.2 571.8 372.7 571.8 397.7 546.8L547.2 397.3C572.2 372.3 572.2 331.8 547.2 306.8L355.2 114.8C343.2 102.7 327 96 310 96L160.5 96C125.2 96 96.5 124.7 96.5 160zM208.5 176C226.2 176 240.5 190.3 240.5 208C240.5 225.7 226.2 240 208.5 240C190.8 240 176.5 225.7 176.5 208C176.5 190.3 190.8 176 208.5 176z"/></svg>                
                {{ tag }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    id: Number,
    title: String,
    group: String,
    place: String,
    date: String,
    describe: String,
    tags: Array<String>,
    imgsrc: String,
})
const img="src/images/booth/"+props.imgsrc;
const isinfersize=true;
</script>
<style>
.bc_all{
    /*width:320px;
    height:216px;*/
    border-top: 2px solid #182c66;
    border-bottom: 2px solid #182c66;
    font-family: sans-serif;
    *{
        margin:0;
        padding:0;
    }
}
.bc_top{
    height:80px;
    margin:12px 16px 0 16px;
    display:flex;
    gap:16px;
    margin-bottom: 8px;
    img{
        height:100%;
        width:auto;
    }
}
.bc_topRight{
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    /*タイトル*/
    h1{
        color:#333333;
        font-size: 16px;
    }
    /*グループ*/
    h3{
        color:#5a5a5a;
        font-size: 12px;
    }
}
.bc_place_date{
    color:black;
    font-size:14px;
    display:flex;
    align-items: baseline;
    gap:20px;
    cursor:pointer;
    svg{
        height:20px;
        width:auto;
        fill:black;
        transform:translateY(3px);
    }
}
.bc_bottom{
    margin:0 16px 12px 16px;
    background-color: #182c66;
    color:#fefefe;
    width:272px;
    height:86px;
    padding:8px;
}
.bc_describe{
    font-size:14px;
    height:75%;
    white-space: pre-line;
    overflow: hidden;
    /*-webkit-line-clamp: 3;*/
}
.bc_tag{
    font-size:14px;
    height:25%;
    overflow: hidden;
    >*{
        padding-right:4px;
        cursor: pointer;
    }
    svg{
        fill:#fefefe;
        height:14px;
        width:auto;
        transform:translateY(3px);
    }
}
</style>