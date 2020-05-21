<template>
  <div id="registerTrainer">
    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarContent }}
      <v-btn text @click="snackbar = false" timeout="3000">Close</v-btn>
    </v-snackbar>

    <v-container>
      <v-card class="mt-10 mb-12" style="width: 70%; margin: auto">
        <v-card-title class="headline primary white--text pa-2" primary-title>Register Trainer</v-card-title>
        <v-card-text class="my-4 pa-12">
          <v-form v-model="formValid" class="ma-0" ref="form">
            <v-layout row wrap class="justify-space-around">
              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="20"
                  label="Last name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="phonenumber"
                  :rules="phoneRules"
                  label="Phone Number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-select
                  :items="gender"
                  item-text="item"
                  item-value="value"
                  label="Gender"
                  :rules="[v => !!v || 'Gender is required']"
                  v-model="genderSelect"
                ></v-select>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-select
                  v-model="typeOfTrainer"
                  :items="trainerType"
                  item-text="item"
                  item-value="value"
                  label="Select Type"
                ></v-select>
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
              <v-flex xs12 md12 class="px-3">
                <v-layout row wrap class="justify-space-between">
                  <v-flex xs12 md2 class="text-xs-left">
                    <h3 class="grey--text text--darken-2 pt-4">Date of Birth:</h3>
                  </v-flex>

                  <v-flex xs12 md3 class="px-3">
                    <v-select
                      :items="days"
                      label="Date"
                      :rules="[v => !!v || 'Date is required']"
                      v-model="day"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md3 class="px-3">
                    <v-select
                      :items="months"
                      item-text="item"
                      item-value="value"
                      label="Month"
                      :rules="[v => !!v || 'Month is required']"
                      v-model="month"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md3 class="px-3">
                    <v-select
                      :items="years"
                      label="Year"
                      :rules="[v => !!v || 'Year is required']"
                      v-model="year"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 md4 class="pa-2">
                <v-text-field v-model="street" :rules="rules" label="Street" required></v-text-field>
              </v-flex>
              <v-flex xs12 md4 class="pa-2">
                <v-text-field v-model="pincode" :rules="pincodeRules" label="Pincode" required></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="pa-2">
                <!-- <v-text-field v-model="city" :rules="nameRules" label="City" required></v-text-field> -->
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

              <v-flex xs12 md6 class="px-3">
                <v-text-field
                  v-model="certificateNumber"
                  :rules="[v => !!v || 'Certificate Number is required']"
                  label="Certificate number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 class="px-3">
                <v-menu
                  ref="smenu"
                  v-model="smenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="validityDate"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                  :rules="[v => !!v || 'Select a validity date']"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="validityDateFormatted"
                      label="Validity Date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="validityDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn outlined color="primary" @click="smenu = false">Cancel</v-btn>
                    <v-btn color="primary" @click="validityDateChosen">OK</v-btn>
                  </v-date-picker>
                </v-menu>
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
            :loading="addTrainerLoader"
            @click="registerTrainer"
          >Submit</v-btn>

          <v-btn color="red darken-3" dark @click="reset()" class="px-5">Clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

     class="mt-12" />
  </div>
</template>

<script>


export default {
  name: "RegisterTrainer",
  components: {
    
  },
  data() {
    return {
      formValid: false,

      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      genderSelect: "",
      typeOfTrainer: "",
      day: "",
      month: "",
      year: "",
      street: "",
      pincode: "",
      city: "",
      certificateNumber: "",

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

      addTrainerLoader: false,

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
      ],
      smenu: false,
      validityDate: "",
      validityDateFormatted: ""
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
    formatDate(date) {
      if (!date) return null;

      //const [year, month, day] = date.split("-");
      let d = new Date(date);

      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    },
    reset() {
      this.formValid = false;

      this.addTrainerLoader = false;

      this.$refs.form.reset();
    },
    registerTrainer() {
      if (this.password == this.repeatPassword) {
        this.addTrainerLoader = true;
        var data = {
          firstname: this.firstname,
          lastname: this.lastname,
          gender: this.genderSelect,
          password: this.password,
          address: {
            address: this.street,
            pinCode: this.pincode,
            city: {
              id: this.city.id
            }
          },
          dateOfBirth: this.year + "-" + this.month + "-" + this.day,
          phoneNumber: this.phonenumber,
          email: this.email,
          certificateNumber: this.certificateNumber,
          certificateNumberValidityDate: this.validityDate + "T" + "00:00:00"
        };

        //console.log(data);

        this.$http
          .post("/trainer/register", data)
          .then(res => {
            console.log(res);
            this.snackbarContent =
              "New trainer added. Please confirm your email by checking your inbox.";
            this.snackbarColor = "success";
            this.snackbar = true;

            this.addTrainerLoader = false;
            this.reset();

            window.open(
              "https://trainer.gardez-votre-permis.fr/login",
              "_blank"
            );
          })
          .catch(e => {
            console.log(e.response);
            this.addTrainerLoader = false;
            this.snackbarContent = "Fatal error. Could not create trainer.";
            this.snackbarColor = "error";
            this.snackbar = true;
          });
      } else {
        this.snackbarContent = "Passwords dont match";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },
    validityDateChosen() {
      this.$refs.smenu.save(this.validityDate);
      this.validityDateFormatted = this.formatDate(this.validityDate);
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