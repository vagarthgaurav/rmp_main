<template>
  <div>
    <div class="courses my-5 mx-3 px-3">
      <h1>
        Tous les stage en
        <span class="font-italic" style="text-decoration: underline"></span>
      </h1>

      <v-layout row wrap>
        <v-flex class="px-2 mb-3" md3 xs12>
          <v-card class="pa-6">
            <v-card-text>
              <div>
                <span class="title font-weight-black">
                  <v-icon left medium>mdi-filter</v-icon>Filtrez vos résultats
                </span>
              </div>

              <v-form class="ma-0" ref="form">
                <v-layout row wrap>
                  <v-flex class="my-3" xs12>
                    <h4 class="grey--text text--darken-2">PAR VILLES</h4>
                    <v-radio-group style="text-transform: capitalize;" v-model="city">
                      <v-radio color="primary" key="all" label="toutes les villes" value="a"></v-radio>
                      <v-radio
                        color="primary"
                        v-for="(c, i) in cities"
                        :label="c"
                        :value="c"
                        :key="i"
                      ></v-radio>
                    </v-radio-group>
                    <v-divider light></v-divider>
                  </v-flex>

                  <v-flex xs12>
                    <h4 class="grey--text text--darken-2">PAR JOUR</h4>
                    <v-radio-group
                      color="primary"
                      style="text-transform: capitalize;"
                      v-model="day"
                    >
                      <v-radio color="primary" key="10" value="10" label="tous les jours"></v-radio>

                      <v-radio color="primary" key="1" value="1" label="lundi"></v-radio>
                      <v-radio color="primary" key="2" value="2" label="mardi"></v-radio>
                      <v-radio color="primary" key="3" value="3" label="mercredi"></v-radio>
                      <v-radio color="primary" key="4" value="4" label="jeudi"></v-radio>
                      <v-radio color="primary" key="5" value="5" label="vendredi"></v-radio>
                      <v-radio color="primary" key="6" value="6" label="samedi"></v-radio>
                      <v-radio color="primary" key="0" value="0" label="dimanche"></v-radio>
                    </v-radio-group>
                  </v-flex>

                  <v-flex class="text-xs-center" xs12>
                    <v-btn @click="filterCourses" color="primary" class="mx-2">Filter</v-btn>

                    <v-btn @click="resetCourses" color="primary" outlined class="mx-2">Reset</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md9 class="px-2">
          <v-alert
            :value="true"
            class="mb-2"
            color="info"
            icon="mdi-alert-octagon-outline"
            v-if="noClassesAlert"
          >
            <span class="font-weight-black subheading">{{noClassesText}}</span>
          </v-alert>

          <v-container class="text-center" v-if="loader">
            <v-progress-circular :size="70" color="primary" indeterminate></v-progress-circular>
          </v-container>

          <v-card style="border-radius: 5px;" v-if="!loader && !noClassesAlert">
            <v-card-text class="pb-0">
              <v-layout rwo wrap v-for="(course,i) in filteredCourses" class="pt-5" :key="i">
                <v-flex xs6 md2>
                  <div class="title font-weight-medium mb-2">€ {{course.price}}</div>
                </v-flex>

                <v-flex xs12 md3>
                  <div
                    class="subheading font-weight-black mb-2"
                    style="text-transform: capitalize;"
                  >{{course.city}}</div>
                  <div
                    class="mb-1 body-1 font-weight-medium"
                    style="text-transform: capitalize"
                  >{{course.trainingCenterLocation.city.cityName}}</div>
                  <div class="mb-3">{{course.trainingCenterLocation.city.pinCode}}</div>
                </v-flex>

                <v-flex xs6 md4 class="mb-3">
                  <v-layout row wrap>
                    <v-flex xs12 class="mb-2">
                      <span
                        class="subheading font-italic mb-2"
                      >{{formatDate(course.startingDate)}} et {{formatDate(course.endingDate)}}</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-chip
                        v-if="!course.full"
                        small
                        color="green"
                        dark
                        class="px-3 ma-0"
                      >Available</v-chip>
                      <v-chip v-else color="red" small dark class="px-3">Full</v-chip>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex xs12 md2 class="text-xs-right">
                  <v-btn
                    color="blue"
                    dark
                    class="font-weight-black px-5 ma-0"
                    @click="registerCourse(course.id)"
                  >
                    <span style="font-weight: normal">Register</span>
                  </v-btn>
                </v-flex>

                <span style="width: 100%; margin: auto; border: 1px solid #ddd" class="mt-3"></span>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <Footer style="margin-top: 200px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Courses",
  components: {
    Footer
  },
  data() {
    return {
      loader: false,
      noClassesAlert: false,
      noClassesText: "",

      param: this.$route.params.param,
      courses: [],
      filteredCourses: [],
      confirmDialog: false,
      courseId: "",
      cities: [],
      day: "10",
      city: "a",
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
        "Octobre",
        "Novembre",
        "Décembre"
      ],
      days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],

      regions: [
        { name: "Alsace", value: "alsace" },
        { name: "Aquitaine", value: "aquitaine" },
        { name: "Auvergne", value: "auvergne" },
        { name: "Brittany", value: "brittany" },
        { name: "Bourgogne", value: "bourgogne" },
        { name: "Centre-Val de Loire", value: "centre-val-de-loire" },
        { name: "Champagne-Ardenne", value: "champagne-ardenne" },
        { name: "Corse", value: "corse" },
        { name: "Franche-Comté", value: "franche-comte" },
        { name: "Languedoc-Roussillon", value: "languedoc-roussillon" },
        { name: "Limousin", value: "limousin" },
        { name: "Lorraine", value: "lorraine" },
        { name: "Basse Normandie", value: "basse-normandie" },
        { name: "Midi-Pyrénées", value: "midi-pyrenees" },
        { name: "Nord-Pas-de-Calais", value: "nord-pas-de-calais" },
        { name: "Pays de la Loire", value: "pays-de-la-loire" },
        { name: "Picardy", value: "picardy" },
        { name: "Poitou-Charentes", value: "poitou-charentes" },
        {
          name: "Provence-Alpes-Côte d'Azur",
          value: "provence-alpes-cote-dazur"
        },
        { name: "Rhône-Alpes", value: "rhone-alpes" },
        { name: "Haute Normandie", value: "haute-normandie" },
        { name: "Île-de-France", value: "ile-de-france" },
        { name: "Réunion", value: "reunion" },
        { name: "Guiana", value: "guiana" },
        { name: "Martinique", value: "martinique" },
        { name: "Guadelope", value: "guadeloupe" }
      ]
    };
  },
  created() {
    this.loader = true;
    this.$http.get("/public/internship/search?data=" + this.param).then(
      res => {
        console.log(res.data);
        if (res.data.numberOfElements > 0) {
          res.data.content.forEach(c => {
            if (
              this.cities.includes(c.trainingCenterLocation.city.cityName) ==
              false
            ) {
              this.cities.push(c.trainingCenterLocation.city.cityName);
            }
          });
        } else {
          this.loader = false;
          this.noClassesText = "Aucune classe trouvée pour cette région!";
          this.noClassesAlert = true;
        }

        this.courses = res.data.content;
        this.filteredCourses = res.data.content;

        this.loader = false;
      },
      e => {
        console.log(e.response);
        if (e.response.data.status == 404) {
          this.loader = false;
          this.noClassesText = "Aucune classe trouvée pour cette région!";
          this.noClassesAlert = true;
        }
      }
    );
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      let d = date.substring(0, 10);

      const [year, month, day] = d.split("-");

      return (
        this.days[this.dayOfWeek(date)] +
        ` ${day} ` +
        this.months[new Date(date).getMonth()]
      );
    },
    dayOfWeek(date) {
      var dt = new Date(date);

      return dt.getDay();
    },
    registerCourse(id) {
      /*this.$router.push({path: '/registerCourse/' + id});*/

      window.location = "/registerCourse/" + id;
    },
    getRegionName(region) {
      if (isNaN(region)) {
        var result = this.regions.find(obj => {
          return obj.value === region;
        });

        return result.name;
      } else {
        return "";
      }
    },

    filterCourses() {
      this.filteredCourses = [];

      if (this.day !== "10" && this.city !== "a") {
        //If both are selected
        this.courses.forEach(course => {
          if (
            new Date(course.startingDate).getDay() == this.day &&
            course.trainingCenterLocation.city.cityName == this.city
          ) {
            this.filteredCourses.push(course);
          }
        });
      } else if (this.day !== "10" && this.city === "a") {
        // If only days are selected
        this.courses.forEach(course => {
          if (new Date(course.startingDate).getDay() == this.day) {
            this.filteredCourses.push(course);
          }
        });
      } else if (this.day === "10" && this.city !== "a") {
        // If only city is selected

        this.courses.forEach(course => {
          if (course.trainingCenterLocation.city.cityName == this.city) {
            this.filteredCourses.push(course);
          }
        });
      } else {
        this.filteredCourses = this.courses;
      }

      if (this.filteredCourses.length === 0) {
        this.noClassesText = "Aucune classe trouvée pour cette région!";
        this.noClassesAlert = true;
      } else {
        this.noClassesAlert = false;
      }
    },

    resetCourses() {
      this.filteredCourses = this.courses;
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
