<template>
    <div class="bcc_all">
        <BoothCardFilterPC 
            @sendChangedate="changeDate" 
            @sendChangeplace="changePlace" 
            @sendChangetag="changeTag" 
            @sendWrapclear="wrapClear" 
            @sendAllclear="allClear"
            />
        <div id="bcc_container">
            <BoothCard v-for="(boothData , card_id) in filteringBoothDatas" :key="card_id"
                :id="card_id"
                :title="boothData.title"
                :group="boothData.group"
                :place="boothData.place"
                :tags=boothData.tags
                :describe="boothData.describe"
                :imgsrc="boothData.imgsrc"
                :date="boothData.date"
            />
        </div>
        <div id="bcc_notfound" v-if="notfound">NOT FOUND<br /><br />お探しの展示は見つかりませんでした。<br />別の条件で検索してみてください。</div>
    </div>
</template>
<!--コンポーネント読み込み用-->
<script lang="ts">
import boothJson from "../boothData.json";
import booth_card from "./atoms/booth_card.vue";
import BoothCardFilterPC from "./atoms/boothCard_filter_pc.vue";

export default {
    components:{
        BoothCard:booth_card,
        BoothCardFilterPC:BoothCardFilterPC,
    },
    data() {
        return {
            boothDatas:boothJson,
            notfound:false,
            selectedDates:new Array<String>(),
            selectedPlaces:new Array<String>(),
            selectedTags:new Array<String>(),
        }
    },
    methods:{
        allClear(){
            this.selectedDates=[];
            this.selectedPlaces=[];
            this.selectedTags=[];
        },
        wrapClear(category:String){
            if(category=="date"){
                this.selectedDates=[];
            }else if(category=="place"){
                this.selectedPlaces=[];
            }else if(category=="tag"){
                this.selectedTags=[];
            }
        },
        changeDate(date:string){
            if(this.selectedDates.includes(date)){
                this.selectedDates.splice(this.selectedDates.indexOf(date),1);
            }else{
                this.selectedDates.push(date);
            }
        },
        changePlace(place:string){
            if(this.selectedPlaces.includes(place)){
                this.selectedPlaces.splice(this.selectedPlaces.indexOf(place),1);
            }else{
                this.selectedPlaces.push(place);
            }
        },
        changeTag(tag:string){
            console.log(this.selectedTags);
            if(this.selectedTags.includes(tag)){
                this.selectedTags.splice(this.selectedTags.indexOf(tag),1);
            }else{
                this.selectedTags.push(tag);
            }
        },
    },
    computed:{
        filteringBoothDatas(){
            let filtered:any;
            filtered=this.boothDatas;
            if(this.selectedDates.length>0 && this.selectedDates.length<2){
                filtered=filtered.filter((item:any)=>{
                    return this.selectedDates.includes(item.date);
                });
            }
            if(this.selectedPlaces.length>0){
                filtered=filtered.filter((item:any)=>{
                    return this.selectedDates.includes(item.place_category);
                });
            }
            if(this.selectedTags.length>0){
                filtered=filtered.filter((item:any)=>{                    
                    for(let tag of item.tags){
                        if(this.selectedTags.includes(tag))return true;
                    }
                    return false;
                });
            }
            return filtered;
        }
    },
    watch:{
        filteringBoothDatas(newList){
            this.notfound=newList.length===0;
        }
    }
}
</script>
<style>
#bcc_container{
    margin-left:calc(mod(75dvw , (320px + 16px)) / 2 - 8px + 25dvw);
    display:flex;
    flex-wrap: wrap;
    row-gap: 16px;
    gap:24px;
    width:auto;
}
#bcc_all{
    width:100%;
    height:100%;
}
#bcc_notfound{
    width: 75%;
    margin-left:25%;
    margin-top:10em;
    text-align:center;
}
</style>