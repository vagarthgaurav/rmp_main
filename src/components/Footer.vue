<template>
  <v-footer class="pa-5" style="min-height: 250px; color: #fff" color="primary">
    <v-layout row wrap>
      <v-flex class="xs12 md6 pa-4">
        <p
          class="subheading"
        >Depuis 2019, Recupmespoints aide les conducteurs a conserver leur permis de conduire</p>

        <div>
          <span>Besoin d'un conseil</span>
        </div>
        <div>
          <v-icon color="white" small left>mdi-deskphone</v-icon>
          <span>0 89675236</span>
        </div>
        <div>
          <v-icon color="white" small left>mdi-contact-phone</v-icon>
          <span>Lundi au Vendredi - 9h/18h - 0,25€/min</span>
        </div>
      </v-flex>

      <v-flex class="xs12 md6 pa-4 text-right">
        <v-layout row wrap>
          
          <v-flex class="xs12 pa-2 text-center my-3">
            <h4>Training Center</h4>
            <v-btn class="mx-2" dark text to="/registerTrainingCenter">Register</v-btn>
             <v-btn
             class="mx-2"
              dark
              text
              @click="trainingCenterLogin"
            >Login</v-btn>
          </v-flex>
          <v-flex class="xs12 pa-2 text-center my-3">
            <h4>Trainer</h4>
            <v-btn class="mx-2" dark text to="/registerTrainer">Register</v-btn>
            <v-btn class="mx-2" dark text @click="trainerLogin">Login</v-btn>
           
          </v-flex>
        </v-layout>
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
        "Stage de récupération de points",
        "Stage de sensibilisation à la sécurité routière",
        "Stage volontaire de récupération de points",
        "Stage obligatoire en permis probatoire",
        "Stages obligatoires - autres"
      ]
    };
  },
  methods: {
    trainerLogin() {
      window.open("https://trainer.gardez-votre-permis.fr/", "_blank");
    },
    trainingCenterLogin() {
      window.open("https://training-center.gardez-votre-permis.fr/", "_blank");
    }
  }
};
</script>

<style scoped>
</style>
