<template>
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
        <div id="bcc_notfound" v-if="notfound"></div>
    </div>
   <BoothCardFilterPC 
        @sendChangeDate="changeDate" 
        @sendChangePlace="changePlace" 
        @sendChangeTag="changeTag" 
        @allclear="allClear" 
        @wrapclear="wrapClear" 
        />
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
        changeDate(date:String){
            if(this.selectedDates.includes(date)){
                this.selectedDates.splice(this.selectedDates.indexOf(date),1);
            }else{
                this.selectedDates.push(date);
            }
        },
        changePlace(place:String){
            if(this.selectedPlaces.includes(place)){
                this.selectedPlaces.splice(this.selectedPlaces.indexOf(place),1);
            }else{
                this.selectedPlaces.push(place);
            }
        },
        changeTag(tag:String){
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
            if(this.selectedDates.length>0){
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
        boothDatas(newList){
            this.notfound=newList.length===0;
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