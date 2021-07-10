<template>
  <v-container>
      {{ json }}
  </v-container>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'ChatBoard',
        data: () => ({
            json: {}
        }),
        created() {
            const dbRef = firebase.database().ref("app");
                dbRef.on('value', (snapshot) => {
                this.json = snapshot.val();
            });
        }
    }
</script>
