<template>
    <div id="bcf_all">
        <div id="bcf_title">

        </div>
<!-- 日付------------------------------------ -->
        <div class="bcf_wrap">
            <h3>日付<span>クリア</span></h3>
            <div class="bcf_btn_wrap">
            <label v-for="value in dates" class="checkBtn"><input type="checkbox" @click="changeDate(value[1])"/><span>{{ value[0] }}</span></label>
            </div>
        </div>
<!-- 場所------------------------------------ -->
        <div class="bcf_wrap">
            <h3>場所</h3>
            <div class="bcf_btn_wrap">
            <label v-for="value in places" class="checkBtn"><input type="checkbox" @click="changePlace(value[1])"/><span>{{ value[0] }}</span></label>
            </div>
        </div>
<!-- タグ------------------------------------ -->
        <div class="bcf_wrap">
            <h3>タグ</h3>
            <div class="bcf_btn_wrap">
            <label v-for="value in tags" class="checkBtn"><input type="checkbox" @click="changeTag(value[1])"/><span>{{ value[0] }}</span></label>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    props:{

    },
    data() {
        return({
            dates:[["11/23（土）","11/23"],["11/24（日）","11/24"]],
            tags:[
                ["子供向け","子供向け"],
                ["中高生向け","中高生向け"],
                ["チーバ君","チーバ君"],
            ],
            places:[
                ["講義棟","K"],
                ["ステージ","ステージ"],
                ["Gブース","G"],
                ["その他",""],
            ],

        });
    },
    methods: {
        allclear(){
            this.$emit("allclear");
        },
        wrapclear(wrapname:String){

        },
        changeDate(date:String){
            console.log(date);
            this.$emit("sendChangeDate",date);
        },
        changePlace(place:String){
            console.log(place);
            this.$emit("sendChangePlace",place);
        },
        changeTag(tag:String){
            console.log(tag);
            this.$emit("sendChangeTag",tag);
        },
    },
}
</script>
<style>
.bcf-wrap{
    margin-bottom: 12px;
}
.bcf_btn_wrap{
    display:flex;
    flex-wrap: wrap;
    gap:12px;
}
.checkBtn{
    input{
        display:none;
    }
    span{
        border:1px solid black;
        font-size:14px;
        color: black;
        border-radius: 1.2em;
        padding:0.5em;
        user-select: none;
        cursor: pointer;
    }
    input:checked + span{
        background-color:#ccd8ff;
    }
}
</style>