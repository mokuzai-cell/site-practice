<template>
    <div id="bcf_all">
        <div>
            <h2 id="bcf_title">絞り込み</h2>
            <p id="bcf_allclear" @click="allclear">すべてクリア</p>
        </div>
<!-- 日付------------------------------------ -->
        <div class="bcf_wrap" name="date">
            <div>
                <span class="bcf_wrap_title">日付</span>
                <span class="bcf_wrap_clear" @click="wrapclear('date')">クリア</span>
            </div>
            <hr />
            <div class="bcf_btn_wrap">
                <label v-for="value in dates" class="checkBtn"><input type="checkbox" @click="changeDate(value[1])" :value="value[1]" /><span>{{ value[0] }}</span></label>
            </div>
        </div>
<!-- 場所------------------------------------ -->
        <div class="bcf_wrap" name="place">
            <div>
                <span class="bcf_wrap_title">場所</span>
                <span class="bcf_wrap_clear" @click="wrapclear('place')">クリア</span>
            </div>
            <hr />
            <div class="bcf_btn_wrap">
                <label v-for="value in places" class="checkBtn"><input type="checkbox" @click="changePlace(value[1])" :value="value[1]" /><span>{{ value[0] }}</span></label>
            </div>
        </div>
<!-- タグ------------------------------------ -->
        <div class="bcf_wrap" name="tag">
            <div>
                <span class="bcf_wrap_title">タグ</span>
                <span class="bcf_wrap_clear" @click="wrapclear('tag')">クリア</span>
            </div>
            <hr />
            <div class="bcf_btn_wrap">
            <label v-for="value in tags" class="checkBtn"><input type="checkbox" @click="changeTag(value[1])" :value="value[1]" /><span>{{ value[0] }}</span></label>
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
            //作るのがめんどくさいので「すべてのwrapのクリアを発動させる」ことで解決します
            let elems=document.getElementsByClassName('bcf_wrap');
            if(elems.length==0)return;
            for(let i=0;i<elems.length;i++){
                this.wrapclear(elems[i].getAttribute("name")+"");
            }
            this.$emit("sendAllclear");
        },
        wrapclear(wrapname:string){
            console.log("wrapclear:"+wrapname);
            for(let elem of document.getElementsByName(wrapname)[0].getElementsByClassName("bcf_btn_wrap")[0].querySelectorAll("input")){
                console.log(elem.checked);
                if(elem.checked){
                    this.$emit("sendChange"+wrapname,elem.value);
                    elem.checked=false;
                }
            }
            this.$emit("sendWrapclear",wrapname);
        },
        changeDate(date:string){
            console.log(date);
            this.$emit("sendChangedate",date);
        },
        changePlace(place:string){
            console.log(place);
            this.$emit("sendChangeplace",place);
        },
        changeTag(tag:string){
            console.log(tag);
            this.$emit("sendChangetag",tag);
        },
    },
}
</script>
<style>
#bcf_all{
    width:25dvw;
    max-width:480px;
    height:90%;
    position: fixed;
    top:5%;
    left:8px;
    overflow-y: auto;
    box-shadow: 4px 4px #182b66;
    border-top:1px;
    border-left:1px;
    border-radius: 8px;
    border-style: solid;
    border-color: #182b66;
    font-family: sans-serif;
    >*{
        margin-left:16px;
        margin-right:16px;
    }
}
#bcf_title{
    margin-top:8px;
    margin-bottom:8px;
}
#bcf_allclear{
    text-align:right;
    font-size:16px;
    margin-top:0;
    margin-bottom:12px;
    color:cornflowerblue;
    cursor:pointer;
}
#bcf_allclear:hover{
        color:blue;
}
.bcf-wrap{
    margin-bottom: 12px;
}
.bcf_wrap_title{
    font-size:20px;
    font-weight: bold;
}
.bcf_wrap_clear{
    float:right;
    font-size:14px;
    margin-top:6px;
    color:cornflowerblue;
    cursor:pointer;
}
.bcf_wrap_clear:hover{
        color:blue;
}
.bcf_btn_wrap{
    display:flex;
    flex-wrap: wrap;
    gap:24px 12px;
    margin-bottom: 24px;
    margin-top:8px;
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