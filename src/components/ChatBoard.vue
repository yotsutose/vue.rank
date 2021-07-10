<template>

<v-container>
    {{ json }}
    {{ test }}
    <v-btn @click="testMethod"></v-btn>
</v-container>

</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'ChatBoard',
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
