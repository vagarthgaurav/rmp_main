<template>
    <div>
        <v-toolbar flat app height="60px" color="white" v-if="isLoggedIn">
            <v-toolbar-side-icon class="primary hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text--darken-2">
                <img src="../assets/logo.png" style="width: 40px; height: auto"/>

                <span class=" ml-5 font-weight-bold">Student Dashboard</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn flat color="red" v-on:click="logout">
                <span>Logout</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-if="isLoggedIn" app class="primary" v-model="drawer" :mini-variant="mini" dark>
            <v-list>
                <v-list-tile v-if="mini" @click.stop="mini = !mini">
                    <v-list-tile-action>
                        <v-icon>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{currentUser}}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>

                <v-divider light></v-divider>

                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        router :to="item.route"
                        active-class="primary darken-1"
                >
                    <v-list-tile-action>
                        <v-icon class="text--white">{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'


    export default {
        name: "NavBar",
        data() {
            return {
                drawer: true,
                mini: true,
                isLoggedIn: false,
                currentUser: [],
                items: [
                    {title: 'Profil', icon: 'account_box', route: '/profile', role: 'a'},
                    {title: 'Courses', icon: 'dashboard', route: '/', role: 's'},
                ],
            }
        },

        created() {

            if (firebase.auth().currentUser) {
                this.isLoggedIn = true;

                this.$http.get('https://us-central1-recupmespoints-59fbd.cloudfunctions.net/customerById?customerId=' + firebase.auth().currentUser.uid)
                    .then((data) => {
                        this.currentUser = data.body.firstname + ' ' + data.body.lastname;

                    });
            }

        },
        methods: {
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.go({path: this.$router.path});
                })
            },

        },
        computed: {}
    }

</script>

<style scoped>

</style>
