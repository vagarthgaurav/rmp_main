<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div>
                                <h1>ANTAI : un outil pour vous permettre de payer, contester et consulter votre infraction</h1>

                                <p>
                                    Toutes les informations relatives au paiement, la contestation ou la demande d’exonération
                                    d’une contravention sont inscrites sur l’avis de contravention. Elles sont toutes traitées par
                                    l’ANTAI (Agence Nationale des Traitements Automatisés des Infractions)
                                </p>
                            </div>

                            <div>
                                <h2>L’avis de contravention mentionne aussi les détails concernant l’infraction :</h2>
                                <ul>
                                    <li>Date à laquelle l’avis de contravention a été émis</li>
                                    <li>Date, lieu et sens de circulation de l’infraction</li>
                                    <li>Libellé de l’infraction</li>
                                    <li>Identification de l’agent ayant procédé à la verbalisation</li>
                                    <li>Marge technique (5 km/h sont retirés de la vitesse mesurée pour tout excès de
                                        vitesse)</li>
                                    <li>Conséquences pour le permis de conduire : retrait de points, suspension…</li>
                                    <li>Délais de paiement</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Payer son amende en ligne</h2>
                                <p>
                                    La contravention peut être payée en ligne, même si l’amende forfaitaire a été minorée ou
                                    majorée.
                                </p>
                                <p>
                                    Les différents modes de paiement à votre disposition (CB, chèque, timbre amende physique
                                    ou dématérialisé, espèces) sont mentionnés sur la Notice de Paiement de couleur orange. Le
                                    règlement en ligne sur le site amendes.gouv.fr est simple et rapide et augmente de 15 jours
                                    le délai de l’amende forfaitaire minorée. En effet, vous aurez juste à préciser le numéro de
                                    télépaiement inscrit sur la carte de prépaiement.
                                </p>
                            </div>

                            <div>
                                <h2>Le formulaire de requête en exonération</h2>
                                <p>
                                    Il s’agit du formulaire bleu que vous devez envoyer dans un délai de 45 jours.
                                </p>
                                <p>
                                    Le PV est toujours établi au nom de propriétaire du véhicule. S’il ne se trouvait pas au volant
                                    au moment de l’infraction (véhicule volé, détruit ou cédé, prêté ou loué), il peut faire une
                                    demande en exonération.
                                </p>
                            </div>

                            <div>
                                <h2>Contester un PV en ligne</h2>
                                <p>Un autre motif peut être exposé. Le conducteur se verra tout de même dans l’obligation de
                                    régler une consignation d’un montant de 68 euros.</p>
                                <p>Les démarches relatives à la contestation d’une amende doivent être effectuées :</p>
                                <ul>
                                    <li>sur le site de l’ANTAI</li>
                                    <li>par courrier postal :
                                        L’officier du ministère public
                                        Contrôle Automatisé
                                        CS 41101
                                        35911 RENNES Cedex 9</li>
                                </ul>
                                <p>
                                    Il est impératif de se trouver dans son bon droit afin de contester une contravention.
                                </p>
                            </div>

                            <div>
                                <h2>Suivi du dossier d’infraction</h2>
                                <p>Le suivi du dossier peut être fait sur internet.</p>
                                <p>Le conducteur doit alors posséder son avis de contravention afin d’indiquer :</p>
                                <ul>
                                    <li>la date et les 10 chiffres qui composent numéro de l’avis de contravention</li>
                                    <li>son nom de famille</li>
                                    <li>sa raison sociale</li>
                                    <li>son numéro d’immatriculation</li>
                                </ul>
                                <p>
                                    Les renseignements utiles pour une amende majorée :
                                </p>
                                <ul>
                                    <li>les 12 chiffres de la référence de l’avis</li>
                                    <li>le nom de famille</li>
                                    <li>la raison sociale</li>
                                    <li>le numéro d’immatriculation</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Demander la photo de l’infraction</h2>
                                <p>La demande du cliché de contrôle automatisé vous permettra de vous assurer d’être dans
                                    votre bon droit. Elle peut s’effectuer :</p>
                                <ul>
                                    <li>sur la page correspondante sur internet.</li>
                                    <li>Par voie postale :
                                        Centre Automatisé de Constatation des Infractions Routières
                                        Service Photographie
                                        CS 72202
                                        35094 RENNES CEDEX 9</li>
                                </ul>
                                <p>Pensez à joindre à votre demande :</p>
                                <ul>
                                    <li>un lettre simple qui stipule que vous désirez que vous soit adressée la copie de la
                                        photo de l’infraction</li>
                                    <li>une photocopie d’une pièce d’identité comprenant une photographie</li>
                                    <li>une photocopie de l’avis de contravention</li>
                                    <li>une photocopie du certificat d’immatriculation du véhicule concerné</li>
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
