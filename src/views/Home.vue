<template>
  <div>
    <section class="py-12">
      <v-snackbar color="red" v-model="pincodeSnackbar" top right>
        {{snackbarText}}
        <v-btn class="red" text @click="pincodeSnackbar = false">Close</v-btn>
      </v-snackbar>

      <v-layout height="100" row wrap>
        <v-flex class="text-center hidden-sm-and-down" lg4 md12 mt-4 xs12>
          <span>
            <img src="../assets/france.png" width="500px" usemap="#Map" />

            <span
              v-if="showArea"
              class="regionTooltip px-3 pink darken-2"
              style="position: absolute;"
              :style="toolTipTop"
            >{{mapRegionName}}</span>

            <map name="Map" id="Map">
              <area
                v-for="region in regions"
                :key="region.id"
                alt
                title
                :href="'/courses/'+ region.regionName"
                shape="poly"
                @mousemove="mouseOver"
                @mouseleave="showArea = false"
                @mouseenter="setRegion(region.regionFrenchName)"
                :coords="region.coordinates"
              />
            </map>
          </span>
        </v-flex>

        <v-flex xs12 md12 lg8 mx-auto>
          <v-layout row wrap>
            <div style="width: fit-content; margin: auto;" class="my-12">
              <v-text-field
                class="mr-5"
                style="width: 500px; display: inline-block"
                label="Rechercher par code postal"
                required
                v-model="searchBox"
              ></v-text-field>

              <v-btn @click="searchCourse" color="primary" dark>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </div>

            <v-flex xs12 class="text-center mt-12">
              <img class="mt-5" src="../assets/logo.png" style="height: 200px;" />
              <p class="text-xs-center headline mb-3" style="width: 80%; margin: auto">
                <span class="title font-weight-black">Tous les stages de récupération de points*</span>
                <br />
                <span class="title font-weight-light">Trouvez un stage et récupérez 4 points</span>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>

    <v-container style="position: relative;">
      <v-layout row wrap>
        <v-flex :key="card.title" lg3 md4 sm6 v-for="card in cardData" xs12>
          <v-card class="text-xs-center mr-3 pa-2 mb-3" style="min-height: 350px;">
            <v-responsive class="my-2">
              <img :src="card.iconSrc" style="width: 70px; height: auto" />
            </v-responsive>

            <v-card-text class="title my-2 font-weight-regular">{{card.title}}</v-card-text>

            <v-card-text class="body-1">{{card.content}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap class="mt-5">
        <v-flex class="xs12 sm12 md6 lg4 mx-3">
          <div>
            <img src="/driving-license.png" style="width: 90px;" class="mb-4" />

            <h6 class="title mb-4">Recup mes Points</h6>

            <p>
              Recupmespoints est un réseau national de centres agréés de stages de récupération de points.
              Depuis 2005, nous proposons aux internautes un service d'inscription facile, rapide et
              sécurisé aux stages de sensibilisation à la sécurité routière.
              <br />
              <br />En étant inscrit chez recupmespoints.fr, vous bénéficiez systématiquement d'un transfert
              gratuit vers un autre stage en cas de déprogrammation par l'organisateur. Vous pouvez alors
              choisir parmi les stages de récupération de points en ligne et trouver un stage qui vous
              convient le mieux en terme de date et de lieu.
            </p>
          </div>
        </v-flex>

        <v-flex class="hidden-md-and-down lg3 mx-2 text-xs-center">
          <img src="/center-image.png" style="width: 200px; margin-top: 120px" />
        </v-flex>

        <v-flex class="xs12 sm12 md6 lg4 mx-3">
          <div>
            <img src="/steering.png" style="width: 90px;" class="mb-4" />

            <h6 class="title mb-4">Stage de récupération de points</h6>

            <p>
              Stage de récupération de points
              Le stage de récupération de points vous permet de récupérer 4 points sur votre permis de
              conduire.
              <br />
              <br />Recupmespoints.fr vous propose des stages de récupération de points près de chez vous,
              proche
              de votre lieu de travail ou encore sur votre lieu de vacances, à la date de votre choix.
              <br />
              <br />Dans le cas d'un stage volontaire, pour récupérer jusqu'à 4 points, vous devez avoir un
              permis valide et ne pas avoir participé à un stage dans les 12 derniers mois. Le stage peut
              aussi être imposé par le législateur, on parle alors de stage obligatoire.
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row>
        <v-flex class="xs12 mx-auto">
          <carousel
            :per-page="4"
            :mouse-drag="false"
            :paginationSize="6"
            :navigationEnabled="true"
            :paginationEnabled="false"
          >
            <slide v-for="(item,i) in latestCities" :key="i" class="mx-2">
              <v-card class="my-2 pa-1">
                <v-card-title class="title" style="text-transform: capitalize">{{item.city}}</v-card-title>

                <div>
                  <span style="display: inline-block;">
                    <img src="/steering.png" width="30px" class="mx-3" />
                  </span>

                  <p class="mr-4 font-weight-black" style="display: inline-block;">
                    {{formatDate(item.startingDate)}} et {{formatDate(item.endingDate)}}
                    <br />
                    €
                    {{item.price}}
                  </p>

                  <v-btn
                    :to="'/registerCourse/'+ item.id"
                    class="mb-3"
                    color="primary"
                    outline
                    small
                  >
                    <span class="body-1">Voir</span>
                  </v-btn>
                </div>
              </v-card>
            </slide>
          </carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="mt-5 mb-10">
      <v-layout row wrap>
        <v-flex class="xs12 md2">
          <h2 class="headline">
            Villes les plus
            <br />
            <span style="color: #c64880">consultées</span>
          </h2>
        </v-flex>

        <v-flex class="xs12 md10">
          <v-layout row wrap>
            <v-flex class="xs3 md2 lg1 ma-1" v-for="(city,i) in viewedCities" :key="i">
              <a :href="'/courses/'+ city" style="text-transform: capitalize;">{{city}}</a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Footer from "@/components/Footer";

export default {
  name: "home",
  components: {
    Carousel,
    Slide,
    Footer
  },
  data() {
    return {
      cardData: [
        {
          title: "Stage garanti",
          content:
            "Un empêchement ? Vous bénéficiez d'un transfert dans plus de 26 000 organismes de notre réseau de centres agréés.",
          iconSrc: "/stage-garanti.png"
        },
        {
          title: "Service personnalise",
          content:
            "Les conducteurs apprécient notre capacité à trouver des solutions et recommandent le sérieux de notre service.",
          iconSrc: "/service-personnalise.png"
        },
        {
          title: "98.6% de satisfaits",
          content:
            "Nos experts vous accompagnent dans la gestion de votre dossier jusqu'à la récupération de vos points.",
          iconSrc: "/satisfaits.png"
        },
        {
          title: "6 moyens de paiement",
          content:
            "Le paiement par CB, le paiement en espèces (Eficash) dans un bureau de poste, par virement, par chèque et paiement par chèques cadeaux.",
          iconSrc: "/paiement.png"
        }
      ],
      cardData2: [
        {
          title: "Stage garanti",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
          iconSrc: "/stage-garanti.png"
        },
        {
          title: "Service personnalise",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          iconSrc: "/service-personnalise.png"
        },
        {
          title: "98.6% de satisfaits",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          iconSrc: "/satisfaits.png"
        },
        {
          title: "6 moyens de paiement we",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
          iconSrc: "/paiement.png"
        },
        {
          title: "6 moyens de paiement we5",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
          iconSrc: "/paiement.png"
        },
        {
          title: "6 moyens de paiement w6",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
          iconSrc: "/paiement.png"
        }
      ],
      rating: 3,
      viewedCities: [],
      searchBox: "",
      pincodeSnackbar: false,
      snackbarText: "",
      showArea: false,
      toolTipTop: 0,
      toolTipLeft: 0,
      mapRegionName: "",

      regions: [],

      latestCities: [],
      days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
      months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre"
      ]
    };
  },
  created() {
    this.$http
      .get("/public/region/findAll")
      .then(res => {
        console.log(res.data);
        this.regions = res.data;
      })
      .catch(e => {
        console.log(e.response);
      });

    this.$http
      .get("/public/internship/get-latest")
      .then(res => {
        res.data.forEach(trainingCenter => {
          this.viewedCities.push(
            trainingCenter.trainingCenterLocation.city.cityName
          );
        });
      })
      .catch(e => {
        console.log(e.response);
      });
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [day] = date.split("-");
      //return `${day}/${month}/${year}`

      return this.days[this.dayOfWeek(date)] + ` ${day} `;
    },
    dayOfWeek(date) {
      var dt = new Date(date);
      return dt.getDay();
    },
    searchCourse() {
      if (this.searchBox === "") {
        this.snackbarText = "Enter area code or cityname";
        this.pincodeSnackbar = true;
      } else {
        this.$http
          .get("/public/internship/search?data=" + this.searchBox)
          .then(res => {
            if (res.data.numberOfElements > 0) {
              window.location.href = "/courses/" + this.searchBox;
              //console.log(res.data.content);
            } else {
              this.snackbarText = "No course for entered pincode";
              this.pincodeSnackbar = true;
            }
          })
          .catch(e => {
            //console.log(e.response);
            this.snackbarText = "No course for entered pincode";
            this.pincodeSnackbar = true;
          });
      }
    },
    mouseOver(event) {
      this.showArea = true;
      this.toolTipTop =
        "top:" + (event.pageY - 80) + "px; left:" + (event.pageX + 10) + "px";
    },
    setRegion(region) {
      this.mapRegionName = this.capitalize(region);
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
section {
  background-color: #f2f2f4;
  height: 100vh;
  padding-bottom: 100px;
}

.regionTooltip {
  color: white;
}

.area:hover {
  background-color: white;
}
</style>
