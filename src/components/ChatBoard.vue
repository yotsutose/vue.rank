<template>


<v-container fluid>
    <v-row>
        <v-col cols=8>
            <v-card>
                <v-card-title>
                    <v-row>
                        <v-col cols="7">
                            {{ roomName }}
                        </v-col>
                        <v-col>
                            <v-spacer></v-spacer>
                        </v-col>
                        <v-col cols="4">
                            <v-btn color="error" block @click="clickMoriBtn">盛り上がり!!</v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card height=875>
                                <v-card-title>
                                  <v-spacer>
                                          <LineChart></LineChart>
                                          </v-spacer>
                                  </v-card-title>
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
                        <v-col>
                            <v-spacer></v-spacer>
                        </v-col>
                        <v-col>
                            <v-btn fab dark color="indigo" @click="setAutoScroll" v-if="!autoScroll" absolute>
                                <v-icon dark>mdi-refresh</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-container style="height: 820px" class="overflow-y-auto" id="chatBox" @wheel="cancelAutoScroll">
                    <v-row v-for="comment in comments" :key="comment.id">
                        <v-col>
                            <v-card>
                                <v-card-title>{{ comment.comment }}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <!-- <v-row justify="center" absolute height=200> -->
                <!-- </v-row> -->
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="10">
                                <v-text-field v-model="textField"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn fab dark color="indigo" @click="submit">
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
    import LineChart from './Chart.vue'

    export default {
        name: 'ChatBoard',
        components: {
          LineChart,
        },
        data: () => ({
            json: {},
            roomId: undefined,
            roomIndex: undefined,
            roomName: '',
            comments: [],
            textField: '',
            autoScroll: true
        }),
        methods: {
            submit: function() {
                if(this.textField.length > 0) {
                    this.comments.push({comment: this.textField})
                    firebase.database().ref('rooms/' + String(this.roomIndex) + '/comments').push({
                        comment: this.textField,
                        createdAt: Date.now(),
                        weight: 1
                    })
                    this.textField = ''
                } else {
                    alert('コメントが入力されていません')
                }
            },
            clickMoriBtn: function() {
                this.comments.push({comment: this.textField})
                firebase.database().ref('rooms/' + String(this.roomIndex) + '/comments').push({
                    comment: '',
                    createdAt: Date.now(),
                    weight: 1
                })
            },
            setCount: function(){
                this.count = [];
                for(let i=0;i<30;i++) this.count.push(0);

                // 現在時刻を取得
                let now = (new Date()).getTime();
                // 全てのcommentsを見る
                for(let i=0;i<this.comments.length;i++){ 
                  // 経過した分を計算
                  let diff = (now - this.comments[i].createdAt)/60
                  // 30分以内ならcountにweightを追加
                  if(diff <30) this.count[diff] += this.comments[i].weight;
                }
            },
            setAutoScroll: function() {
                this.autoScroll = true;
            },
            cancelAutoScroll: function() {
                this.autoScroll = false;
            }
        },
        created() {
            this.roomId = this.$route.params['id']
            firebase.database().ref('rooms').on('value', (snapshot) => {
                let rooms = snapshot.val();
                for(let key1 in rooms) {
                    if(rooms[key1].id == this.roomId) {
                        const room = rooms[key1]
                        this.roomIndex = key1
                        this.roomName = room.roomName
                        this.comments = []
                        for(let key2 in room.comments) {
                            if(room.comments[key2].comment != '') {
                                this.comments.push(room.comments[key2])
                            }
                        }
                    }
                }
            })
            document.getElementById('chatBox').scrollTo(0, document.getElementById('chatBox').scrollHeight)            
        },
        updated() {
            if(this.autoScroll) {
                document.getElementById('chatBox').scrollTo(0, document.getElementById('chatBox').scrollHeight)
            }
        }
    }
</script>

