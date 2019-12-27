<template>
    <div>
        <h4 class="subheading font-weight-bold text-xs-center">TOUTES LES INFRACTIONS</h4>

        <ul>
            <li class="subheading font-weight-black"><router-link to="/les-sanctions-pour-alcool-au-volant">Alcool au volant</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/les-amendes-et-retraits-de-point-pour-les-exces-de-vitesse">Excès de vitesse</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/les-infractions-a-la-circulation">Infractions à la circulation</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/les-amendes-relatives-au-stationnement">Arrêt de stationnement</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/les-infractions-sur-l-autoroute">Infractions sur l'autoroute</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/le-retrait-de-points-du-permis-de-conduire">Permis de conduire</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/le-permis-probatoire">Permis probatoire</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/la-signalisation-du-vehicule">Signalisation du véhicule</router-link></li>
            <li class="subheading font-weight-black"><router-link to="/l-equipement-du-vehicule">Equipement du véhicule</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "RightAsideInfractions"
    }
</script>

<style scoped>
    ul li{
        list-style-type: none;
        margin: 10px 0 10px 0;
    }
</style>
