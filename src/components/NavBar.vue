<template>
  <nav>
    <v-app-bar flat style="background: #f6f6f6" class="py-2">
      <v-toolbar-title>
        <router-link to="/">
          <img src="@/assets/logo.png" height="65px" />
        </router-link>
      </v-toolbar-title>

      <div class="dropdown">
        <span>
          <span class="font-weight-black">Stages récupération de points</span>
          <v-icon small right color="black">mdi-arrow-down-drop-circle-outline</v-icon>
        </span>
        <div class="dropdown-content">
          <v-layout rowwrap>
            <v-flex xs12 md6 class="pa-2">
              <h3>Stages récupération de points</h3>
              <p v-for="(item,i) in stagePermis" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>

            <v-flex xs12 md6 class="pa-2">
              <h3>Information Utiles</h3>
              <p v-for="(item,i) in informatUtiles" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div class="dropdown">
        <span>
          <span class="font-weight-black">Infraction et legislation</span>
          <v-icon small right color="black">mdi-arrow-down-drop-circle-outline</v-icon>
        </span>
        <div class="dropdown-content">
          <h3>Infraction et legislation</h3>
          <v-layout rowwrap>
            <v-flex xs12 md6 class>
              <p v-for="(item,i) in infractionLegislation1" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>

            <v-flex xs12 md6 class>
              <p v-for="(item, i) in infractionLegislation2" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div class="dropdown">
        <span>
          <span class="font-weight-black">Le permis à points</span>
          <v-icon small right color="black">mdi-arrow-down-drop-circle-outline</v-icon>
        </span>
        <div class="dropdown-content">
          <v-layout rowwrap>
            <v-flex xs12 md6 class="pa-2">
              <h3>Le permis à points</h3>
              <p v-for="(item, i) in lesPermisaPoints" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>

            <v-flex xs12 md6 class="pa-2">
              <h3>Documents administratifs</h3>
              <p v-for="(item,i) in documentsAdministratifs" class="ml-3" :key="i">
                <router-link :to="item.route">{{item.title}}</router-link>
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <v-spacer></v-spacer>

      <router-link to="/register" class="blue-grey--text px-3">Customer Register</router-link>
      <router-link
        to="/training-center-register"
        class="blue-grey--text px-3"
      >Training Center Register</router-link>
      <a
        href="https://test-app-85823.web.app/"
        class="green--text text--darken-2 px-3 font-weight-bold"
      >Login</a>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    stagePermis: [
      {
        title: "Stage de récupération de points",
        route: "/stage-recuperation-points"
      },
      {
        title: "Stage de sensibilisation à la sécurité routière",
        route: "/stage-sensibilisation-securite-routiere"
      },
      {
        title: "Stage volontaire de récupération de points",
        route: "/stage-volontaire-stage-de-recuperation-de-points"
      },
      {
        title: "Stage obligatoire en permis probatoire",
        route:
          "/stage-de-recuperation-de-points-obligatoire-en-permis-probatoire"
      },
      {
        title: "Stage obligatoires de sensibilisation à la sécurité routière",
        route:
          "/les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere"
      }
    ],
    infractionLegislation1: [
      {
        title: "Le barème des infractions",
        route: "/le-bareme-des-infractions"
      },
      {
        title: "Les sanctions pour alcool au volant",
        route: "/les-sanctions-pour-alcool-au-volant"
      },
      {
        title: "Les amendes et retraits de point pour les excès de vitesse",
        route: "/les-amendes-et-retraits-de-point-pour-les-exces-de-vitesse"
      },
      {
        title: "Les infractions à la circulation",
        route: "/les-infractions-a-la-circulation"
      },
      {
        title: "Les amendes relatives au stationnement",
        route: "/les-amendes-relatives-au-stationnement"
      },
      {
        title: "Les infractions sur l’autoroute",
        route: "/les-infractions-sur-l-autoroute"
      },
      {
        title: "Permis de conduire et autres documents relatifs au véhicule",
        route: "/permis-de-conduire-et-autres-documents-relatifs-au-vehicule"
      },
      {
        title: "La signalisation du véhicule",
        route: "/la-signalisation-du-vehicule"
      },
      {
        title: "L’équipement du véhicule",
        route: "/l-equipement-du-vehicule"
      }
    ],
    infractionLegislation2: [
      {
        title: "Le retrait de points du permis de conduire",
        route: "/le-retrait-de-points-du-permis-de-conduire"
      },
      {
        title: "L’équipement du véhicule",
        route: "/l-equipement-du-vehicule"
      },
      {
        title: "Le retrait ou la suspension du permis de conduire",
        route: "/le-retrait-ou-la-suspension-du-permis-de-conduire"
      },
      {
        title: "L’annulation du permis de conduire",
        route: "/lannulation-du-permis-de-conduire"
      },
      {
        title: "Permis invalidé ou zéro point",
        route: "/permis-invalide-ou-zero-point"
      },
      {
        title: "La conduite sans permis",
        route: "/la-conduite-sans-permis"
      },
      {
        title: "La contestation d’une infraction",
        route: "/la-contestation-dune-infraction"
      },
      {
        title:
          "ANTAI : un outil pour vous permettre de payer, contester et consulter votre infraction",
        route:
          "/antai-un-outil-pour-vous-permettre-de-payer-contester-et-consulter-votre-infraction"
      }
    ],
    informatUtiles: [
      {
        title: "De quelles façons récupérer des points ?",
        route: "/de-quelles-facons-recuperer-des-points"
      },
      {
        title: "Le programme du stage de récupération de points",
        route: "/le-programme-du-stage-de-recuperation-de-points"
      },
      {
        title: "Comment trouver un stage",
        route: "/comment-trouver-un-stage"
      },
      {
        title: "La garantie de stage",
        route: "/la-garantie-de-stage"
      }
    ],

    lesPermisaPoints: [
      {
        title: "Fonctionnement du permis à points et solde de points",
        route: "/fonctionnement-du-permis-a-points-et-solde-de-points"
      },
      {
        title: "Le permis probatoire",
        route: "/le-permis-probatoire"
      },
      {
        title: "Le code de la route",
        route: "/le-code-de-la-route"
      },
      {
        title:
          "Que faire en cas de perte ou de vol de votre permis de conduire",
        route:
          "/que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire"
      }
    ],
    documentsAdministratifs: [
      {
        title: "La lettre 48 SI : invalidation du permis de conduire",
        route: "/la-lettre-48si-invalidation-du-permis-de-conduire"
      },
      {
        title: "La lettre 48 N : stage obligatoire",
        route: "/la-lettre-48-n-stage-obligatoire"
      },
      {
        title: "Prendre connaissance de son solde de points",
        route: "/prendre-connaissance-de-son-solde-de-points"
      },
      {
        title: "Relevé intégral d’information",
        route: "/releve-integral-dinformation"
      }
    ]
  }),
  created() {}
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 30px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 800px;
  padding: 12px 16px;
  z-index: 10000;
}

.dropdown:hover .dropdown-content {
  display: block;
  
}

ul li {
  list-style-type: none;
  padding-bottom: 50px;
  padding-right: 20px;
}

p {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>
