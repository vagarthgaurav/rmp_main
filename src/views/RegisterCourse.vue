<template>
  <div id="RegisterCourse">
    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarContent }}
      <v-btn text @click="snackbar = false" timeout="3000">Close</v-btn>
    </v-snackbar>

    <v-container class="mt-6" v-if="(courseExists == false) || (alreadyRegistered == false)">
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="3" class="px-2 my-3">
          <v-card class="text-center">
            <v-card-title class="text-center">
              <p style="width: max-content; margin: auto">
                <img src="../assets/agrement.png" />
              </p>
              <p class="body-1">
                Stage agréé par la
                préfecture de Saône-et-Loire sous le numéro
                R1607100020
              </p>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <h1 class="black--text">€ {{this.courseDetails.price}}</h1>
              <p class="caption mt-2">Prix TTC</p>
              <span>
                <v-chip small class="green" dark>Places disponibles</v-chip>
              </span>

              <v-row class="text-left mt-5">
                <v-col cols="12" sm="2">
                  <v-icon left>mdi-map-marker</v-icon>
                </v-col>
                <v-col cols="12" sm="10">
                  <p style="font-size: 12pt; display: inline">
                    <span>
                      {{this.courseDetails.trainingCenterLocation.address}}
                      <br />
                      <span>{{this.courseDetails.trainingCenterLocation.city.cityName}}</span>
                      <br />
                      <span>{{this.courseDetails.trainingCenterLocation.city.pinCode}}</span>
                    </span>
                  </p>
                </v-col>

                <v-col cols="12" sm="2">
                  <v-icon left>mdi-calendar-month</v-icon>
                </v-col>
                <v-col cols="12" sm="10">
                  <p style="font-size: 12pt; display: inline">
                    <span>{{this.prettyFormatDate(this.courseDetails.startingDate)}}</span>
                    et
                    <span>{{this.prettyFormatDate(this.courseDetails.endingDate)}}</span>
                  </p>
                </v-col>

                <v-col cols="12" sm="2">
                  <v-icon left>mdi-calendar-clock</v-icon>
                </v-col>
                <v-col cols="12" sm="10">
                  <p style="font-size: 12pt; display: inline">
                    <span>{{this.prettyFormatTime(this.courseDetails.startingDate)}}</span>
                    à
                    <span>{{this.prettyFormatTime(this.courseDetails.endingDate)}}</span>
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="9" class="px-2 my-3">
          <v-stepper v-model="stage">
            <v-stepper-header>
              <v-stepper-step :complete="stage > 1" step="1" editable>Login</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="stage > 2" step="2" :editable="isLoggedIn">Choose case</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="stage > 3" step="3" :editable="isLoggedIn">Case details</v-stepper-step>

              <v-divider></v-divider>

              <!-- <v-stepper-step :complete="stage > 4" step="4" :editable="isLoggedIn">Driving License</v-stepper-step> -->

              <v-divider></v-divider>

              <v-stepper-step :complete="stage > 4" step="4" :editable="isLoggedIn">Paiment</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items style="max-height: 70vh; height: 70vh; overflow-y:auto">
              <!-- ---------------------------------- Login ---------------------------------------------------- -->
              <v-stepper-content step="1">
                <div v-if="!isLoggedIn">
                  <v-card class="mx-auto mt-10 grey lighten-2" max-width="600">
                    <v-card-text>
                      <v-form v-model="loginForm" ref="loginRef">
                        <v-row class="pa-6">
                          <v-col cols="12" sm="12">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-text-field
                              v-model="password"
                              :rules="passwordRules"
                              label="Password"
                              required
                              type="password"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-btn color="primary" @click="login()" :disabled="!loginForm">Login</v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                  </v-card>

                  <div class="text-center mt-6">
                    <p class="font-weight-bold">OR</p>
                    <v-card class="mx-auto mt-5 pa-3 grey lighten-2" max-width="600">
                      <v-btn color="primary" @click="registerDialog = true">Register</v-btn>
                    </v-card>
                  </div>
                </div>

                <v-card v-else>
                  <v-card-text>
                    <v-alert
                      type="info"
                      border="bottom"
                      color="pink darken-1"
                    >You are already logged in.</v-alert>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn @click="stage = 2" color="primary">Continue</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <!-- ---------------------------------- Choose Case ---------------------------------------------- -->
              <v-stepper-content step="2">
                <v-card>
                  <v-radio-group class="mx-4" v-model="typeOfInternship" @change="clearForms">
                    <v-radio
                      color="primary"
                      label="Stage volontaire de récupération de points, cas n°1"
                      value="0"
                    ></v-radio>
                    <v-radio
                      color="primary"
                      label="Stage obligatoire aprés réception de la lettre recommandée 48N (permis probatoire), cas n°2"
                      value="1"
                    ></v-radio>
                    <v-radio
                      color="primary"
                      label="Stage obligatoire d'alternative aux poursuites ou de composition pénale, cas n°3"
                      value="2"
                    ></v-radio>
                    <v-radio
                      color="primary"
                      label="Stage obligatoire dans le cadre d'une peine complémentaire, cas n°4"
                      value="3"
                    ></v-radio>
                  </v-radio-group>

                  <v-card-actions>
                    <v-btn outlined color="primary" @click="stage = 1">Back</v-btn>
                    <v-btn
                      color="primary"
                      @click="caseDetails = parseInt(typeOfInternship);stage = 3;"
                    >Continue</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <!-- ---------------------------------- Case details---------------------------------------------- -->
              <v-stepper-content step="3">
                <v-card class="mb-5 elevation-0">
                  <v-toolbar flat color="primary" dark>
                    <v-toolbar-title>Select case</v-toolbar-title>
                  </v-toolbar>
                  <v-tabs vertical v-model="caseDetails">
                    <v-tab :disabled="caseDetails != 0">cas n°1</v-tab>
                    <v-tab :disabled="caseDetails != 1">cas n°2</v-tab>
                    <v-tab :disabled="caseDetails != 2">cas n°3</v-tab>
                    <v-tab :disabled="caseDetails != 3">cas n°4</v-tab>

                    <v-tab-item style="height: 500px">
                      <v-card flat class="pa-5">
                        <v-card-text>
                          <h3>Stage volontaire de récupération de points, cas n°1</h3>

                          <div class="pa-4 case1">
                            <v-form v-model="case1FormValid" ref="formCase1">
                              <v-layout row>
                                <v-flex xs2>
                                  <span class="subheading">Je déclare qu'il me reste</span>
                                </v-flex>
                                <v-flex xs2>
                                  <v-select
                                    class="ml-0 mr-4 mt-0 pa-0"
                                    v-model="remainingPoints"
                                    :items="points"
                                  ></v-select>
                                </v-flex>
                                <v-flex xs8>
                                  <span
                                    class="subheading"
                                  >points sur le Fichier National du Permis de Conduire.</span>
                                </v-flex>
                              </v-layout>

                              <div>
                                <v-checkbox
                                  v-model="pointsDeclaration"
                                  color="primary"
                                  label="Je ne connais pas mon solde exact mais je suis en permis à 12 points et suis certain
                                        qu'il me reste actuellement entre 1 et 8 points sur le Fichier National du Permis de Conduire."
                                ></v-checkbox>
                              </div>
                            </v-form>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item style="height: 500px">
                      <v-card flat class="pa-5">
                        <v-card-text>
                          <h3>
                            Stage obligatoire aprés réception de la lettre recommandée 48N (permis probatoire), cas
                            n°2
                          </h3>

                          <div class="pa-4 case2">
                            <v-container>
                              <v-form v-model="case2FormValid" ref="formCase2">
                                <v-layout row wrap>
                                  <!--Place Of Infraction-->
                                  <v-flex class="px-3" xs12>
                                    <v-text-field
                                      :rules="nameRules"
                                      label="Lieu de L'infraction *"
                                      required
                                      v-model="placeOfInfraction"
                                    ></v-text-field>
                                  </v-flex>

                                  <!--Date of Infraction-->
                                  <v-flex xs12 class="px-3">
                                    <v-layout class="justify-space-between" row wrap>
                                      <v-flex class="px-3" md4 xs12>
                                        <v-select
                                          :items="days"
                                          :rules="[v => !!v || 'Date is required']"
                                          label="jour *"
                                          v-model="dayOfInfraction"
                                        ></v-select>
                                      </v-flex>
                                      <v-flex class="px-3" md4 xs12>
                                        <v-select
                                          :items="months"
                                          :rules="[v => !!v || 'Month is required']"
                                          item-text="item"
                                          item-value="value"
                                          label="mois *"
                                          v-model="monthOfInfraction"
                                        ></v-select>
                                      </v-flex>
                                      <v-flex class="px-3" md4 xs12>
                                        <v-select
                                          :items="years"
                                          :rules="[v => !!v || 'Year is required']"
                                          label="année *"
                                          v-model="yearOfInfraction"
                                        ></v-select>
                                      </v-flex>
                                    </v-layout>
                                  </v-flex>

                                  <!--Time Of Infraction-->
                                  <v-flex class="px-3" md4 xs12>
                                    <v-text-field
                                      :rules="[v => !!v || 'Time is required']"
                                      label="Heure (00:00)*"
                                      v-mask="mask"
                                      required
                                      v-model="timeOfInfraction"
                                    ></v-text-field>
                                  </v-flex>

                                  <!--Reason Of Infraction-->
                                  <v-flex class="px-3" md4 xs12>
                                    <v-select
                                      :items="reasons"
                                      :rules="[v => !!v || 'Reason is required']"
                                      label="Motif de L'infraction *"
                                      v-model="reasonOfInfraction"
                                    ></v-select>
                                  </v-flex>

                                  <!--Points Of Infraction-->
                                  <v-flex class="px-3" md4 xs12>
                                    <v-select
                                      :items="points"
                                      :rules="[v => !!v || 'Points is required']"
                                      label="Solde de points *"
                                      v-model="pointsOfInfraction"
                                    ></v-select>
                                  </v-flex>
                                </v-layout>
                              </v-form>
                            </v-container>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item style="height: 500px">
                      <v-card flat class="pa-5">
                        <v-card-text>
                          <h3>Stage obligatoire d'alternative aux poursuites ou de composition pénale, cas n°3</h3>

                          <div class="case3 pa-4">
                            <v-layout row class="justify-space-around">
                              <v-flex xs8>
                                <v-alert :value="true" type="warning">
                                  Vous avez choisi une inscription au cas de stage n°3.
                                  Tous les stages n'accueillant pas ce cas, pour vous inscrire, veuillez contacter
                                  l'un de nos conseillers au 0 891 690 444.
                                </v-alert>
                              </v-flex>
                            </v-layout>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item style="height: 500px">
                      <v-card flat>
                        <v-card-text>
                          <h3>Stage obligatoire dans le cadre d'une peine complémentaire, cas n°4</h3>

                          <div class="pa-4">
                            <v-checkbox
                              color="primary"
                              label="Je souhaite faire un stage dans le cadre d'une peine complémentaire."
                              readonly
                              v-model="case4checkbox"
                            ></v-checkbox>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>

                <v-card-actions>
                  <v-btn outlined color="primary" @click="stage = 2">Back</v-btn>
                  <v-btn
                    color="primary"
                    @click="caseSelected"
                    :disabled="(parseInt(typeOfInternship) == 2)"
                  >Continue</v-btn>
                </v-card-actions>
              </v-stepper-content>
              <!-- ---------------------------------- Driving License ------------------------------------------ -->
              <!-- <v-stepper-content step="4">
                <v-card class="mb-12 elevation-0">
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <h3 v-if="licenseExists" class="mb-6">You already have a saved license.</h3>
                      </v-col>
                      <v-col cols="12" sm="6" class="text-right">
                        <v-btn
                          v-if="!licenseExists"
                          color="primary"
                          @click="addLicenseDialog = true"
                          :ripple="false"
                        >
                          <v-icon left>mdi-smart-card-outline</v-icon>new License
                        </v-btn>
                      </v-col>
                    </v-row>

                    <v-item-group v-model="selectedLicense" mandatory>
                      <v-container v-if="licenseExists">
                        <v-row>
                          <v-col cols="12" md="6">
                            <v-item v-slot:default="{ active, toggle }" :value="savedLicense">
                              <v-card
                                :color="active ? 'primary' : ''"
                                class="pa-4"
                                dark
                                style="min-height: 320px;"
                                @click="toggle"
                              >
                                <v-scroll-y-transition>
                                  <v-row>
                                    <v-col cols="12" sm="6">
                                      <p>Number</p>
                                      <p>Type</p>
                                      <p>Delivery Place</p>
                                      <p>Delivery Date</p>
                                      <p>Oldest Date</p>
                                      <p v-if="savedLicense.type == 'OLD'">Special Element 1</p>
                                      <p v-if="savedLicense.type == 'OLD'">Special Element 2</p>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                      <p>{{savedLicense.number}}</p>
                                      <p>{{savedLicense.type}}</p>
                                      <p>{{savedLicense.deliveryPlace}}</p>
                                      <p>{{formatDate(savedLicense.deliveryOn)}}</p>
                                      <p>{{formatDate(savedLicense.oldestDate)}}</p>
                                      <p
                                        v-if="savedLicense.type == 'OLD'"
                                      >{{savedLicense.specialElementOne}}</p>
                                      <p
                                        v-if="savedLicense.type == 'OLD'"
                                      >{{savedLicense.specialElementTwo}}</p>
                                    </v-col>
                                  </v-row>
                                </v-scroll-y-transition>
                              </v-card>
                            </v-item>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-item-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn outlined color="primary" @click="stage = 3">Back</v-btn>
                    <v-btn
                      color="primary"
                      @click="drivingLicenseSelected"
                      :disabled="!(!!selectedLicense)"
                    >Continue</v-btn>
                  </v-card-actions>
                </v-card>

                <v-dialog v-model="addLicenseDialog" width="fit-content">
                  <v-card>
                    <v-card-title class="headline primary white--text pa-2">Add new License</v-card-title>

                    <v-card-text>
                      <v-layout row wrap>
                        <v-flex sm12 md12 lg6>
                          <div class="pa-2">
                            <span
                              style="display: inline-block;"
                              class="mr-3 font-weight-black subheading"
                            >Ancien format</span>
                            <v-switch
                              style="display: inline-block;"
                              color="primary"
                              v-model="licenseFormat"
                            ></v-switch>
                            <span
                              style="display: inline-block;"
                              class="mr-3 font-weight-black subheading"
                            >Nouveau Format</span>
                          </div>

                          <img
                            class="mt-4 text-center"
                            v-if="!licenseFormat"
                            src="../assets/ancien-permis-l.jpg"
                            style="width: 600px"
                          />

                          <img
                            class="mt-4 text-center"
                            v-if="licenseFormat"
                            src="../assets/nouveau-permis-l.jpg"
                            style="width: 600px"
                          />
                        </v-flex>

                        <v-flex sm6 md6 class="pa-3">
                          <v-form v-model="licenseFormValid">
                            <v-container>
                              <v-layout row wrap>
                                <v-flex class="px-3" xs12>
                                  <h3>
                                    <span
                                      class="primary white--text"
                                      style="padding: 4px 10px 4px 10px; border-radius:50%;"
                                    >1</span>
                                    Lieu de délivrance * :
                                  </h3>
                                  <v-text-field
                                    :counter="20"
                                    :rules="[v => !!v || 'Place of issue is required']"
                                    label="Lieu de délivrance *"
                                    required
                                    v-model="placeOfIssue"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <h3>
                                    <span
                                      class="primary white--text"
                                      style="padding: 4px 10px 4px 10px; border-radius:50%;"
                                    >2</span>
                                    Date de délivrance * :
                                  </h3>
                                  <v-layout class="justify-space-between" row wrap>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="days"
                                        :rules="[v => !!v || 'Date is required']"
                                        label="jour *"
                                        v-model="dayOfIssue"
                                      ></v-select>
                                    </v-flex>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="months"
                                        :rules="[v => !!v || 'Month is required']"
                                        item-text="item"
                                        item-value="value"
                                        label="mois *"
                                        v-model="monthOfIssue"
                                      ></v-select>
                                    </v-flex>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="years"
                                        :rules="[v => !!v || 'Year is required']"
                                        label="année *"
                                        v-model="yearOfIssue"
                                      ></v-select>
                                    </v-flex>
                                  </v-layout>
                                </v-flex>

                                <v-flex md12 xs12>
                                  <h3>
                                    <span
                                      class="primary white--text"
                                      style="padding: 4px 10px 4px 10px; border-radius:50%;"
                                    >3</span>
                                    Numéro de permis * :
                                  </h3>
                                  <v-text-field
                                    :rules="[v => !!v || 'License Number is required']"
                                    label="Numéro de permis *"
                                    v-model="licenseNumber"
                                  ></v-text-field>
                                </v-flex>

                                <v-flex xs12>
                                  <h3>
                                    <span
                                      class="primary white--text"
                                      style="padding: 4px 10px 4px 10px; border-radius:50%;"
                                    >4</span>
                                    Date d'obtention * :
                                  </h3>
                                  <v-layout class="justify-space-between" row wrap>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="days"
                                        :rules="[v => !!v || 'Date is required']"
                                        label="jour *"
                                        v-model="dayOfExpiry"
                                      ></v-select>
                                    </v-flex>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="months"
                                        :rules="[v => !!v || 'Month is required']"
                                        item-text="item"
                                        item-value="value"
                                        label="mois *"
                                        v-model="monthOfExpiry"
                                      ></v-select>
                                    </v-flex>
                                    <v-flex class="px-3" md4 xs12>
                                      <v-select
                                        :items="years"
                                        :rules="[v => !!v || 'Year is required']"
                                        label="année *"
                                        v-model="yearOfExpiry"
                                      ></v-select>
                                    </v-flex>
                                  </v-layout>
                                </v-flex>

                                <v-flex xs12 v-if="!licenseFormat">
                                  <h4>Renseignez ces deux champs s'ils apparaissent sur votre permis :</h4>
                                  <v-layout row wrap>
                                    <v-flex class="px-3" md6 xs12>
                                      <v-text-field v-model="specialElementOne"></v-text-field>
                                    </v-flex>
                                    <v-flex class="px-3" md6 xs12>
                                      <v-text-field v-model="specialElementTwo"></v-text-field>
                                    </v-flex>
                                  </v-layout>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-form>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        :disabled="!licenseFormValid"
                        color="green darken-3"
                        class="white--text px-5"
                        :loading="addLicenseLoader"
                        @click="addLicense"
                      >Submit</v-btn>

                      <v-btn
                        color="red darken-3"
                        class="white--text px-5"
                        @click="closeLicenseDialog"
                      >cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-stepper-content> -->
              <!-- ---------------------------------- Payment -------------------------------------------------- -->
              <v-stepper-content step="4">
                <v-row>
                  <v-col cols="12">
                    <v-card class="mb-12 mt-6 card_form elevation-3 pa-5" color height="200px">
                      <v-card-text class="mb-6">
                        <div id="card-element" class="mt-4">
                          <!-- Elements will create input elements here -->
                        </div>

                        <!-- We'll put the error messages in this element -->
                        <div id="card-errors" role="alert"></div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn outlined color="primary" @click="stage = 4">Back</v-btn>
                        <v-btn color="primary" @click="submitPayment" :loading="paymentLoader">Pay</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-card></v-card>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-card></v-card>
                  </v-col>
                </v-row>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="paymentsLoaderDialog" persistent width="fit-content">
      <div class="text-center white pa-3" style="overflow: hidden">
        <v-progress-circular class="ma-5" :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
        <p>Votre paiement est en cours de traitement. Ne fermez pas pendant le chargement ...</p>
      </div>
    </v-dialog>

    <v-container v-if=" courseExists == false" class="mt-12">
      <v-alert class="mx-auto" width="60%" type="error" border="bottom">Course Doesn't exist.</v-alert>
    </v-container>

    <v-container v-if="alreadyRegistered" class="mt-12">
      <v-alert
        class="mx-auto"
        width="60%"
        type="error"
        border="bottom"
      >You are already registered to the course.</v-alert>
    </v-container>

    <v-dialog v-model="registerDialog">
      <v-card>
        <v-card-title class="headline primary white--text pa-2" primary-title>Register New Account</v-card-title>
        <v-card-text class="my-4 pa-3">
          <v-form v-model="formValid" class="ma-0" ref="form">
            <v-layout row wrap class="justify-space-around">
              <v-flex xs12 md5>
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="20"
                  label="Last name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md5>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-flex>

              <v-flex xs12 md5>
                <v-text-field
                  v-model="phonenumber"
                  :rules="phoneRules"
                  label="Phone Number"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md5>
                <v-select
                  :items="gender"
                  item-text="item"
                  item-value="value"
                  label="Gender"
                  :rules="[v => !!v || 'Gender is required']"
                  v-model="genderSelect"
                ></v-select>
              </v-flex>

              <v-flex xs12 md5>
                <v-layout row wrap class="justify-space-between">
                  <v-flex xs12 md4>
                    <v-select
                      :items="days"
                      label="Date"
                      :rules="[v => !!v || 'Date is required']"
                      v-model="day"
                      class="mx-2"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-select
                      :items="months"
                      item-text="item"
                      item-value="value"
                      label="Month"
                      :rules="[v => !!v || 'Month is required']"
                      v-model="month"
                      class="mx-2"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-select
                      :items="years"
                      label="Year"
                      :rules="[v => !!v || 'Year is required']"
                      v-model="year"
                      class="mx-2"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 md5>
                <v-text-field
                  type="password"
                  :rules="passwordRules"
                  v-model="registerPassword"
                  label="Password"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md5>
                <v-text-field
                  v-model="registerRepeatPassword"
                  type="password"
                  :rules="passwordRules"
                  label="Repeat Password"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="pa-2 px-12">
                <v-text-field v-model="street" :rules="rules" label="Street" required class="mx-5"></v-text-field>
              </v-flex>
              <v-flex xs12 md4 class="pa-2 px-12">
                <v-text-field
                  v-model="pincode"
                  :rules="pincodeRules"
                  label="Pincode"
                  required
                  class="mx-5"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md4 class="pa-2 px-12">
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
                  :rules="rules"
                  class="mx-5"
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
            :loading="addStudentLoader"
            @click="registerStudent"
          >Submit</v-btn>

          <v-btn color="red darken-3" dark @click="reset()" class="px-5">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import { mask } from "vue-the-mask";
