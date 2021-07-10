<template>

<v-container>

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
            firebase.database().ref("app").on('value', (snapshot) => {
                this.json = snapshot.val();
            });
        }
    }
</script>
