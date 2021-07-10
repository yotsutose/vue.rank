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
                ・水泳アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・アーチェリーアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・陸上アイコン
                </v-col> 
            </v-row> 
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
                <v-col style="background-color: #FFFFFF">
                ・バドミントンアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・野球・ソフトボールアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・バスケットボールアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・バドミントン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・野球・ソフトボール
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・バスケットボール
                </v-col> 
            </v-row>  
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ボクシングアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・カヌーアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・自転車アイコン
                </v-col> 
            </v-row>
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ボクシング
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・カヌー
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・自転車
                </v-col> 
            </v-row>
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・馬術アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・フェンシングアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・サッカーアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・馬術
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・フェンシング
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・サッカー
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ゴルフアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・体操アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ハンドボールアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ゴルフ
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・体操
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ハンドボール
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ホッケーアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・柔道アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・空手アイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・ホッケー
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・柔道
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・空手
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・現代5種アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ボートアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ラフビーアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・現代5種
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ボート
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ラフビー
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・セーリングアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・射的アイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・スケートボードアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・セーリング
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・射的
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・スケートボード
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・スポーツクライミングアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・サーフィンアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・卓球アイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・スポーツクライミング
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・サーフィン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・卓球
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・テコンドーアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・テニスアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・トライアスロンアイコン
                </v-col> 
            </v-row> 
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・テコンドー
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・テニス
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・トライアスロン
                </v-col> 
            </v-row>  
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・バレーボールアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ウエイトリフティングアイコン
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・レスリングアイコン
                </v-col> 
            </v-row>  
            <v-row class="grey lighten-3" style="height: 60px;">        
                <v-col style="background-color: #FFFFFF">
                ・バレーボール
                </v-col>       
                <v-col style="background-color: #FFFFFF">
                ・ウエイトリフティング
                </v-col>       
                <v-col style="background-color: #FFFFFF">
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