<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h2>Prendre connaissance de son solde de points</h2>
                                <p>
                                    Les points présents sur le permis de conduire permettent de pouvoir circuler légalement. Le
                                    capital se retrouve fragilisé suite à des pertes de points consécutives à des infractions. À
                                    terme, le permis peut être invalidé.
                                </p>
                                <p>
                                    Consultez le site internet Télépoints ou demandez un relevé d’information intégrale afin de
                                    prendre connaissance de votre solde de points. L’évolution du solde dépend des délais de
                                    comptes et de récupération. Il peut donc évoluer rapidement.
                                </p>
                            </div>

                            <div>
                                <h2>Consulter le solde de points de son permis</h2>
                                <p>
                                    L’accès aux informations administratives relatives à votre permis de conduire peut se faire à
                                    votre initiative ou à celle de l’administration.
                                </p>
                                <p>Demandez un relevé intégral d’information :</p>
                                <ul>
                                    <li>Par voie postale : faite une demande écrite accompagnée de la copie de votre permis
                                        de conduire et de celle d’une pièce d’identité valide. Joignez aussi enveloppe
                                        affranchie au tarif recommandé avec demande d’avis de réception, ainsi que la liasse
                                        délivrée par la Poste permettant la distribution du recommandé.</li>
                                    <li>Par France Connect : ce nouveau service a été instauré par l’État afin de permettre
                                        aux français d’effectuer certaines démarches en ligne, auprès des services publics,
                                        grâce à un seul et unique identifiant. Connectez-vous en utilisant votre identifiant des
                                        Impôts, Ameli ou bien votre identité numérique de La Poste.</li>
                                    <li>Sur le site telepoints.info : si vous avez déjà reçu votre relevé intégral d’information,
                                        consultez le solde de vos points du permis de conduire sur ce site. Utilisez vos codes
                                        d’accès pour consulter vos points quand vous le souhaitez.</li>
                                </ul>
                                <p>
                                    Suite à la fermeture des services permis de conduire en Préfecture, il est impossible
                                    d’effectuer une demande sur place.
                                </p>
                            </div>
                            <div>
                                <h2>Informations reçues à l’initiative du Fichier National du Permis de Conduire</h2>
                                <p>L’administration peut vous communiquer certaines informations relatives à votre permis de
                                    conduire automatiquement :</p>
                                <ul>
                                    <li>la lettre simple 48 : elle indique le solde de points</li>
                                    <li>la lettre recommandée 48M : elle est envoyée lorsque le solde de points est inférieur
                                        ou égal à 6 points,</li>
                                    <li>la lettre recommandée avec accusé de réception 48N : elle est envoyée
                                        au conducteur en période probatoire sanctionné par un retrait de 3 ou 4 points, suite
                                        à une seule infraction</li>
                                    <li>la lettre recommandée avec accusé de réception 48SI : elle signifie au conducteur
                                        que son permis a été invalidé</li>
                                    <li>la lettre simple 46 : elle signifie au conducteur qu’il a récupéré tous ses points</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Récupérer des points</h2>
                                <p>
                                    Un stage de récupération de points permet de récupérer 4 points et d’éviter ainsi que le
                                    permis soit invalidé suite à des pertes de points consécutives à des infractions au Code de la
                                    Route. Il doit être suivi dans un centre agréé au moment où le solde atteint 6 points.
                                </p>
                                <p>
                                    Chaque conducteur peut suivre un stage une fois par an.
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
