<template>


<v-container fluid>
    <v-row>
        <v-col cols=8>
            <v-card>
                <v-card-title>
                    <v-row>
                        <v-col>
                            {{ roomName }} / {{ sportsName }}
                        </v-col>
                        <v-col>
                            <v-spacer></v-spacer>
                        </v-col>
                        <v-col>
                            <v-btn color="error" block>盛り上がり!!</v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card height=200>
                                <v-card-title>
                                    <v-col>
                                        点数
                                    </v-col>
                                    <v-col>
                                        <v-spacer></v-spacer>
                                    </v-col>
                                </v-card-title>
                                <v-data-table hide-default-footer hide-default-header>
                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card height=650>
                                <v-card-title>
                                    <v-col>
                                        盛り上がりグラフ
                                    </v-col>
                                    <v-col>
                                        <v-spacer></v-spacer>
                                    </v-col>
                                </v-card-title>
                                <v-data-table hide-default-footer hide-default-header>
                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
        <v-col cols=4>
            <v-card>
                <v-card-title>
                    <v-row>
                        <v-col>
                            チャット
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-container style="height: 820px" class="overflow-y-auto">
                    <v-row v-for="comment in comments" :key="comment.id">
                        <v-col>
                            <v-card>
                                <v-card-title>{{ comment.comment }}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="10">
                                <v-text-field></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn fab dark color="indigo">
                                    <v-icon dark>mdi-send</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'ChatBoard',
        data: () => ({
            json: {},
            roomId: 1,
            roomName: '',
            sportsName: 0,
            comments: [],
            sports: [
                "水泳", "アーチェリー", "陸上", "バドミントン", "野球・ソフトボール", "バスケットボール", "ボクシング", "カヌー", "自転車", "馬術",
              "フェンシング", "サッカー", "ゴルフ", "体操", "ハンドボール", "ホッケー", "柔道", "空手", "近代5種", "ボート",
              "ラグビー", "セーリング", "射撃", "スケートボード", "スポーツクライミング", "サーフィン", "卓球", "テコンドー", "テニス", "トライアスロン",
              "バレーボール", "ウエイトリフティング", "レスリング"
            ]
        }),
        methods: {
        },
        created() {
            firebase.database().ref().on('value', (snapshot) => {
                let data = snapshot.val();
                for(let i=0; i<data.rooms.length; i++) {
                    if(this.roomId == data.rooms[i].id) {
                        this.roomName = data.rooms[i].roomName;
                        this.sportsName = this.sports[Number(data.rooms[i].sportsId)-1]
                        for(let j=0; j<data.rooms[i].comments.length; j++) {
                            if(data.rooms[i].comments[j].comment != '') {
                                this.comments.push(data.rooms[i].comments[j])
                            }
                        }
                        break;
                    }
                }

            });
        }
    }
</script>

