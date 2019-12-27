<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div>
                                <h1>Le permis probatoire</h1>
                                <p>
                                    Les jeunes conducteurs obtiennent le permis probatoire, crédité d’un capital de départ de 12
                                    points. Ce système existe depuis le 1 er mars 2004.
                                </p>
                                <p>
                                    Cette période de probation permet aux jeunes conducteurs d’apprendre à bien maîtriser la
                                    route. En effet, 25% des personnes tuées sur la route ont entre 18 et 25 ans.
                                </p>
                            </div>

                            <div>
                                <h2>Le permis probatoire : pour qui ?</h2>
                                <ul>
                                    <li>les conducteurs qui obtiennent le permis de conduire pour la première fois</li>
                                    <li>les conducteurs qui récupèrent le droit de conduire après une invalidation ou une
                                        annulation du permis de conduire</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Obtenir des points pendant la période probatoire</h2>
                                <p>
                                    Le capital initial du permis probatoire est de 6 points. En l’absence d’infraction, le capital
                                    complet de 12 points est acquis en 3 ans (2 ans pour ceux qui ont passé la conduite
                                    accompagnée).
                                </p>
                                <p>
                                    En effet, 2 points sont acquis chaque année. Ainsi, à la fin de la première année, le solde de
                                    points est de 8 points et de 10 points au bout de 2 ans et enfin de 12 points au terme des 3
                                    ans. Les conducteurs ayant passé la conduite accompagnée obtiennent quant à eux 3 points
                                    chaque année.
                                </p>
                                <p>
                                    Il est possible de réduire la période probatoire à 2 ans en suivant une formation
                                    complémentaire après avoir obtenu le permis de conduire et sans commettre d’infraction.
                                    Au dos du permis de conduire se trouve une inscription indiquant la période probatoire.
                                </p>
                            </div>
                            <div>
                                <h2>Les conséquences d’une perte de points en période probatoire</h2>
                                <p>
                                    Une perte de points engendre un gel du capital points du permis probatoire.
                                </p>
                                <p>
                                    Ainsi, un seul point perdu est récupéré automatiquement au bout de 6 mois en l’absence
                                    d’infraction. Le solde stagne à 6 points jusqu’au terme de la période probatoire.
                                </p>
                                <p>
                                    La récupération de points peut s’effectuer en suivant un stage de récupération de points Le
                                    nouveau solde sera alors de 10 points / 12. Les points manquants seront constitués au bout
                                    de 3 ans calculés à partir du paiement de l’amende.
                                </p>
                            </div>

                            <div>
                                <h2>En cas de perte de points en période probatoire, le capital points est gelé</h2>
                                <p>
                                    Récupérer des points en période probatoire Les infractions qui entraînent un retrait inférieur
                                    à 3 points
                                </p>
                            </div>

                            <div>
                                <h2>Les infractions qui entraînent un retrait supérieur à 3 points</h2>
                                <p>
                                    Le conducteur reçoit alors la lettre 48N du Ministère de l’Intérieur. Il dispose alors d’un délai
                                    de 4 mois pour suivre un stage de sensibilisation obligatoire qui se substitue à l’amende
                                    consécutive à l’infraction. Présenter l’attestation de stage permettra d’être remboursé de
                                    l’attestation de stage.
                                    Il faut absolument avoir reçu la lettre 48N pour pouvoir suivre un stage obligatoire en
                                    période probatoire.
                                    Ne pas répondre à la lettre 48N entraîne une suspension du permis et une amende de 135
                                    euros.
                                </p>
                            </div>

                            <div>
                                <h2>Les infractions qui entraînent un retrait de 6 points</h2>
                                <p>
                                    Ce genre d’infractions peut engendrer de lourdes conséquences pour un permis probatoire.</p>
                                <p>En effet, perdre 6 points entraîne un solde nul et le permis peut alors être invalidé.</p>
                                <p>Il est impossible de récupérer des points dans ce cadre précis. Le Préfecture ne prendra en
                                    compte aucun stage.</p>
                                <p>Le conducteur devra se soumettre à une visite médicale et à des tests psychotechniques afin
                                    de repasser le permis qui comprend alors le code et la conduite.</p>
                            </div>

                            <div>
                                <h2>Règles de conduite à respecter en permis probatoire</h2>
                                <p>
                                    La période probatoire est soumise à des règles de conduite spécifiques :
                                </p>
                                <ul>
                                    <li>Apposer à l’arrière du véhicule le macaron « Apprenti »</li>
                                    <li>Ne pas dépasser la limite de 110 km/h sur autoroute</li>
                                    <li>Ne pas dépasser la limite de 100 km/h sur les portions d’autoroute à 110 km/h ou sur
                                        les routes à 2 fois 2 voies séparées par une terre-plein central</li>
                                    <li>Ne pas dépasser 80 km/h hors agglomération</li>
                                    <li>Ne pas dépasser un taux d’alcoolémie de 0,2g / l de sang (soit aucun verre d’alcool)</li>
                                </ul>
                                <p>
                                    Les jeunes conducteurs effectuant un dépassement de vitesse encourent les mêmes
                                    sanctions qu’un conducteur possédant un permis depuis plus de 3 ans.
                                </p>
                                <p>
                                    Un taux d’alcool positif entraîne un retrait de 6 points et une amende forfaitaire de 135
                                    euros.
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
