<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div>
                                <h1>Fonctionnement du permis à points et solde de points</h1>
                                <p>
                                    Le capital points du permis de conduire est de 12 points.</p>
                                <p>Absolument tous les permis sont concernés par ce système de points depuis le 1 er juillet
                                    1992.</p>
                                <p>Chaque infraction routière réduit automatiquement le solde de points.</p>
                                <p>Le permis à points est une mesure politique qui se retrouve dans plusieurs pays d’Europe où
                                    il constitue l’un des points forts de la sécurité routière.</p>
                                <p>Respecter le Code de la Route permet de faire diminuer le nombre d’accidents.
                                </p>
                            </div>

                            <div>
                                <h2>Comment fonctionne le permis à points</h2>
                                <p>
                                    Le permis à points a pour objectif d’inciter les conducteurs à conduire de façon responsable
                                    et préserver ainsi son capital points initial. Il revêt donc un caractère préventif et
                                    pédagogique.
                                </p>
                                <p>
                                    Le nombre de points retirés est proportionnel à la gravité de l’infraction commise.
                                </p>
                                <p>
                                    Cependant, toutes les infractions routières n’entraînent pas une perte de points.
                                </p>
                                <p>
                                    Le nombre maximum de points qui peuvent être retirés est de 8 pour plusieurs infractions
                                    commises en même temps et de 6 points pour une infraction.
                                </p>
                                <p>
                                    Le permis est déclaré invalidé lorsque le solde de points est nul. Les épreuves du code de la
                                    route devront être repassées au bout de 6 mois, ainsi qu’une visite médicale et des tests
                                    psychotechniques.
                                </p>
                                <p>
                                    L’invalidation d’un permis de conduire en période probatoire entraîne l’obligation de
                                    repasser le code de la route ainsi que le permis.
                                </p>
                                <p>
                                    Un conducteur détenteur du permis depuis plus de 3 ans devra repasser le code de la route.
                                </p>
                                <p>
                                    Une fois le nouveau permis obtenu, le conducteur se verra remis un permis probatoire.
                                </p>
                                <p>
                                    Un délai d’1 an doit être respecté entre deux stages de récupération de points.
                                </p>
                                <p>
                                    Si un seul point est retiré suite à une infraction, il sera récupéré automatiquement au bout
                                    de 6 mois.
                                </p>
                            </div>

                            <div>
                                <h2>De quelle façon récupérer des points</h2>
                                <p>
                                    La récupération de points est possible :
                                </p>
                                <ul>
                                    <li>Le capital revient à 12 points au bout de 3 ans sans retrait de points</li>
                                    <li>Suivre un stage volontaire de récupération de points agréé permet de récupérer 4
                                        points.</li>
                                    <li>En l’absence d’autre infraction, un seul point perdu est récupéré automatiquement
                                        au bout de 6 mois.</li>
                                    <li>En l’absence d’autre infraction, les points perdus lors d’une infraction de classe 1, 2
                                        et 3, le capital revient à 12 points au bout de 2 ans.</li>
                                </ul>
                                <p>
                                    Un permis dont tous les points ont été retirés est invalide. Le conducteur reçoit alors la
                                    lettre recommandée 48SI qui lui signifie l’invalidation de son permis de conduire. Il doit
                                    alors le restituer à la Préfecture pour une durée minimum de 6 mois.
                                </p>
                            </div>

                            <div>
                                <h2>Permis à points et permis probatoire</h2>
                                <p>
                                    Ce sont les jeunes conducteurs qui obtiennent le permis probatoire, doté d’un capital de
                                    départ de 6 points.
                                </p>
                                <p>
                                    La période probatoire est de 3 ans pour les conducteurs ayant suivi une formation
                                    traditionnelle et de 2 ans pour ceux ayant bénéficié de la conduite accompagnée.
                                </p>
                                <p>
                                    En l’absence d’infraction, 2 points sont crédités sur le permis chaque année (3 points pour
                                    ceux ayant suivi la conduite accompagnée). Ainsi, une fois la période de probation terminée,
                                    le capital du permis de conduire s’élèvera à 12 points.
                                </p>
                            </div>

                            <div>
                                <h2>Connaître son solde de points</h2>
                                <p>
                                    Veillez à consulter régulièrement votre solde de points. Ceci vous permettra d’éviter que
                                    votre permis soit invalidé.
                                </p>
                                <p>
                                    Le solde du permis est consultable en ligne sur Télépoints. Demandez un code confidentiel le
                                    cas échéant.
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