//import Footer from "@/components/Footer";

var stripe = Stripe("pk_test_xwPPg4R1nsYgYE1gfdCkNDv000C9CmM8qd"),
  elements = stripe.elements();

var style = {
  base: {
    color: "#303238",
    fontSize: "16px",
    fontFamily: '"Open Sans", sans-serif',
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#CFD7DF"
    }
  },
  invalid: {
    color: "#e5424d",
    ":focus": {
      color: "#303238"
    }
  }
};
let card = elements.create("card", { style: style });

export default {
  name: "RegisterCourse",
  directives: {
    mask
  },
  components: {
    //Footer
  },
  data() {
    return {
      courseId: this.$route.params.id,
      alreadyRegistered: false,

      courseDetails: [],

      courseExists: false,

      paymentLoader: false,

      registerDialog: false,
      formValid: false,
      addStudentLoader: false,
      firstname: "",
      lastname: "",
      registerEmail: "",
      phonenumber: "",
      genderSelect: "",
      typeOfTrainer: "",
      day: "",
      month: "",
      year: "",
      street: "",
      pincode: "",
      city: "",
      registerPassword: "",
      registerRepeatPassword: "",

      cities: [],
      gender: [
        { item: "Male", value: "M" },
        { item: "Female", value: "F" }
      ],
      token: "",

      mask: "##:##",
      isLoggedIn: false,
      stage: 1,
      stage2Disable: true,
      case4checkbox: true,

      loginForm: false,
      licenseFormValid: false,
      case2FormValid: false,
      case1FormValid: false,

      email: "",
      password: "",

      declaration: [],

      typeOfInternship: "",
      caseDetails: "",

      savedLicense: [],
      licenseExists: false,
      licenseFormat: true,
      licenseCardBorder: "",
      selectedLicense: "",
      addLicenseLoader: false,

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
      months2: [
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
      shortDays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      reasons: [
        "Alcool",
        "Stupéfiant",
        "Vitesse",
        "Feu rouge",
        "Stop",
        "Sens interdit",
        "Refus de priorité",
        "Téléphone",
        "Ligne blanche",
        "Ceinture de sécurité",
        "Autre"
      ],
      remainingPoints: null,
      pointsDeclaration: false,

      placeOfInfraction: "",
      dayOfInfraction: "",
      monthOfInfraction: "",
      yearOfInfraction: "",
      timeOfInfraction: "",
      reasonOfInfraction: "",
      pointsOfInfraction: null,

      placeOfIssue: "",
      dayOfIssue: "",
      monthOfIssue: "",
      yearOfIssue: "",
      dayOfExpiry: "",
      monthOfExpiry: "",
      yearOfExpiry: "",
      licenseNumber: "",
      specialElementOne: "",
      specialElementTwo: "",

      snackbar: false,
      snackbarContent: "",
      snackbarColor: "error",

      addLicenseDialog: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 10 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be more than 6 characters."
      ],
      pincodeRules: [
        v => !!v || "Pincode is required",
        v => !isNaN(v) || "Pincode must be valid",
        v => (v && v.length === 5) || "Pincode must be 5 characters"
      ],
      rules: [v => !!v || "Field is required"],
      phoneRules: [
        v => !!v || "Phone Number is required",
        v => !isNaN(v) || "Phone number must be valid",
        v => (v && v.length === 10) || "Phone Number must be 10 characters"
      ],

      paymentsLoaderDialog: false
    };
  },
  updated() {
    this.isLoggedIn = this.$store.getters.isLoggedIn;

    card.mount("#card-element");
  },
  created() {
    this.isLoggedIn = this.$store.getters.isLoggedIn;

    if (this.isLoggedIn == true) {
      this.stage = 2;

      // if (this.$store.getters.getLicense[0]) {
      //   this.savedLicense.push(this.$store.getters.getLicense[0]);
      // } else {
      //   this.savedLicense = false;
      // }

      this.token = this.$store.state.token;

      this.$http
        .get(
          "/customer/" +
            this.$store.getters.getUser.id +
            "/check-if-registered/internship/" +
            this.courseId,
          {
            headers: { Authorization: "Bearer " + this.token }
          }
        )
        .then(res => {})
        .catch(e => {
          if (e.response.status == 409) {
            this.alreadyRegistered = true;
          }
        });

      this.$http
        .get("/customer/" + this.user.id + "/driving-licence/findAll", {
          headers: { Authorization: "Bearer " + this.token }
        })
        .then(res => {
          if (res.data.length != 0) {
            //this.$store.commit("saveLicense", res.data);
            this.licenseExists = true;
            this.savedLicense = res.data[0];
          }
        })
        .catch(e => {
          console.log(e.response);
        });
    }

    this.$http
      .get("/public/findCities")
      .then(res => {
        this.cities = res.data;
      })
      .catch(e => {
        console.log(e.response);
      });

    this.$http
      .get("/public/internship/" + this.courseId + "/findById")
      .then(res => {
        this.courseExists = true;
        this.courseDetails = res.data;
      })
      .catch(e => {
        if (e.response.status == 404) {
          this.courseExists = false;
        }
      });
  },
  methods: {
    clearForms() {},
    reset() {
      this.formValid = false;

      this.addStudentLoader = false;

      this.registerDialog = false;
      this.$refs.form.reset();
    },
    prettyFormatDate(date) {
      if (!date) return null;

      let d = date.substring(0, 10);

      const [year, month, day] = d.split("-");

      return (
        this.shortDays[this.dayOfWeek(date)] +
        ` ${day} ` +
        this.months2[new Date(date).getMonth()]
      );
    },
    prettyFormatTime(date) {
      if (!date) return null;

      let d = date.substring(11, 16);

      return d;
    },
    formatDate(date) {
      if (!date) return null;
      let d = date.substring(0, 10);

      const [year, month, day] = d.split("-");

      return day + "/" + month + "/" + year;
    },
    dayOfWeek(date) {
      var dt = new Date(date);

      return dt.getDay();
    },
    login() {
      this.$http
        .post("/customer/authenticate", {
          username: this.email,
          password: this.password
        })
        .then(res => {
          //console.log(res);

          let user = res.data.user;
          let Uid = user.id;
          let token = res.data.token;
          this.token = res.data.token;
          this.$cookies.set("user_token", token, 60 * 60 * 1);

          this.$store.commit("saveUser", { user });

          this.$http
            .get(
              "/customer/" +
                this.$store.getters.getUser.id +
                "/check-if-registered/internship/" +
                this.courseId,
              {
                headers: { Authorization: "Bearer " + this.token }
              }
            )
            .then(res => {})
            .catch(e => {
              if (e.response.status == 409) {
                this.alreadyRegistered = true;
              }
            });

          location.reload();
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.status == 404) {
            // this.snackbar = true;
            // this.snackbarContent = "Email is not registered.";

            this.registerDialog = true;
          } else if (e.response.status == 401) {
            this.snackbar = true;
            this.snackbarColor = "error";
            this.snackbarContent =
              "Email/Password combination is incorrect.  Please confirm your email if you have not already done so.";
          }
        });
    },
    caseSelected() {
      if (this.typeOfInternship == 0) {
        this.declaration = {
          remainingPoints: this.remainingPoints,
          declarationPoint: this.pointsDeclaration,
          reason: "",
          infractionDateTime: "",
          infractionPlace: ""
        };
      } else if (this.typeOfInternship == 1) {
        this.declaration = {
          remainingPoints: this.pointsOfInfraction,
          declarationPoint: "",
          reason: this.reasonOfInfraction,
          infractionDateTime:
            this.yearOfInfraction +
            "-" +
            this.monthOfInfraction +
            "-" +
            this.dayOfInfraction +
            "T" +
            this.timeOfInfraction,
          infractionPlace: this.placeOfInfraction
        };
      } else if (this.typeOfInternship == 3) {
        this.declaration = {
          remainingPoints: "",
          declarationPoint: "",
          reason: "",
          infractionDateTime: "",
          infractionPlace: ""
        };
      }

      this.stage = 4;
    },
    addLicense() {
      let data = {
        deliveryOn:
          this.yearOfIssue + "-" + this.monthOfIssue + "-" + this.dayOfIssue,
        deliveryPlace: this.placeOfIssue,
        number: this.licenseNumber,
        type: this.licenseFormat ? "NEW" : "OLD",
        specialElementOne: this.specialElementOne,
        specialElementTwo: this.specialElementTwo,
        oldestDate:
          this.yearOfExpiry + "-" + this.monthOfExpiry + "-" + this.dayOfExpiry
      };

      let Uid = this.$store.getters.getUser.id;

      let token = this.token;

      this.$http
        .post("/customer/" + Uid + "/driving-licence/save", data, {
          headers: { Authorization: "Bearer " + this.token }
        })
        .then(res => {
          console.log(res);

          this.savedLicense = res.data;
          this.licenseExists = true;
          this.addLicenseDialog = false;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    closeLicenseDialog() {
      this.addLicenseDialog = false;
    },
    drivingLicenseSelected() {
      this.stage = 5;
    },
    submitPayment() {
      this.paymentLoader = true;
      this.paymentsLoaderDialog = true;
      let Uid = this.$store.getters.getUser.id;

      let price_in_cents = this.courseDetails.price;
      let user_email = this.$store.getters.getUser.email;

      let data = {
        currency: "eur",
        amount: price_in_cents,
        receiptEmail: user_email,
        description:
          "Internship registration: [User Name: " +
          this.$store.getters.getUser.firstname +
          " " +
          this.$store.getters.getUser.lastname +
          "]; [Course city: " +
          this.capitalize(
            this.courseDetails.trainingCenterLocation.city.cityName
          ) +
          "]"
      };

      let this_vue = this;

      this.$http
        .post("/customer/" + Uid + "/create-payment-intent", data, {
          headers: { Authorization: "Bearer " + this.token }
        })
        .then(res => {
          stripe
            .confirmCardPayment(res.data.client_secret, {
              payment_method: {
                card: card
              },
              receipt_email: user_email
            })
            .then(function(result) {
              if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                this.paymentLoader = false;
                this.paymentsLoaderDialog = false;
                this.snackbarContent = "An Error Occured. Contact admin";
                this.snackbarColor = "error";
                this.snackbar = true;

                console.log(result);
              } else {
                // The payment has been processed!
                if (result.paymentIntent.status === "succeeded") {
                  this_vue.saveStripeRegistraion(result);
                }
              }
            });
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    saveStripeRegistraion(PI) {
      //console.log(PI.paymentIntent);

      let d = new Date();
      var date =
        d.getFullYear() +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + d.getDate()).slice(-2);

      let Uid = this.$store.getters.getUser.id;
      let transaction = {
        status: "success",
        number: PI.paymentIntent.id,
        amount: PI.paymentIntent.amount / 100,
        currency: "EUR",
        transactionDate: date,
        paymentInterface: "stripe"
      };

      let data = {
        isPaid: true,
        transactions: [transaction],
        declaration: this.declaration
      };

      this.$http
        .post(
          "/customer/" + Uid + "/register/internship/" + this.courseDetails.id,
          data,
          {
            headers: { Authorization: "Bearer " + this.token }
          }
        )
        .then(res => {
          this.$router.push("/success");
          this.paymentLoader = false;
        })
        .catch(e => {
          this.paymentLoader = false;
          console.log(e.response);
        });
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    registerStudent() {
      if (this.registerPassword == this.registerRepeatPassword) {
        this.addStudentLoader = true;
        var data = {
          firstname: this.firstname,
          lastname: this.lastname,
          gender: this.genderSelect,
          password: this.registerPassword,
          address: {
            address: this.street,
            pinCode: this.pincode,
            city: {
              id: this.city.id
            }
          },
          dateOfBirth: this.year + "-" + this.month + "-" + this.day,
          phoneNumber: this.phonenumber,
          email: this.email
        };

        console.log(data);

        this.$http
          .post("/customer/register", data)
          .then(res => {
            console.log(res);
            this.snackbarContent =
              "New student added. Please confirm your email by checking your inbox.";
            this.snackbarColor = "success";
            this.snackbar = true;

            this.addStudentLoader = false;
            this.registerDialog = false;
            this.reset();
          })
          .catch(e => {
            console.log(e.response);

            if (e.response.status == 409) {
              this.addStudentLoader = false;
              this.snackbarContent = e.response.data.message;
              this.snackbarColor = "error";
              this.snackbar = true;
            } else {
              this.addStudentLoader = false;
              this.snackbarContent = "Fatal error. Could not create account.";
              this.snackbarColor = "error";
              this.snackbar = true;
            }
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

      let start = d - 18;
      let end = 1935;

      let t = [];
      for (let i = start; i >= end; i--) {
        t.push(i);
      }

      return t;
    },
    points: function() {
      let temp = [];

      for (let i = 0; i <= 12; i++) {
        temp.push(i);
      }

      return temp;
    },
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
<style>
.card_form {
  max-width: 500px;
  margin: auto;
  padding: 20px 5px;

  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid pink;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
</style>