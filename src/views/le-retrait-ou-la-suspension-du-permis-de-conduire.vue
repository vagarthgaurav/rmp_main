<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div>
                                <h1>Le retrait ou la suspension du permis de conduire</h1>
                                <p>Attention à ne pas confondre suspension de permis, annulation et invalidation.
                                </p>
                                <p>
                                    Seules des infractions très graves au code de la route entraînent la suspension ou le retrait
                                    du permis de conduire.
                                </p>
                            </div>

                            <div>
                                <h2>Quelles infractions peuvent entraîner le retrait du permis de conduire</h2>
                                <ul>
                                    <li>Un excès de vitesse supérieur d’au moins 40 km à la vitesse maximale autorisée</li>
                                    <li>Conduire avec un taux d’alcoolémie égal ou supérieur à 0,80 grammes par litre de
                                        sang</li>
                                    <li>Conduire sous l’emprise de stupéfiants</li>
                                    <li>Ne pas respecter un feu rouge ou un stop</li>
                                    <li>Utiliser un détecteur de radars</li>
                                    <li>Circuler en sens inverse sur l’autoroute</li>
                                    <li>Se rendre coupable d’un délit de fuite</li>

                                </ul>
                            </div>

                            <div>
                                <h2>Rétention immédiate</h2>
                                <p>Le permis de conduire est retiré physiquement par les forces de l’ordre et remettent au
                                    conducteur un avis de rétention. Celui-ci ne peut donc pas repartir an conduisant son
                                    véhicule.</p>
                            </div>

                            <div>
                                <h2>Suspension administrative du permis de conduire</h2>
                                <p>
                                    La durée de la suspension de permis est généralement de plusieurs mois. C’est la
                                    commission préfectorale du permis de conduire prend sa décision sous 72 heures.
                                </p>
                                <p>
                                    C’est le tribunal qui prononce la suspension judiciaire lors du jugement de l’infraction. La
                                    suspension administrative est alors confirmée. La sanction peut aussi être alourdie par le
                                    juge.
                                </p>
                                <p>
                                    Conduire alors que le permis est suspendu entraîne 2 ans d’emprisonnement et 4 500 euros
                                    d’amende.
                                </p>
                            </div>

                            <div>
                                <h2>Durée de la suspension du permis de conduire</h2>
                                <p>
                                    Cette durée dépend de la gravité de l’infraction commise. Les peines sont doublées s’il y a
                                    récidive.
                                </p>
                            </div>

                            <div>
                                <h2>Qu’est – ce que le permis blanc</h2>
                                <p>
                                    Afin de ne pas pénaliser l’activité professionnelle du contrevenant, le tribunal peut, dans de
                                    très rares cas, limiter la suspension du permis de conduire.
                                </p>
                                <p>
                                    Un recours est toujours possible auprès du tribunal compétent.
                                </p>
                            </div>

                            <div>
                                <h2>Retrait de points</h2>
                                <p>
                                    Il s’écoule plusieurs mois entre l’infraction et le retrait effectif des points.
                                </p>
                                <p>
                                    Un permis suspendu reste cependant valide. Ainsi, un conducteur dont le permis a été
                                    suspendu peut suivre un stage de récupération de points.
                                </p>
                            </div>

                            <div>
                                <h2>Récupérer son permis de conduire suite à une suspension</h2>
                                <p>
                                    Le conducteur dont le permis de conduire a été suspendu n’a pas besoin de repasser le
                                    permis de conduire.
                                </p>
                                <p>
                                    En cas de suspension administrative, il doit aller à la Préfecture avec les documents
                                    suivants : la notification de suspension, un avis médical favorable et, si nécessaire, les
                                    résultats su test psychotechnique.
                                </p>
                                <p>
                                    En cas de suspension judiciaire, il doit se rendre auprès de l’autorité notifiée sur l’imprimé 7
                                    délivré lors de la restitution du permis avec les documents suivants : la notification de
                                    suspension, un avis médical favorable et, s’il est obligatoire, l’examen psychotechnique.
                                </p>
                                <p>
                                    Les infractions de conduite sous l’emprise d’alcool ou de stupéfiants nécessite une prise de
                                    sang réalisée par la commission médicale départementale. Une visite médicale chez un
                                    médecin agrée est obligatoire pour toutes les autres infractions routières.
                                </p>
                                <p>
                                    Le conducteur doit s’occuper lui-même de réaliser ces démarches et prendre les rendez-vous
                                    nécessaires.
                                </p>
                                <p> Tout conducteur dont le permis est suspendu pour au moins 6 mois doit obligatoirement
                                    subir des tests psychotechniques.
                                </p>
                                <p>
                                    L’ensemble de ces démarches doit être réalisée avant le terme de la période de suspension
                                    du permis de conduire.
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
