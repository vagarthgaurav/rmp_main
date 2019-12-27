<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9>
                    <v-card class="mx-2">
                        <v-card-text class="section">

                            <div class="mb-4">
                                <h1>Ensemble des stages de récupération de points en France</h1>

                                <p>Nous vous proposons tous les types de stages existant en matière de sensibilisation à
                                    la sécurité routière :</p>

                                <div class="highlighted">

                                    <h4>Les stages qui permettent de récupérer jusqu’à 4 pts : </h4>
                                    <ul>
                                        <li>Stage volontaire de récupération de points .</li>
                                        <li>Stage obligatoire pour permis probatoire</li>
                                    </ul>

                                    <br>

                                    <h4>Les stages sans récupération de points : </h4>
                                    <ul>
                                        <li>Stage obligatoire dans le cadre d’une composition pénale comme alternative à
                                            la poursuite
                                        </li>
                                        <li>Stage obligatoire dans le cadre d’une peine complémentaire</li>
                                    </ul>

                                </div>
                            </div>

                            <!--<div class="mb-4">
                                <h1>Trouver un stage</h1>

                                <img class="text-xs-center" src="/map.png" style="width: 40%; "/>

                            </div>-->

                            <div class="mb-4">
                                <h1>L’inscription à un stage de récupération de points</h1>

                                <p>L’inscription peut s’effectuer dans n’importe quel département. Celle-ci peut se
                                    faire même au cours d’une suspension de permis de conduire du moment que vous
                                    possédez un permis valide. Votre stage précédent doit avoir eu lieu dans un délai de
                                    1 an et 1 jour.</p>
                            </div>

                            <div class="mb-4">
                                <h1>Les conditions de participation à un stage de récupération de points </h1>

                                <p>A partit du moment où il a perdu des points, la participation volontaire ou
                                    obligatoire d’un conducteur à un stage de récupération de points lui permet de
                                    récupérer jusqu’à 4 points.</p>

                                <div class="highlighted">

                                    <p>Il faut cependant veiller à respecter les conditions suivantes :</p>
                                    <ul>
                                        <li>N’avoir participé à aucun stage de récupération de points dans un délai de 1
                                            an et 1 jour
                                        </li>
                                        <li>Posséder un permis valide (ne pas avoir reçu de lettre 48SI)</li>
                                        <li>Avoir perdu des points.</li>
                                        <li>Les détenteurs d’un permis probatoire ayant perdu un minimum de 3 points
                                            doivent posséder la lettre 48N
                                        </li>
                                    </ul>
                                </div>

                                <p class="mt-3">La récupération des points s’effectue de le respect de la limite du
                                    plafond correspondant au permis de conduire du titulaire.
                                </p>

                                <p>Un stage peut s’effectuer même pendant une suspension de permis de conduire.</p>
                            </div>

                            <div class="mb-4">
                                <h1>Le choix de votre stage de récupération de points</h1>

                                <p>Vous pouvez choisir aussi bien la date que le département auxquels vous souhaitez
                                    effectuer votre stage.</p>

                                <ul>
                                    <li>L’ensemble des stages respecte les conditions fixées par arrêté du ministre
                                        chargé des transports
                                    </li>
                                    <li>L’ensemble des stages revêt un caractère volontaire ou obligatoire</li>
                                    <li>L’ensemble des lieux de stage bénéficient d’un agrément préfectoral</li>
                                </ul>

                                <p>Le stage se déroule sur 2 journées consécutives. Aucun stage n’est organisé le
                                    dimanche.</p>
                            </div>


                            <div class="mb-4">
                                <h1>En quoi consiste un stage</h1>

                                <p>Le stage a une durée globale de 14h. Celles-ci se déroulent sur deux journées
                                    consécutives. Les sujets abordés concernent les causes générales de l’insécurité
                                    routière mais également des points plus précis tels que la fatigue, la vitesse, la
                                    drogue…La session fonctionne sur le mode de l’interaction et de l’échange qui
                                    s’établit entre les différents intervenants et les participants présents.</p>

                                <p>Toute personne qui assiste à l’intégralité du programme de stage peut récupérer 4
                                    points sur son permis de conduire, de façon automatique. Cette récupération est
                                    soumise à certaines limites :</p>

                                <ul>
                                    <li>12 points pour les anciens permis</li>
                                    <li>6 points pour les permis probatoires
                                    </li>
                                </ul>

                                <p>En fin de stage, nous vous remettrons une attestation qui vous permettra de prouver
                                    la reconstitution de vos points. L’effet de ce document débute dès le lendemain de
                                    la fin du stage.</p>
                            </div>

                        </v-card-text>
                    </v-card>

                </v-flex>
                <v-flex xs12 sm12 md3>
                    <v-card class="mx-2">
                        <v-card-text>
                            <RightAsideInfractions></RightAsideInfractions>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <Footer/>
    </div>
</template>

<script>
    import RightAsideInfractions from '@/components/RightAsideInfractions'
    import Footer from '@/components/Footer'

    export default {
        name: "stage-recuperation-points",
        components: {
            RightAsideInfractions,
            Footer
        }
    }
</script>

<style>
    .highlighted {
        background: #ffedf5;
        border-radius: 10px;
        color: #7a0439;
        font-size: 18px;
        font-weight: 800;
        padding: 30px 70px;
        margin: 40px 0px;
    }

    .highlighted p {
        font-size: 19px;
    }


    h1 {
        margin-bottom: 30px;
    }

    ul li {
        list-style-type: circle;
        margin: 10px 0 10px 0;
        font-size: 18px;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        color: black;
    }

    p {
        font-size: 18px;
    }

    .section {
        padding: 50px 50px;
    }
</style>
