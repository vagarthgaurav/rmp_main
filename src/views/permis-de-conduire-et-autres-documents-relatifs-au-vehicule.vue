<template>
    <div class="mt-2">

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>
                            <div>
                                <h1>Permis de conduire et autres documents relatifs au véhicule</h1>
                                <p>
                                    On appelle permis de conduire l’autorisation administrative délivrée pour la conduite de
                                    certains véhicules terrestres à moteur.
                                </p>
                                <p>
                                    C’est le Préfet qui est chargé de délivrer le permis de conduire. Celui-ci est soumis à
                                    l’obtention d’un examen théorique pratique. Il existe diverses catégories qui correspondent
                                    aux véhicules que son titulaire a le droit de conduire.
                                </p>
                                <p>Le permis de conduire peut faire l’objet d’une :
                                </p>
                                <ul>
                                    <li>Rétention par les forces de l’ordre</li>
                                    <li>Suspension par le Préfet</li>
                                    <li>Suspension ou une annulation par un juge</li>
                                    <li>Invalidation par le ministère de l’Intérieur</li>
                                </ul>
                            </div>

                            <div>
                                <h2>3 sanctions pour conduite sans permis</h2>
                                <h3>Conduite avec un permis invalide (solde nul) ou avec un permis suspendu, retenu ou
                                    annulé.</h3>
                                <p>
                                    Si le permis de conduire est annulé sur décision judiciare ou invalidé suite à la perte de
                                    l’ensemble des points, le titulaire se voit interdit de conduire tout véhicule terrestre, quel
                                    que soit son type.
                                </p>
                                <p>
                                    Il est de même si le permis a été suspendu ou retenu.
                                </p>

                                <p>
                                    Conduire alors que le permis de conduire a été annulé, suspendu, invalidé ou retenu
                                    entraîne un retrait de 6 points et un passage au tribunal
                                </p>
                                <p>
                                    Conduire sans être titulaire du permis est un délit qui entraîne un emprisonnement d’1 an
                                    et une amende de 15 000 euros.
                                </p>
                                <p>
                                    Consécutivement à la modernisation de la justice du 21 ème siècle, et ce depuis le 1 er janvier
                                    2017, conduire sans posséder le permis de conduire consiste en un délit qui entraîne une
                                    amende forfaitaire de 800 euros qui peut être minorée à 640 euros ou majorée à 1 600
                                    euros.
                                </p>
                                <p>
                                    Les mineurs et les récidivistes ne sont pas concernés par cette amende.
                                    Il faut noter que la conduite avec un permis étranger qui n’est pas reconnu en France est
                                    considéré comme une conduite sans permis.
                                </p>
                            </div>

                            <div>
                                <h3>Conduite d’un véhicule sans être titulaire de la catégorie requise</h3>
                                <p>
                                    Conduire sans permis valide entraîne une perte de 3 points et une amende de 135 euros.
                                </p>

                                <h3>Le certificat d’immatriculation ou carte grise</h3>
                                <p>
                                    Le certificat d’immatriculation est indispensable à tout propriétaire de véhicule désireux de
                                    le mettre en circulation pour la première fois. La demande s’effectue auprès de la Préfecture
                                    et nécessite la présentation d’une pièce d’identité et d’un justificatif de domicile. Le
                                    certificat est établi au nom de la personne physique qui en fait la demande. Il correspond à
                                    la catégorie du véhicule concerné.
                                </p>
                                <p>
                                    Conduire sans la carte grise du véhicule entraîne une amende de 135 euros.
                                </p>
                            </div>

                            <div>
                                <h3>L’assurance du véhicule</h3>
                                <p>
                                    Afin d’avoir l’autorisation de circuler avec une voiture ou une moto, il est obligatoire de
                                    souscrire à une assurance. 
                                </p>
                                <p>
                                    Conduire sans assurance est un délit qui entraîne une suspension du permis, la confiscation
                                    du véhicule et une amende pénale de 3 750 euros.
                                </p>
                                <p>
                                    La loi de modernisation de la justice prévoit une amende forfaitaire de 500 euros sans
                                    passage au tribunal.
                                </p>
                            </div>

                            <div>
                                <h3>Art L 211-1 du code des assurances</h3>
                                <p>
                                    Toute personne physique ou toute personne morale autre que l’Etat, dont la responsabilité
                                    civile peut être engagée en raison de dommages subis par des tiers résultant d’atteintes aux
                                    personnes ou aux biens dans la réalisation desquels un véhicule est impliqué, doit, pour faire
                                    circuler celui-ci, être couverte par une assurance garantissant cette responsabilité, dans les
                                    conditions fixées par décret en Conseil d’Etat.
                                </p>
                                <p>
                                    Tout conducteur qui n’a plus l’autorisation de conduire ne peut plus souscrire à une
                                    assurance auto. En effet, l’ensemble des garanties est exclu si le conducteur impliqué dans
                                    un accident ne possède plus le permis relatif au véhiculé accidenté. Il est de même pour les
                                    détenteurs de 2 roues motorisés ne possédant pas le BSR.
                                </p>
                            </div>

                            <div>
                                <h3>Le contrôle technique</h3>
                                <p>A partir de ses 4 ans, un véhicule doit obligatoirement passer le contrôle technique tous les 2
                                    ans.
                                </p>
                                <p>
                                    Conduire sans contrôle technique à jour entraîne une amende de 135 euros.
                                </p>
                                <p>
                                    Le contrôle technique est obligatoire à partir de la 4ème année du véhicule et ensuite tous
                                    les 2 ans.</p>
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
