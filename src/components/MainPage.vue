@import './reset.scss';

@import './animations.scss';

@import './colors.scss';

@import './elevation.scss';

@import './transitions.scss';

<template>
  <v-container class="vcontainer">
    <div class="header">
      <h1>最大瞬間盛数</h1>
      <div class="icon chart">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>

    <v-row class="content">
      <v-col cols="5" style="background-color: #ffffff">
    <div class="small_title">
        <h2>今盛り上がってます！</h2>
        <h4>～過去10分間で盛り上がった競技～</h4>
        <v-btn 
        style="align-center;"
        elevation="1"
        @click="Reload()"
        
        >更新</v-btn>
    </div>
        <v-card max-width="500" class="mx-auto">
          <v-toolbar color="amber lighten-1" dark>
            <span class="bar_title">ランキング</span>
          </v-toolbar>
          <v-list>
            <v-list-item 
                    v-for="(r, index) in rank"
                    :key="r.title"
                >
                
                
                    <v-list-item-content>
                    <div class="ranking_sport">
                        <div v-if="index==0">
                            <p class = "no1_ranking">第1位</p>
                            <span class="no1_text">{{ r[0] }}</span>                           
                            <v-list-item-title class="point" v-text="r[1]+'票'"></v-list-item-title>
                        </div>
                        <div v-else-if="index==1">
                            <p class = "no2_ranking">第2位</p>
                            <span class="no2_text">{{ r[0] }}</span>             
                            <v-list-item-title class="point" v-text="r[1]+'票'"></v-list-item-title>
                        </div>
                        <div v-else-if="index==2">
                            <p class = "no3_ranking">第3位</p>
                            <span class="no3_text">{{ r[0] }}</span>   
                            <v-list-item-title class="point" v-text="r[1]+'票'"></v-list-item-title>
                        </div>
                        <div v-else>
                            <p class = "another_sport_rank">第{{index+1}}位</p>
                            <span class="another_sport">{{ r[0] }}</span>   
                            <v-list-item-title class="point2" v-text="r[1]+'票'"></v-list-item-title>
                        </div>
                        
                    </div>
                    </v-list-item-content>
            
           
                    <v-list-item-avatar>
                    <!--<v-img :src="item.sport"></v-img>-->
                    </v-list-item-avatar>
            </v-list-item>
                
          </v-list>
          <!--
                <v-pagination
                        v-model="page"
                        :length="2"
                    ></v-pagination>
            -->
        </v-card>
        
    </v-col>


        <v-col  style="background-color: #FFFFFF;height: 60px;">
            <h2>オリンピック競技</h2> 
        <v-row style="height: 20px">
        </v-row>
        <div v-for="(sport,index) in sports" :key="sport.id">
            <v-row class="grey lighten-3" style="height: 80px" v-if="index%3==0">
                <v-col style="background-color: #FFFFFF">
                    <v-icon class="icon">{{icons.find(item => item.id == sports[index].id).icon}}</v-icon>
                    <router-link :to="{ name: 'room',params: { id: sports[index].id}}">{{sports[index].sport}}</router-link>
                </v-col>      
                <v-col style="background-color: #FFFFFF">  
                    <v-icon class="icon">{{icons.find(item => item.id == sports[index+1].id).icon}}</v-icon>
                    <router-link :to="{ name: 'room',params: { id: sports[index+1].id}}">{{sports[index+1].sport}}</router-link>
                </v-col>      
                <v-col style="background-color: #FFFFFF">
                    <v-icon  class="icon">{{icons.find(item => item.id == sports[index+2].id).icon}}</v-icon>
                    <router-link :to="{ name: 'room',params: { id: sports[index+2].id}}">{{sports[index+2].sport}}</router-link>
                </v-col> 
            </v-row>   
        </div>
  </v-col>

  </v-row>
</v-container>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import icons from '../assets/icons.json'

export default {
        name: 'MainPage',
        data: () => ({
            "rank":[],
            "sports": null,
            "icons": icons,
            }),
        computed:{
            
        },
        method:{
            Reload : function(){
                this.rank = [],
                axios
                .get('https://kdg-hacks-team-d-api.herokuapp.com/')
                .then(response => (this.rank = response.data.rank))

                this.$router.go({path: this.$router.currentRoute.path, force: true})
            }
        },
        mounted(){
            axios
                .get('https://kdg-hacks-team-d-api.herokuapp.com/')
                .then(response => (this.rank = response.data.rank))
        },
        created() {
            firebase.database().ref("sports").get().then((snapshot) => {
                if (snapshot.exists()) {
                    this.sports=snapshot.val();
                } else {
                    console.log("No data available");
                }
                }).catch((error) => {
                    console.error(error);
                });
        }
        }
        
