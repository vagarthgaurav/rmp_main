<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9>
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>Les infractions sur l’autoroute</h1>
                                <p>
                                    Seuls les véhicules à moteur immatriculés ont le droit de circuler sur les
                                    autoroutes. Ainsi, les
                                    véhicules sans moteurs, vélos, piétons, quads, cyclomoteurs ou tracteurs ont stricte
                                    interdiction d’y accéder.
                                </p>
                                <p>
                                    L’autoroute est le réseau le plus sécuritaire. En effet, en France, on y dénombre
                                    moins
                                    d’accidents mortels que sur l’ensemble des autres axes routiers. Cependant, des
                                    facteurs
                                    tels que la fatigue, la diminution de l’attention ainsi que l’endormissement sont à
                                    l’origine de
                                    plus d’1/3 des accidents mortels.
                                </p>
                            </div>

                            <div>
                                <h2>Amendes et sanctions encourues pour non-respect des règles sur autoroute</h2>

                                <h3>Refuser de s’acquitter du péage</h3>
                                <p>
                                    Des panneaux placés sur l’autoroute signalent les sections qui sont payantes. La
                                    somme due
                                    est calculée en fonction de la distance parcourue ainsi que de la catégorie du
                                    véhicule. Tout
                                    automobiliste doit respecter l’obligation de s’acquitter de la somme correspondante
                                    pour
                                    une section soumise à péage.
                                </p>
                                <p>
                                    Le non-paiement d’un péage sur autoroute entraîne une amende de 22 euros.
                                </p>

                                <h3>Faire demi-tour ou marche arrière sur autoroute</h3>
                                <p>
                                    Les véhicules circulent sur les autoroutes à allure rapide. Ces circonstances
                                    rendent certaines
                                    manœuvres très dangereuses. Ainsi, faire demi-tour ou marche arrière est absolument
                                    interdit sur autoroute.
                                </p>
                                <p>
                                    Faire demi-tour ou marche arrière sur autoroute entraîne un retrait de 4 points et
                                    une
                                    amende de 135 euros.
                                </p>

                                <h3>Ne pas respecter la priorité sur une bretelle de raccordement</h3>
                                <p>
                                    Tout véhicule qui entre sur l’autoroute via la bretelle de raccordement a
                                    l’obligation de
                                    céder le passage à ceux qui circulent déjà sur l’autoroute. On trouve généralement
                                    un
                                    « Céder le passage » au terme de la voie d’accélération. Il est strictement interdit
                                    de
                                    s’arrêter sur cette voie.
                                </p>
                                <p>
                                    Ne pas respecter la priorité lors de l’accès sur l’autoroute entraîne une perte de 4
                                    points et
                                    une amende de 135 euros.
                                </p>

                                <h3>S’arrêter ou stationner sur la bande d’arrêt d’urgence</h3>
                                <p>
                                    Il est possible de s’arrêter sur la bande d’arrêt d’urgence située sur la droite de
                                    l’autoroute si
                                    vous êtes victime d’une panne, d’un malaise ou d’un accident. Il est alors impératif
                                    d’allumer
                                    les feux de détresse afin de signaler la présence du véhicule. Les occupants du
                                    véhicule
                                    doivent se mettre à l’abri derrière la glissière de sécurité. Tous les 2 km, vous
                                    trouverez des
                                    bornes d’appel sur l’autoroute.
                                </p>
                                <p>
                                    S’arrêter de manière non justifiée sur la bande d’arrêt d’urgence entraîne une perte
                                    de 3
                                    points et une amende de 135 euros.
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

        
    </div>
</template>

<script>
    import RightAsideInfractions from '@/components/RightAsideInfractions'
    

    export default {
        name: "stage-recuperation-points",
        components: {
            RightAsideInfractions,
            
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
