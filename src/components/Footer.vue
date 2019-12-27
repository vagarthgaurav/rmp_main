<template>
    <v-footer class="pa-5 " style="min-height: 250px;  background-color: #f2f2f4;">
        <v-layout row wrap>

            <v-flex class="xs12 md6 pa-4">
                <p class="subheading">Depuis 2019, Recupmespoints aide les conducteurs a conserver leur permis de conduire</p>

                <div>
                    <v-icon color="primary" small left>phone</v-icon>
                    <span>Besoin d'un conseil</span>
                </div>
                <div>
                    <v-icon color="primary" small left>location_on</v-icon>
                    <span>0 89675236</span>
                </div>
                <div>
                    <v-icon color="primary" small left>location_on</v-icon>
                    <span>Lundi au Vendredi - 9h/18h - 0,25€/min</span>
                </div>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                items: [
                    'Stage de récupération de points',
                    'Stage de sensibilisation à la sécurité routière',
                    'Stage volontaire de récupération de points',
                    'Stage obligatoire en permis probatoire',
                    'Stages obligatoires - autres',
                ]
            }
        }
    }
</script>

<style scoped>

</style>
