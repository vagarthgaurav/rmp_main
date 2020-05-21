<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div>
                                <h1>La garantie de stage</h1>

                                    <p>Notre objectif est de vous permettre de rester en possession de votre permis de conduire.</p>

                                    <p>
                                        Nous faire confiance, c’est vous assurer de bénéficier du service de transfert qui se réalise au
                                        sein même de notre réseau national qui regroupe plus de 600 partenaires organisateurs de
                                        stages.
                                    </p>
                            </div>

                            <div>
                                <h2>Un service unique</h2>
                                <h4>Pourquoi choisir nos services</h4>
                                <p>
                                    Nous sélectionnons l’ensemble de nos partenaires dans le respect d’une charte de qualité.
                                    Ainsi, nous vous garantissons de pouvoir suivre un stage même si l’organisateur a procédé à
                                    une annulation.
                                </p>
                                <p>
                                    Chaque stage doit respecter la réglementation relative au nombre de participants : six
                                    minimum et 20 maximum.
                                </p>
                                <p>
                                    La Préfecture contraint l’organisateur d’annuler tout stage dont le nombre légal de
                                    participants n’a pas été atteint.
                                </p>
                            </div>

                            <div>
                                <h2>L’avantage de nos services</h2>
                                <p>
                                    Une fois inscrit auprès de nos services, nous vous transférons gratuitement vers l’un de nos
                                    stages si celui auquel vous vous étiez inscrit au préalable a été annulé par l’organisateur.
                                    Appelez alors notre service client qui vous aidera à trouver le nouveau stage dont les dates
                                    et le lieu vous conviennent le mieux.
                                </p>
                                <p>Ainsi, vous aurez la garantie de ne pas vous trouver engagé auprès d’un organisateur qui
                                    déprogramme ses stages.
                                </p>
                            </div>

                            <div>
                                <h2>De très nombreux clients satisfaits</h2>
                                <p>
                                    Nous vous assurons de trouver rapidement un stage de récupération de points proche de
                                    votre domicile.
                                </p>
                                <p>
                                    Notre priorité est la satisfaction de nos clients. Leurs témoignages en sont la preuve.
                                </p>
                            </div>

                            <div>
                                <h2>Le fonctionnement</h2>
                                <h3>Transfert dû à la déprogrammation de l’organisateur</h3>
                                <p>
                                    L’organisateur vous préviendra en cas de déprogrammation de stage.
                                </p>
                                <p>
                                    Appelez alors l’un de nos conseillers qui sera à même de vous proposer un nouveau stage,
                                    dans un lieu et à une date différents. Vous aurez la possibilité d’effectuer un stage chez le
                                    même organisateur sans frais supplémentaires.
                                </p>

                                <h3>Transfert pour convenance</h3>
                                <p>
                                    En cas d’empêchement, vous pourrez faire transférer votre stage pour convenance
                                    personnelle. Il peut s’effectuer sans frais dans un délai maximum de 7 jours avant le stage.
                                </p>
                                <p>
                                    Vous pouvez effectuer un transfert de convenance jusqu’à 2 jours ouvrés avant la date du
                                    stage.
                                </p>
                                <p>
                                    Un changement effectué entre 2 et 7 jours avant le stage nécessite le règlement de frais
                                    supplémentaires.
                                </p>

                                <h3>La salle d’attente</h3>
                                <p>
                                    Si vous le souhaitez, votre demande peut être conservée en salle d’attente, vous laissant le
                                    temps de choisir une nouvelle date pour effectuer votre stage. Un avoir correspondant au
                                    montant payé pour votre stage sera à votre disposition.
                                </p>

                                <h3>Se faire rembourser un stage</h3>
                                <p>
                                    Si vous ne désirez pas bénéficier du transfert vers un autre stage, vous pourrez obtenir le
                                    remboursement d’un stage annulé par l’organisateur.
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
