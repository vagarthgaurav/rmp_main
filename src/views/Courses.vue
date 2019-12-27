<template>
  <div class="courses my-5 mx-3 px-3">
    <h1>
      All courses in
      <span class="font-italic" style="text-decoration: underline"></span>
    </h1>

    <v-layout row wrap>
      <v-flex class="px-2 mb-3" md3 xs12>
        <v-card>
          <v-card-text>
            <div>
              <span class="body-1 font-weight-black">
                <v-icon left small>filter_list</v-icon>Filtrez vos résultats
              </span>
            </div>

            <v-form class="ma-0" ref="form">
              <v-layout row wrap>
                <v-flex class="my-3" xs12>
                  <h3 class="grey--text text--darken-2">PAR VILLES</h3>
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
                  <h3 class="grey--text text--darken-2">PAR JOUR</h3>
                  <v-radio-group color="primary" style="text-transform: capitalize;" v-model="day">
                    <v-radio color="primary" key="10" value="10" label="tous les jours"></v-radio>
                    <v-radio color="primary" key="0" value="0" label="lundi"></v-radio>
                    <v-radio color="primary" key="1" value="1" label="mardi"></v-radio>
                    <v-radio color="primary" key="2" value="2" label="mercredi"></v-radio>
                    <v-radio color="primary" key="3" value="3" label="jeudi"></v-radio>
                    <v-radio color="primary" key="4" value="4" label="vendredi"></v-radio>
                    <v-radio color="primary" key="5" value="5" label="samedi"></v-radio>
                    <v-radio color="primary" key="6" value="6" label="dimanche"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex class="text-xs-center" xs12>
                  <v-btn @click="filterCourses" color="primary">Filter</v-btn>

                  <v-btn @click="resetCourses">Reset</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md9 class="px-2">
        <v-alert :value="true" class="mb-2" color="info" icon="info" v-if="noClassesAlert">
          <span class="font-weight-black subheading">{{noClassesText}}</span>
        </v-alert>

        <v-container class="text-xs-center" v-if="loader">
          <v-progress-circular :size="70" color="primary" indeterminate></v-progress-circular>
        </v-container>

        <v-card style="border-radius: 5px;" v-if="!loader && !noClassesAlert">
          <v-card-text class="pb-0">
            <v-layout rwo wrap v-for="(course,i) in filteredCourses" class="pt-5" :key="i">
              <v-flex xs6 md2>
                <div class="title font-weight-black mb-2">€ {{course.price}}</div>
              </v-flex>

              <v-flex xs12 md3>
                <div
                  class="subheading font-weight-black mb-2"
                  style="text-transform: capitalize;"
                >{{course.city}}</div>
                <div class="mb-1">{{course.street}}</div>
                <div class="mb-3">{{course.pinCode}}</div>
              </v-flex>

              <v-flex xs6 md4 class="mb-3">
                <v-layout row wrap>
                  <v-flex xs12 class="mb-2">
                    <span
                      class="subheading font-weight-black mb-2"
                    >{{formatDate(course.startingDate)}} et {{formatDate(course.endingDate)}}</span>
                  </v-flex>
                  <v-flex xs12>
                    <v-chip
                      v-if="!course.isFull"
                      small
                      color="green"
                      dark
                      class="px-3 ma-0"
                    >Available</v-chip>
                    <v-chip v-else color="red" dark class="px-3">
                      Not
                      available
                    </v-chip>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 md3 class="text-xs-right">
                <v-btn
                  right
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

    <!--<v-dialog v-model="confirmDialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Confirm Registration?
                </v-card-title>

                <v-card-text class="py-5">
                    <p class="caption">If you are not logged in already. You will be redirected to the login page after
                        which you will be taken to the dashboard.
                        Where you can answer further questions, Upload documents and pay for the course. Once payment is
                        confirmed your registration is finalised. </p>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" dark flat @click="confirmCourse()">
                        I Agree
                    </v-btn>
                    <v-btn color="red" dark flat @click="confirmDialog = false">
                        I Disagree
                    </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>-->
  </div>
</template>

<script>
export default {
  name: "Courses",
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
    this.$http
      .get(
        "https://api.formavisioplus.com/v1/public/internship/search/" +
          this.param
      )
      .then(
        res => {
          if (res.data.numberOfElements > 0) {
            console.log(res.data.content);
          } else {
            this.loader = false;
            this.noClassesText = "Aucune classe trouvée pour cette région!";
            this.noClassesAlert = true;
          }

          this.courses = res.data.content;
          this.filteredCourses = res.data.content;

          // let temp = [];

          // data.body.forEach(function (d) {
          //     temp.push(d.city);
          // });

          //this.cities = temp;

          this.loader = false;
        },
        e => {
          console.log(e.response);
        }
      );
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      console.log(new Date(date).getMonth());
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

      //window.location = "/registerCourse/" + id;
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
      this.filteredCourses = this.courses;

      if (this.day !== "10" && this.city !== "a") {
        this.filteredCourses = this.filteredCourses.filter(course => {
          if (course.startingDay === parseInt(this.day) + 1) {
            return course;
          }
        });

        this.filteredCourses = this.filteredCourses.filter(course =>
          course.city.match(this.city)
        );
      } else if (this.day !== "10" && this.city === "a") {
        this.filteredCourses = this.filteredCourses.filter(course => {
          if (course.startingDay === parseInt(this.day) + 1) {
            return course;
          }
        });
      } else if (this.day === "10" && this.city !== "a") {
        this.filteredCourses = this.filteredCourses.filter(course =>
          course.city.match(this.city)
        );
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
    },

    filterByCity() {
      this.filteredCourses = this.filteredCourses.filter(course =>
        course.city.match(this.city)
      );
    },
    filterByDay() {}
  },
  computed: {}
};
</script>

<style scoped>
</style>