</script>


<!-- CSS -->
<style scoped>
.vcontainer{
    position:relative; 
    max-width:100%;
    padding:0;
}

.header{ 
    background-color: rgb(202, 115, 99);
    width:100%;
    min-height: 90vh;
    position:relative;
}

h1{
    /* text-align: center;  */
    color:white; 
    position:absolute;
    top:54%;
    left: 50%;
    transform: translate(-50%, -50%);
    

}
.grey{
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    row-gap: 70px;
}
.row_content{
    max-width:100%;
    padding: 0px;
} 
 
h2{
    padding-bottom : 15px;
    padding-top : 15px;
    display:block;
    text-align:center;
}

h4{
    padding-bottom : 15px;
    padding-top : 15px;
    display:block;
    text-align:center;
}
 

/* グラフのアニメーション */
.chart {
  position: absolute;
  top: 74%;
  left: 50%;
  width: 16em;
  height: 16em;
  transform: translate(-50%,-50%);
}
/*タイポテキスト*/
.TOKYO{
    position: absolute;
    display:block;
    width: 420px;
    height: 420px;
    top: 10%;
    left: -16%;
}
.Olym{
    position: absolute;
    display: block;
    /* width: 50%; */
    width: 520px;
    height: 50%;
    top: 6%;
    left: 52%;
}
/* Chart */

.chart { color: #12395F; }
.chart::before,
.chart::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.25em;
  height: 8.125em;
  margin: 0 0 0 -3.25em;
  transform: translate(-50%,-50%);
  background-color: currentColor;
  border-radius: 0.125em;
}


.chart::after {
  width: 8.125em;
  height: 0.25em;
  margin: 3.125em 0 0 -0.125em;
}

.chart i {
  position: absolute;
  bottom: 4.75em;
  left: 9em;
  box-sizing: border-box;
  display: block;
  width: 1.875em;
  height: 0;
  background-color: #F69D88;
  box-shadow: inset 0 0 0 0.25em currentColor;
}

.chart i:first-child {
  animation: chart1 0.999s infinite linear;
}

.chart i:nth-child(2) {
  background-color: #FFDEA3;
  animation: chart2 0.999s 0.333s infinite linear;
}

.chart i:last-child {
  background-color: #85C996;
  animation: chart3 0.999s 0.666s infinite linear;
}
.no1_ranking{
    color:#D32F2F;
    font-size: 35px;
    /*margin-bottom: 10px;*/
}

.no1_text{
    font-size: 35px;
}

.no2_ranking{
    color:#D32F2F;
    font-size: 35px;
    /*margin-bottom: 10px;*/
}

.no2_text{
    font-size: 35px;
}

.no3_ranking{
    color:#D32F2F;
    font-size: 35px;
    /*margin-bottom: 10px;*/
}

.no3_text{
    font-size: 35px;
}

.ranking_sport{
    border-bottom: solid 2px #555;
}

.point{
    float:right;
    font-size:35px;
    /*margin-bottom: 7px;*/
}

.another_sport{
    font-size:25px;
    float:left;
}

.point2{
    float:right;
    font-size:25px;
}

.another_sport_rank{
    margin-bottom: 10px;
    font-size:25px;
}

.reload{
    margin-bottom: 10px;
}

.small_title{
    position:relative; 
    text-align:center;
}

.bar_title{
    color: black;
    display:block;
    text-align:center;
}

@keyframes chart1 {
  0% { height: 0; }
  10% { height: 5.625em; }
  70% { width: 1.875em; transform: translateX(-4.375em); }
  99% { width: 0; height: 5.625em; transform: translateX(-4.375em); }
  99.1% { height: 0; transform: translateX(0em); }
  100% { height: 0; }
}   
 
@keyframes chart2 {
  0% { height: 0; }
  10% { height: 2.375em; }
  70% { width: 1.875em; transform: translateX(-4.375em); }
  99% { width: 0; height: 2.375em; transform: translateX(-4.375em); }
  99.1% { height: 0; transform: translateX(0em); }
  100% { height: 0; }
}
@keyframes chart3 {
  0% { height: 0; }
  10% { height: 3.5625em; }
  70% { width: 1.875em; transform: translateX(-4.375em); }
  99% { width: 0; height: 3.5625em; transform: translateX(-4.375em); }
  99.1% { height: 0; transform: translateX(0em); }
  100% { height: 0; }
}
</style>