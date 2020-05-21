<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>Les infractions à la circulation</h1>
                                <p>
                                    Le code de la route rassemble un ensemble de règles relatives à la circulation. Son objectif
                                    est que tous les respectent afin de vivre au mieux le partage de la route.
                                </p>
                                <p>
                                    Ne pas respecter les règles de circulation engendre des sanctions qui peuvent consister,
                                    selon la nature de l’infraction, en une amende, un retrait de points ou une peine
                                    d’emprisonnement.
                                </p>
                            </div>

                            <div>
                                <h2>Les amendes pour les infractions aux intersections</h2>
                                <p>A une intersection, le conducteur doit s’arrêter un niveau du marquage au sol.</p>
                                <p>
                                    Ne pas s’arrêter à un feu rouge ou au Stop entraîne un retrait de 4 points (récupérés
                                    automatiquement au bout de 3 ans) et une amende de 135 euros.
                                </p>
                                <p>
                                    Refuser une priorité ou ne pas respecter un sens interdit entraîne une perte de 4 points
                                    (récupérés automatiquement au bout de 3 ans) et une amende de 135 euros.
                                </p>
                            </div>

                            <div>
                                <h2>Les amendes pour infractions vis-à-vis des autres usagers de la route</h2>
                                <p>Les usagers de la route doivent partager cet espace sur la base d’une relation apaisée. Ainsi,
                                    respecter les règles imposées par le code de la route permet de respecter les autres.
                                </p>
                                <p>
                                    Ne pas respecter la priorité à un piéton entraîne un retrait de 4 et 135 euros d’amende.
                                </p>
                                <p>
                                    Ne pas respecter les distances de sécurité ou franchir une ligne blanche continue entraîne
                                    un retrait de 3 points (récupérés automatiquement au bout de 3 ans) et une amende de 135
                                    euros.
                                </p>
                                <p>
                                    Oublier de mettre son clignotant entraîne un retrait de 3 points (récupérés
                                    automatiquement au bout de 2 ans) et une amende de 35 euros.
                                </p>
                                <p>
                                    Circuler dans une voie de bus entraîne une amende de 135 euros.
                                </p>
                            </div>

                            <div>
                                <h2>Les amendes pour les infractions commises à l’intérieur du véhicule</h2>
                                <p>
                                    Des sanctions s’appliquent également pour tout acte entraînant une diminution de la
                                    vigilance du conducteur, comme l’utilisation du téléphone en conduisant, ou bien le non
                                    port de la ceinture de sécurité par le conducteur ou l’un de ses passagers.
                                </p>
                                <p>
                                    Utiliser le téléphone au volant, des écouteurs ou un casque audio, ne pas porter la ceinture
                                    de sécurité ou un casque pour les 2 roues, entraîne une perte de 3 points (récupérés
                                    automatiquement au bout de 3 ans) et une amende de 135 euros.
                                </p>
                                <p>
                                    Fumer au volant en présence d’un mineur entraîne une amende de 68 euros.
                                </p>
                            </div>

                            <div>
                                <h2>Les délits relatifs à la circulation</h2>
                                <p>Causer un homicide ou des blessures involontaires entraînant une ITT ou commettre un
                                    délit de fuite entraîne un retrait de 6 points et un passage au tribunal amenant à une
                                    suspension du permis de conduire.</p>
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

         />
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
