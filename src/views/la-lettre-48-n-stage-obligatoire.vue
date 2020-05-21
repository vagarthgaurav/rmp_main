<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>La lettre 48 N : stage obligatoire</h1>
                                <p>
                                    Les jeunes conducteurs en période probatoire ayant perdu au moins 3 points suite à une
                                    infraction doivent obligatoirement suivre un stage de récupération de points. Ils disposent
                                    de 4 mois à compter de la réception de la lettre 48N
                                </p>
                            </div>

                            <div>
                                <h2>La lettre 48N</h2>
                                <p>
                                    Le Ministère de l’Intérieur envoi ce courrier recommandé aux jeunes conducteurs ayant
                                    commis une infraction entraînant la perte d’au moins 3 points.
                                </p>
                                <p>
                                    Le stage doit être effectué au sein d’un centre agréé dans un délai de 4 mois à partir du
                                    moment où la lettre 48N a été reçue.
                                </p>
                                <p>
                                    IL faut attendre d’avoir reçu cette lettre avant de s’inscrire au stage. En effet, dans le cas
                                    contraire, le conducteur devra suivre un nouveau stage mais sans pouvoir récupérer de
                                    points.
                                </p>
                            </div>

                            <div>
                                <h2>Délais de réception de la lettre 48N</h2>
                                <p>
                                    Chaque département présente ses propres délais.
                                </p>
                                <p>
                                    Le délai moyen se situe dans les 2 ou 3 mois qui suivent le paiement de l’amende. Il peut
                                    atteindre les 6 mois à 1 ans.
                                </p>
                            </div>
                            <div>
                                <h2>Perte de la lettre 48N</h2>
                                <p>
                                    La lettre 48N est obligatoire pour pouvoir s’inscrire au stage obligatoire en période
                                    probatoire.
                                </p>
                                <p>
                                    Si vous avez perdu ce courrier, demandez à la Préfecture un Relevé Intégral d’Information
                                    qui la remplacera.
                                </p>
                            </div>

                            <div>
                                <h2>Stage obligatoire en permis probatoire</h2>
                                <p>
                                    Il est possible de récupérer jusqu’à points en fonction du capital maximum de points
                                    correspondant à l’année de la période probatoire et d’obtenir le remboursement de
                                    l’amende.
                                </p>
                                <p>
                                    Ce stage est le même que le stage volontaire.
                                </p>
                                <p>
                                    Vous ne pourrez cependant pas récupérer de points si vous avez déjà suivi un stage dans un
                                    délai inférieur à 1 an et 1 jour.
                                </p>
                            </div>

                            <div>
                                <h2>Sanctions encourues en cas de non-respect du stage obligatoire</h2>
                                <p>
                                    Le jeune conducteur dispose d’un délai de 4 mois pour suivre le stage après avoir reçu la
                                    lettre 48N
                                </p>
                                <p>
                                    Ne pas respecter cette obligation entraîne une convocation par les forces de l’ordre ainsi
                                    qu’une suspension de 3 ans maximum du permis et une amende forfaitaire de 135 euros
                                    (Classe 4).
                                </p>
                            </div>

                            <div>
                                <h2>Obtenir le remboursement de l’amende</h2>
                                <p>
                                    Le conducteur se voit remettre, à l’issue du stage, une attestation et un formulaire de
                                    demande de remboursement de l’amende. Celle-ci doit intervenir dans les 15 jours qui
                                    suivent auprès du Trésor Public du lieu de l’infraction.
                                </p>
                                <p>Joignez à votre demande :</p>
                                <ul>
                                    <li>Une copie de la lettre 48N,</li>
                                    <li>Une copie de l’attestation de stage</li>
                                    <li>L’original de l’avis de contravention de l’amende</li>
                                    <li>la preuve que l’amende a été payée</li>
                                </ul>
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
