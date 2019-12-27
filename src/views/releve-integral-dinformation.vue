<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1> Relevé intégral d’information </h1>
                                <p>
                                    Ce document est la référence concernant la situation administrative du permis de conduire.
                                    Il présente l’historique de votre permis depuis que vous vous êtes inscrit à l’examen du
                                    permis de conduire en Préfecture.
                                </p>
                                <p>
                                    Il recense également toutes les infractions commises ainsi que le solde de vos points.
                                </p>
                            </div>

                            <div>
                                <h2>Informations présentes sur le Relevé d’Information Intégral :</h2>
                                <ul>
                                    <li>Solde de points présents sur le permis de conduire</li>
                                    <li>Validité du permis de conduire</li>
                                    <li>Relevé des infractions enregistrées et date de retrait des points</li>
                                    <li>Visites médicales passées</li>
                                    <li>Stages de récupération de points effectués</li>
                                    <li>Envoi des lettres 48M, 48N ou 48Si</li>
                                    <li>Codes de consultation pour le site telepoints.info</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Lecture du relevé d’information intégral</h2>
                                <p>Le relevé indique 3 dates pour chaque infraction routière commise :</p>
                                <ul>
                                    <li> Date de l’infraction : constatation de l’infraction par les forces de l’ordre.</li>
                                    <li>Date définitive : paiement de l’amende au Trésor Public émission du titre exécutoire de
                                        l’amende forfaitaire majorée (45 jours après la date d’infraction).</li>
                                    <li>Date d’enregistrement : retrait des points apparaissant sur le Fichier National du Permis
                                        de Conduire.</li>
                                </ul>
                                <p>
                                    Les points sont effectivement retirés au moment de l’enregistrement. Il convient d’envisager
                                    de suivre un stage de récupération de points avant cette date en cas de solde de points
                                    faible. Ce délai administratif est l’occasion de préserver le permis de conduire.
                                    Prendre régulièrement connaissance de votre solde de points évitera que le permis atteigne
                                    un solde nul et soit invalidé.
                                </p>
                                <p>
                                    Les points sont récupérés automatiquement en l’absence d’infraction pendant une durée de
                                    6 mois à 10 ans. Le relevé intégral comportera cette information ainsi que les points
                                    récupérés suite à un stage.
                                </p>
                            </div>
                            <div>
                                <h2>À quel moment demander son relevé intégral d’information du permis de conduire</h2>
                                <p>
                                    Consultez votre solde de points suite à un retrait causé par une infraction.
                                </p>
                                <p>
                                    Dès les 6 points atteints, le conducteur reçoit une lettre recommandée indiquant le solde de
                                    points envoyée par le Ministère de l’Intérieur. Pensez cependant à demander votre Relevé
                                    Intégrale en Préfecture.
                                </p>
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

        <Footer />
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
        padding: 10px;
    }

    .highlighted p {
        font-size: 18px;
    }

    ul li {
        list-style-type: circle;
        margin: 10px 0 10px 0;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        color: black;
    }

    p {
        font-size: 16px;
    }
</style>
