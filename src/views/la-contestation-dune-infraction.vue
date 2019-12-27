<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>La contestation d’une infraction</h1>
                                <p>
                                    Tout usager a le droit de contester une infraction. Il doit cependant s’assurer d’être dans son
                                    bon droit au risque de voir sa condamnation finalement alourdie.
                                </p>
                                <h2>Dans quels cas contester une infraction</h2>
                                <ul>
                                    <li>Véhicule vendu ou volé</li>
                                    <li>Véhicule prêté ou loué</li>
                                    <li>Contestation de la réalité de l’infraction</li>
                                </ul>
                                <p>
                                    La contestation de la contravention n’est plus possible une fois qu’elle a été reconnue ou
                                    que l’amende forfaitaire a été payée.
                                </p>
                                <p>
                                    Les procédures de contestation dépendent de la façon dont l’infraction a été constatée.
                                </p>
                                <p>
                                    Veillez à bien suivre l’ensemble des indications que vous trouverez sur l’avis de
                                    contravention qui vous a été envoyé (contrôle automatisé, procès verbal électronique) ou
                                    remis en main propre (verbalisation par les forces de l’ordre).
                                </p>
                            </div>

                            <div>
                                <h2>Les délais pour contester une amende</h2>
                                <p>Il est impératif de respecter les délais de paiement afin de contester un PV :</p>
                                <ul>
                                    <li>45 jours pour un avis de contravention</li>
                                    <li>3 mois pour un avis d’amende majorée</li>
                                    <li>1 mois pour une amende en provenance d’un pays étranger</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Contester une infraction</h2>
                                <p>
                                    La demande de contestation peut être effectuée sur internet sur le site de l’ANTAI (Agence
                                    Nationale de Traitement Automatisé des Infractions).
                                </p>
                                <p>
                                    Elle peut aussi être envoyée à :
                                </p>
                                <p>
                                    L’officier du Ministère Public
                                    Contrôle Automatisé
                                    35911 RENNES Cedex 9
                                </p>
                            </div>

                            <div>
                                <h2>Il existe 2 sortes de contestations :</h2>
                                <ul>
                                    <li>Demande en exonération : le conducteur n’est pas celui qui a commis l’infraction,</li>
                                    <li>Contestation de la véracité de l’infraction : le conducteur doit s’acquitter d’une
                                        consignation de 68 euros.</li>
                                </ul>
                                <p>
                                    Afin de contester une contravention sur la forme ou le fond, vous devez :
                                </p>
                                <ul>
                                    <li>Veiller à bien cocher la case « ne reconnaît pas l’infraction » </li>
                                </ul>
                                <p>
                                    Vous devez ensuite définir quel cas vous correspond :
                                </p>
                            </div>

                            <div>
                                <h2>Cas n°1 : le véhicule ne vous appartient pas</h2>
                                <p>Vous avez cédé ou vendu votre véhicule, ou bien celui-ci vous a été volé ou on a usurpé
                                    votre numéro d’immatriculation :</p>
                                <ul>
                                    <li>Munissez-vous des pièces justificatives suivantes : le dépôt de plainte si le véhicule a
                                        été volé, la prise en charge pour destruction ou certificat de cession (mentionnez les
                                        coordonnées du nouveau propriétaire),</li>
                                    <li>cochez le cas n°1,</li>
                                    <li>joignez l’original de votre avis de contravention,</li>
                                    <li>datez et signez votre demande.</li>
                                </ul>

                                <h2>Cas n°2 : le véhicule était loué ou sous la responsabilité de quelqu’un d’autre au moment
                                    de l’infraction</h2>
                                <ul>
                                    <li>Désignez la personne qui se servait du véhicule au moment de l’infraction,</li>
                                    <li>remplissez le formulaire en cochant le cas n°2,</li>
                                    <li>joignez l’original de l’avis de contravention.</li>
                                </ul>

                                <h2>Cas n°3 : contestation de la véracité de l’infraction</h2>
                                <p>
                                    Vous devez alors prouver les motifs de votre réclamation. Pour cela, veillez à :
                                </p>
                                <ul>
                                    <li>remplir le formulaire</li>
                                    <li>cocher le cas n°3. Indiquez alors vos motivations dans la case associée. Soyez bien
                                        précis sur les faits évoqués</li>
                                    <li>payer la consignation. Celle-ci n’entraîne pas de retrait de points.</li>
                                </ul>
                                <p>
                                    Toute contestation qui n’est pas justifiée sera considérée comme irrecevable. La
                                    consignation sera alors débitée.
                                </p>
                            </div>

                            <div>
                                <h2>Les choses à ne pas faire lors de la contestation d’une infraction</h2>
                                <ul>
                                    <li>Ne réglez pas l’amende forfaitaire. Vous ne pourrez alors plus contester le PV et
                                        risquez de perdre des points sur votre permis. En effet, payer l’infraction équivaut à
                                        la reconnaître.</li>
                                    <li>Ne procéder à la contestation d’une infraction que si vous êtes absolument certain
                                        de vous trouver dans votre bon droit.</li>
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
