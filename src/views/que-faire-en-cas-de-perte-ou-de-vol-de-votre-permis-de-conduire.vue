<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>Que faire en cas de perte ou de vol de votre permis de conduire</h1>
                                <p>Perdre don permis de conduire ou se le faire voler engendre une situation
                                    compliquée. En effet, il doit être obligatoirement présenté aux forces de l’ordre en
                                    cas de contrôle.</p>
                                <p>Voici les démarches à suivre si votre permis à été volé ou perdu.</p>
                            </div>

                            <div>
                                <h2>Comment refaire un permis perdu en France</h2>
                                <p>
                                    Les démarches sont à effectuer sur le site internet de l’ANTS, en même temps que la
                                    déclaration de perte et la demande de permis.
                                </p>
                                <p>
                                    Il faut fournir les documents suivants :
                                </p>
                                <ul>
                                    <li>Un code photo d’identité</li>
                                    <li>Une pièce d’identité</li>
                                    <li>Un justificatif de domicile</li>
                                </ul>
                                <p>
                                    La somme de 25 euros doit être réglée en ligne afin d’obtenir le nouveau permis.
                                </p>
                                <p>
                                    L’attestation de perte, valable 2 mois, est téléchargeable dans votre espace ANTS.
                                    Vous aurez alors l’autorisation de conduire en attendant votre permis
                                </p>
                                <p>
                                    La fabrication du permis peut être suivie en ligne.
                                </p>
                            </div>

                            <div>
                                <h2>Comment procéder si mon permis de conduire a été perdu à l’étranger</h2>

                                <h3>Vous habitez dans le pays :</h3>
                                <ul>
                                    <li>Adressez-vous aux autorités compétentes afin de recevoir un récépissé de
                                        perte de permis puis un nouveau permis dans un délai de 2 mois</li>
                                    <li>Si vous vivez dans ce pays depuis plus de 18 mois, vous devrez demander un
                                        permis local</li>
                                </ul>
                            </div>

                            <div>
                                <h3>Vous êtes en vacances dans le pays :</h3>
                                <ul>
                                    <li>Adressez-vous aux autorités locales qui vous indiqueront les diverses
                                        démarches à entreprendre</li>
                                </ul>
                                <h2>Comment procéder si mon permis de conduire a été volé</h2>
                                <p>
                                    Dans tous les cas, rapprochez-vous des autorités locales (commissariat ou
                                    gendarmerie) afin de signaler le vol de votre permis et de déposer plainte. Elles vous
                                    indiqueront les démarches nécessaires à suivre.
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
