<template>
  <div id="registerTrainer">
    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarContent }}
      <v-btn text @click="snackbar = false" timeout="3000">Close</v-btn>
    </v-snackbar>

    <v-container>
      <v-card class="mt-10 mb-12">
        <v-card-title
          class="headline primary white--text pa-2"
          primary-title
        >Register Training Center</v-card-title>
        <v-card-text class="my-4 pa-12">
          <v-form v-model="formValid" class="ma-0" ref="form">
            <v-layout row wrap class="justify-space-around">
              <v-flex xs12 md4 class="px-3">
                <v-text-field
                  v-model="trainingCenterName"
                  :rules="nameRules"
                  :counter="30"
                  label="Name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="px-3">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="px-3">
                <v-text-field
                  v-model="phonenumber"
                  :rules="phoneRules"
                  label="Phone Number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  type="password"
                  :rules="passwordRules"
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="repeatPassword"
                  type="password"
                  :rules="passwordRules"
                  label="Repeat Password"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="trainingCenterManager"
                  :rules="nameRules"
                  label="Training Center Manager"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="sirenNumber"
                  :rules="sirenRules"
                  label="Siren Number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 class="px-3">
                <h2 class="my-6">Main Location</h2>
              </v-flex>
              <v-flex xs12 md6 class="px-3">
                <v-text-field v-model="locationName" :rules="rules" label="Name" required></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="certificateNumber"
                  :rules="[v => !!v || 'Certificate Number is required']"
                  label="Certificate number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="locationPerson"
                  :rules="nameRules"
                  label="Person of Contact"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="locationPhoneNumber"
                  :rules="phoneRules"
                  label="Training Center Phone Number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="px-3">
                <v-text-field v-model="street" :rules="rules" label="Street" required></v-text-field>
              </v-flex>
              <v-flex xs12 md4 class="px-3">
                <v-text-field v-model="pincode" :rules="pincodeRules" label="Pincode" required></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="pa-2">
                <v-select
                  v-model="city"
                  :items="cities"
                  item-text="cityName"
                  item-value="id"
                  label="City"
                  persistent-hint
                  return-object
                  single-line
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!formValid"
            color="green darken-3"
            class="white--text px-5"
            :loading="addTrainingLoader"
            @click="registerTrainingCenter"
          >Submit</v-btn>

          <v-btn color="red darken-3" dark @click="reset()" class="px-5">Clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <Footer class="mt-12" />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import moment from "moment";

export default {
  name: "RegisterTrainer",
  components: {
    Footer
  },
  data() {
    return {
      formValid: false,
      email: "",
      phonenumber: "",
      sirenNumber: "",
      trainingCenterName: "",
      trainingCenterManager: "",
      day: "",
      month: "",
      year: "",
      street: "",
      pincode: "",
      city: "",
      certificateNumber: "",
      locationPhoneNumber: "",
      locationName: "",
      locationPerson: "",

      password: "",
      repeatPassword: "",

      cities: [],

      snackbar: false,
      snackbarContent: "",
      snackbarColor: "",

      days: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ],
      months: [
        { item: "Janvier", value: "01" },
        { item: "Février", value: "02" },
        { item: "Mars", value: "03" },
        { item: "Avril", value: "04" },
        { item: "Mai", value: "05" },
        { item: "Juin", value: "06" },
        { item: "Juillet", value: "07" },
        { item: "Aout", value: "08" },
        { item: "Septembre", value: "09" },
        { item: "Octobre", value: "10" },
        { item: "Novembre", value: "11" },
        { item: "Décembre", value: "12" }
      ],

      addTrainingLoader: false,

      gender: [
        { item: "Male", value: "M" },
        { item: "Female", value: "F" }
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phoneRules: [
        v => !!v || "Phone Number is required",
        v => !isNaN(v) || "Phone number must be valid",
        v => (v && v.length === 10) || "Phone Number must be 10 characters"
      ],
      sirenRules: [
        v => !!v || "Siren is required",
        v => !isNaN(v) || "Siren number must be valid",

        v => (v && v.length === 9) || "Siren number must be 9 characters"
      ],
      pincodeRules: [
        v => !!v || "Pincode is required",
        v => !isNaN(v) || "Pincode must be valid",
        v => (v && v.length === 5) || "Pincode must be 5 characters"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => isNaN(v) || "Name must be valid"
      ],
      rules: [v => !!v || "Field is required"],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Pincode must be 6 characters"
      ],
      trainerType: [
        { item: "Psychologue", value: 2 },
        { item: "BAFM", value: 1 }
      ]
    };
  },
  created() {
    this.$http
      .get("/public/findCities")
      .then(res => {
        this.cities = res.data;
      })
      .catch(e => {
        console.log(e.response);
      });
  },
  methods: {
    reset() {
      this.formValid = false;

      this.addTrainerLoader = false;

      this.$refs.form.reset();
    },
    registerTrainingCenter() {
      if (this.password == this.repeatPassword) {
        this.addTrainingLoader = true;
        var data = {
          name: this.trainingCenterName,
          dateOfCreation: moment().format("YYYY-MM-DD"),
          phoneNumber: this.phonenumber,
          email: this.email,
          password: this.password,
          trainingCenterManager: this.trainingCenterManager,
          sirenNumber: this.sirenNumber,
          trainingCenterLocations: [
            {
              certificateNumber: this.certificateNumber,
              name: this.locationName,
              contactNumber: this.locationPhoneNumber,
              personOfContact: this.locationPerson,
              address: this.street,
              pinCode: this.pincode,
              isMain: true,
              city: {
                id: this.city.id
              }
            }
          ]
        };

        //console.log(data);

        this.$http
          .post("/training-center/register", data)
          .then(res => {
            console.log(res);
            this.snackbarContent =
              "Training center added. Please confirm your email by checking your inbox.";
            this.snackbarColor = "success";
            this.snackbar = true;

            this.addTrainingLoader = false;
            this.reset();

            window.open(
              "https://training-center.gardez-votre-permis.fr/login",
              "_blank"
            );
          })
          .catch(e => {
            console.log(e.response);
            this.addTrainingLoader = false;
            this.snackbarContent =
              "Fatal error. Could not create training center.";
            this.snackbarColor = "error";
            this.snackbar = true;
          });
      } else {
        this.snackbarContent = "Passwords dont match";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    }
  },
  computed: {
    years: function() {
      let d = new Date().getFullYear();

      let end = d - 60;
      let start = d - 18;

      let t = [];
      for (let i = start; i >= end; i--) {
        t.push(i);
      }

      return t;
    }
  }
};
</script>