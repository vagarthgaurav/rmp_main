<template>
  <div>
    <v-container>
      <v-card class="mt-12" style="width: 800px; margin: auto" v-if="tokenValid">
        <v-card-title class="headline primary white--text pa-2" primary-title>Set new password</v-card-title>

        <v-card-text class="pa-4">
          <v-form ref="resetForm" v-model="passwordFormValid">
            <v-col cols="12">
              <v-row xs12 class="pa-4">
                <v-text-field v-model="password" type="password" label="Password"></v-text-field>
              </v-row>
              <v-row xs12 class="pa-4">
                <v-text-field v-model="repeatPassword" type="password" label="Repeat Password"></v-text-field>
              </v-row>
            </v-col>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!passwordFormValid"
            color="green darken-3"
            class="white--text px-5"
            :loading="resetLoader"
            @click="resetPassword"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>

      <v-alert
        :value="true"
        class="mt-12"
        color="red"
        icon="mdi-alert-octagon-outline"
        dark
        v-else-if="tokenValid=false"
        style="width: 800px; margin: auto"
      >
        <span class="font-weight-black subheading">Invalid Link!</span>
      </v-alert>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Pincode must be 6 characters"
      ],

      passwordFormValid: false,
      resetLoader: false,

      password: "",
      repeatPassword: "",

      tokenValid: true,
      userId: null
    };
  },
  mounted() {
    let token = this.getUrlVars().t;
    console.log("/verify/reset-password/token/" + token);
    this.$http
      .get("/verify/reset-password/token/" + token)
      .then(res => {
        console.log(res.data.id);
      })
      .catch(e => {
        console.log(e.response);
      });
  },
  methods: {
    getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
          vars[key] = value;
        }
      );
      return vars;
    },
    resetPassword() {
      if (this.password == this.repeatPassword) {
        console.log(this.password, this.repeatPassword);

        this.$http
          .post(
            "/reset-password?user-id=" +
              this.userId +
              "&password=" +
              this.password
          )
          .then(res => {})
          .catch(e => {
            console.log(e.response);
          });
      }
    }
  }
};
</script>

<style>
</style>