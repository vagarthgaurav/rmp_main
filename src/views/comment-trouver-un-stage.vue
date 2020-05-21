<template>
    <div class="mt-2" >

        <v-container>
            <v-layout row wrap class="justify-space-around">
                <v-flex xs12 sm12 md9 >
                    <v-card class="mx-2">
                        <v-card-text>

                            <div class="mb-4">
                                <h1>Comment trouver un stage</h1>
                                <p>Votre permis de conduire peut se trouver fragilisé par une perte de points. En effet,
                                    vous
                                    pouvez finir par rencontrer des problèmes concernant votre mobilité. Ceci peut
                                    également
                                    impacter votre activité professionnelle. Cependant, vous pouvez avoir l’opportunité
                                    de
                                    récupérer des points en participant à un stage de récupération de points. C’est
                                    également la
                                    solution pour être de nouveau plus serein.
                                </p>
                                <p>
                                    Nous fédérons de nombreux centres agréés situés dans la France entière. Ceci nous
                                    permet
                                    de comptabiliser un nombre conséquent de stages et de connaître les places
                                    disponibles
                                    en
                                    temps réel. Ainsi, tout conducteur peut trouver un stage adapté aux dates qui lui
                                    conviennent où qu’il se trouve en France, même si la Préfecture annule la session
                                    désirée au
                                    départ.</p>
                            </div>

                            <div>
                                <h2>Trouver un stage sur notre site</h2>

                                <p>Afin de trouver les centres proches de votre domicile et de prendre connaissance des stages
                                    proposés, vous pouvez :</p>

                                <ul>
                                    <li>Entrer dans notre moteur de recherche votre code postal ainsi que le nom de votre
                                        ville.</li>
                                    <li>Cliquer sur votre département</li>
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

    h1{
        margin-bottom: 20px;
    }

    h2{
        margin-bottom: 10px
    }

    h3{
        margin-bottom: 5px;
    }


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
