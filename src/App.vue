<template>
    <v-app>

        <Navbar/>

        <v-content>
            <transition name="router-anim">
                <router-view/>
            </transition>

        </v-content>
    </v-app>
</template>

<script>

    import Navbar from '@/components/NavBar'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>
    /*@import "https://cdn.jsdelivr.net/npm/animate.css@3.7.2";*/

    .page {
        position: fixed;
        width: inherit;
    }

    .router-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }

    .router-anim-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50px);
            opacity: 0;
        }
    }

    @keyframes coming {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

</style>
