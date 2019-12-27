<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9>
                    <v-card class="mx-2">
                        <v-card-text>
                            <h1>Les différents stages obligatoires de sensibilisation à la sécurité routière</h1>

                            <p>Tout conducteur qui commet une grave infraction au Code de la Route passe automatiquement
                                au tribunal. C’est le cas lors de conduite sous l’emprise d’alcool ou de stupéfiants de
                                façon délictuelle ou récidiviste, d’homicide involontaire ou d’excès de vitesse
                                supérieur à 50km/h. Le juge peut alors, en alternative à la poursuite judiciaire, en
                                composition pénale ou en peine complémentaire, imposer au conducteur de suivre un stage
                                obligatoire de sensibilisation à la sécurité routière.</p>

                            <div class="my-2">
                                <h2>Le stage obligatoire en alternative à la poursuite judiciaire et composition
                                    pénale </h2>

                                <p>Ce type de stages obligatoires peut correspondre à deux situations :</p>

                                <ul>
                                    <li>• l’alternative aux poursuites : Le contrevenant se voit offrir par le Procureur
                                        de la République la possibilité du classement sans suite de son infraction en
                                        échange de la participation à un stage de sensibilisation à la sécurité routière
                                        au sein d’un centre agréé.
                                    </li>

                                    <li>• la composition pénale : Afin d’éviter une peine ou de l’alléger, le Délégué du
                                        Procureur peut demander au contrevenant de participer à un stage de
                                        sensibilisation au sein d’un centre agréé.
                                    </li>
                                </ul>

                                <p>Ce type de stages n’ouvre pas droit à la récupération de points. Si le délit commis
                                    entraîne une perte de poids, le conducteur se verra alors contraint de participer à
                                    un stage volontaire de récupération de points pour les récupérer.</p>
                            </div>

                            <div class="mt-2">
                                <h2>Le stage obligatoire dans le cadre d’une peine complémentaire </h2>

                                <p>Le juge prononce ce stage en guise de sanction. Il vient compléter l’amende, le
                                    retrait
                                    de points ainsi que la suspension du permis de conduire.</p>
                                <p>Le conducteur se voit imposé de suivre un stage de sensibilisation à la sécurité
                                    routière par le juge d’application des peines. Il s’agit d’une peine complémentaire.
                                    Ainsi, cette sanction vient s’ajouter aux autres sanctions qui sanctionnent
                                    l’infraction
                                    au code de la route.</p>
                                <p>Il n’est pas possible de récupérer 4 points en suivant un stage de sensibilisation à
                                    la
                                    sécurité routière réalisé dans le cadre d’une peine.</p>
                                <p>Afin de récupérer 4 points, le contrevenant devra, au besoin, suivre un stage qui
                                    sera
                                    alors un stage volontaire. Il est important de noter que ces deux stages ne
                                    nécessitent
                                    pas d’être séparés par un délai d’1 an et 1 jour.</p>
                                <p>Le délai d’une année ne concerne que les stages qui permettent de récupérer des
                                    points.</p>

                            </div>

                            <div class="mt-5">
                                <h2>Le stage obligatoire pour les jeunes conducteurs ayant commis une infraction </h2>

                                <p>Tout jeune conducteur ayant commis une infraction sanctionnée par une perte d’au
                                    moins 3
                                    points, pendant sa période probatoire, reçoit la lettre recommandée 48N, envoyée par
                                    le
                                    Ministère de l’Intérieur. Celle-ci l’oblige alors à suivre le stage obligatoire en
                                    permis probatoire.</p>
                                <p>Grâce à ce stage, le conducteur peut récupérer 4 points (dans le respect de la limite
                                    du
                                    solde de points de son permis de conduire). L’inscription au stage doit intervenir
                                    dans
                                    un délai de 4 mois suite à la réception de la lettre 48N.</p>
                                <p>Une fois le stage obligatoire effectué, le jeune conducteur pourra demander le
                                    remboursement de l’amende qu’il aura payée au préalable.</p>
                                <p>Si vous avez un doute concernant les modalités d’inscription, n’hésitez pas à appeler
                                    l’un de nos conseillers.</p>

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
