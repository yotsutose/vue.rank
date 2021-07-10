@import './reset.scss';

@import './animations.scss';

@import './colors.scss';

@import './elevation.scss';

@import './transitions.scss';
<template>


<v-container class="vcontainer">
    <div class = "header">
        <h1>最大瞬間盛数</h1>
    </div>


    <v-row class = "content">
        <v-col cols="4" style="background-color: #FFFFFF">
        <h2>今盛り上がってます！</h2>
        <h3>～過去10分間で盛り上がった競技～</h3>
                <v-card
                max-width="500"
                class="mx-auto"
                >
                <v-toolbar
                color="indigo"
                dark
                >
                <v-toolbar-title>ランキング</v-toolbar-title>

                </v-toolbar>
                <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                >
                    <v-list-item-icon>
                    <v-icon
                        v-if="item.icon"
                        color="pink"
                    >
                        mdi-star
                    </v-icon>
                    </v-list-item-icon>
                    
                    <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
                </v-list>
            </v-card>
        </v-col>        

        <v-col  style="background-color: #FFFFFF;height: 60px;">
        <h2>オリンピック競技</h2>
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・水泳
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・アーチェリー
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・陸上
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・バドミントン
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・野球・ソフトボール
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・バスケットボール
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・ボクシング
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・カヌー
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・自転車
                </v-col> 
            </v-row>
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・馬術
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・フェンシング
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・サッカー
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・ゴルフ
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・体操
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・ハンドボール
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・ホッケー
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・柔道
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・空手
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・現代5種
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・ボート
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・ラフビー
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・セーリング
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・射的
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・スケートボード
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・スポーツクライミング
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・サーフィン
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・卓球
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・テコンドー
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・テニス
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・トライアスロン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #BBDEFB">
                ・バレーボール
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・ウエイトリフティング
                </v-col>       
                <v-col style="background-color: #BBDEFB">
                ・レスリング
                </v-col> 
            </v-row> 


        </v-col>
    </v-row>



</v-container>

</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'MainPage',
        data: () => ({
            
            items: [
            { title: '第1位：サッカー', avatar: 'soccer.jpg' },
            { title: '第2位：野球', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
            { title: '第3位：水泳', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
            { title: '第4位：陸上', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
            ],

            
        }),
        methods: {
            
        },
        created() {
            firebase.database().ref("app").on('value', (snapshot) => {
                this.json = snapshot.val();
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
    background-color: rgb(37, 79, 110);
    width:100%;
    min-height: 80vh;


    
}
h1{
    /* text-align: center;  */
    color:white; 
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%) 
}
.grey{
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        column-gap: 5px;
        row-gap: 70px;
}

.row_content{
    max-width:100%;
    padding:0px;
}

h2{
    padding-bottom : 3px;
}
h3{
    padding-bottom : 15px;
}


</style>