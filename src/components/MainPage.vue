@import './reset.scss';

@import './animations.scss';

@import './colors.scss';

@import './elevation.scss';

@import './transitions.scss';
<template>


<v-container class="vcontainer" >
    <div class = "header">
        <h1>最大瞬間盛数</h1>
    </div>
    <!-- {{ json }} -->
    <!-- {{ test }} -->
    <!-- <v-btn @click="testMethod"></v-btn> -->

    <v-row class = "content">
        <v-col style="background-color: #FFCDD2">1</v-col>
        <v-col style="background-color: #F8BBD0">2
              <div class="text-center">
                 <div class="text-center">
            <v-btn
      class="mx-2"
      fab
      dark
      small
      color="cyan-darken3"
    >
      <v-icon dark>
        mdi-pool
      </v-icon>
    </v-btn>
        </v-col>
    </v-row>


</v-container>

</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'MainPage',
        data: () => ({
            json: {},
            test: "てすとてすと"
        }),
        methods: {
            testMethod: function() {
                this.test = "てすとてすとてすと"
            }
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
    height: 200px;

    
}
h1{
    /* text-align: center;  */
    color:white; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) 

    
}

.row_content{
    max-width:100%;
    padding:0px;
}



</style>