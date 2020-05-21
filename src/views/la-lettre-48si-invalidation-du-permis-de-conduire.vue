<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>La lettre 48 SI : invalidation du permis de conduire</h1>
                                <p>
                                    Un permis de conduire qui atteint un solde nul est invalidé. Signer l’avis de réception de la
                                    lettre recommandée 48 SI rend l’invalidation effective.
                                </p>
                                <p>
                                    La mention « Dossier invalide » apparaît alors sur le relevé intégral d’information. Le
                                    conducteur se voit alors retiré le droit à la conduite et devra repasser son permis au bout de
                                    6 mois afin de le récupérer.
                                </p>
                            </div>
                            <div>
                                <h2>La lettre 48SI</h2>
                                <p>
                                    C’est le Ministère de l’Intérieur qui est chargée d’envoyer en recommandé la lettre 48SI
                                    notifiant au conducteur que son permis est invalidé suite à la perte de la totalité des points
                                    de son permis de conduire.
                                </p>
                                <p>
                                    Le conducteur dispose ensuite d’un délai de 10 jours afin de restituer son permis à la
                                    Préfecture.
                                </p>
                                <p>
                                    La lettre 48SI est envoyé dans les 2 à 4 mois minimum suivant la perte de la totalité des
                                    points. Certains départements présentent un délai beaucoup plus long.
                                </p>
                                <p>
                                    En cas de non récupération du courrier recommandé passé un délai de 15 jours,
                                    l’invalidation du permis de conduire est automatique et prend effet à la date inscrite sur
                                    l’avis de passage.
                                </p>
                            </div>

                            <div>
                                <h2>Suivre un stage de récupération de points</h2>

                                <p>Un stage de récupération de points n’est pas autorisé suite à la réception de la lettre 48SI.</p>
                                <p>Il faut donc agir avant de la recevoir, tant que le permis est donc encore valide. Le solde de
                                    points ne doit cependant pas être inférieur à -3 points.</p>
                            </div>

                            <div>
                                <h2>Permis de conduire probatoire invalidé</h2>
                                <p>
                                    Le jeune conducteur ne possédant que 6 points, il peut rapidement voir son permis invalidé,
                                    notamment s’il commet une infraction engendrant un retrait de 6 points.
                                </p>
                                <p>
                                    Aucun stage de récupération de points n’est alors possible.
                                </p>
                            </div>

                            <div>
                                <h2>Durée d’invalidation du permis de conduire</h2>
                                <p>
                                    Il est possible de s’inscrire pour passer un nouveau permis au bout de 6 mois. Le
                                    commencement de cette période correspond à la date de restitution du permis à la
                                    Préfecture.
                                </p>
                                <p>
                                    Refuser de restituer le permis de conduire entraîne une peine de prison de 2 ans et une
                                    amende de 4 500 euros.
                                </p>
                            </div>

                            <div>
                                <h2>Repasser le permis de conduire suite à une invalidation</h2>
                                <p>
                                    Il est impératif de se soumettre à une visite médicale et à un test psychotechnique pour
                                    pouvoir repasser le permis de conduire. Une fois jugé apte à conduire, il est possible de
                                    s’inscrire auprès d’une auto-école.
                                </p>
                                <ul>
                                    <li>Permis ˃ 3 ans : nécessité de repasser le Code de la Route dans un délai de 9 mois à
                                        compter du dépôt du permis de conduire</li>
                                    <li>Permis probatoire : nécessité de repasser le Code de la Route et la conduite</li>
                                </ul>
                                <p>
                                    Le permis ainsi obtenu sera un permis probatoire crédité de 6 points.
                                </p>
                                <p>
                                    Le permis de conduire peut être passé pendant la période d’invalidation. Conduire ne sera
                                    cependant possible qu’à l’issue de cette période.
                                </p>
                            </div>

                            <div>
                                <h2>Connaître son solde de points</h2>
                                <p>
                                    Il est indispensable de vérifier son solde de points afin de ne pas voir son permis invalidé.
                                    Celui-ci est consultable en ligne sur Telepoints.fr ou en demandant à la Préfecture un relevé
                                    d’information.
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
