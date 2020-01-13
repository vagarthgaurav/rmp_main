import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/courses/:param',
            name: 'courses',
            component: () => import('../views/Courses.vue')
        },
        {
            path: '/success',
            name: 'success',
            component: () => import('../views/Success.vue')
        },
        {
            path: '/registerCourse/:id',
            name: 'registerCourse',
            component: () => import('../views/RegisterCourse')
        },
        {
            path: '/stage-recuperation-points',
            name: 'stage-recuperation-points',
            component: () => import('../views/stage-recuperation-points')
        },
        {
            path: '/stage-sensibilisation-securite-routiere',
            name: 'stage-sensibilisation-securite-routiere',
            component: () => import('../views/stage-sensibilisation-securite-routiere')
        },
        {
            path: '/stage-volontaire-stage-de-recuperation-de-points',
            name: 'stage-volontaire-stage-de-recuperation-de-points',
            component: () => import('../views/stage-volontaire-stage-de-recuperation-de-points')
        },
        {
            path: '/stage-de-recuperation-de-points-obligatoire-en-permis-probatoire',
            name: 'stage-de-recuperation-de-points-obligatoire-en-permis-probatoire',
            component: () => import('../views/stage-de-recuperation-de-points-obligatoire-en-permis-probatoire')
        },
        {
            path: '/les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere',
            name: 'les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere',
            component: () => import('../views/les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere')
        },
        {
            path: '/de-quelles-facons-recuperer-des-points',
            name: 'de-quelles-facons-recuperer-des-points',
            component: () => import('../views/de-quelles-facons-recuperer-des-points.vue')
        },
        {
            path: '/le-programme-du-stage-de-recuperation-de-points',
            name: 'le-programme-du-stage-de-recuperation-de-points',
            component: () => import('../views/le-programme-du-stage-de-recuperation-de-points.vue')
        },
        {
            path: '/comment-trouver-un-stage',
            name: 'comment-trouver-un-stage',
            component: () => import('../views/comment-trouver-un-stage.vue')
        },
        {
            path: '/la-garantie-de-stage',
            name: 'la-garantie-de-stage',
            component: () => import('../views/la-garantie-de-stage.vue')
        },
        {
            path: '/le-bareme-des-infractions',
            name: 'le-bareme-des-infractions',
            component: () => import('../views/le-bareme-des-infractions.vue')
        },
        {
            path: '/les-sanctions-pour-alcool-au-volant',
            name: 'les-sanctions-pour-alcool-au-volant',
            component: () => import('../views/les-sanctions-pour-alcool-au-volant.vue')
        },
        {
            path: '/les-amendes-et-retraits-de-point-pour-les-exces-de-vitesse',
            name: 'les-amendes-et-retraits-de-point-pour-les-exces-de-vitesse',
            component: () => import('../views/les-amendes-et-retraits-de-point-pour-les-exces-de-vitesse.vue')
        },
        {
            path: '/les-infractions-a-la-circulation',
            name: 'les-infractions-a-la-circulation',
            component: () => import('../views/les-infractions-a-la-circulation.vue')
        },
        {
            path: '/les-amendes-relatives-au-stationnement',
            name: 'les-amendes-relatives-au-stationnement',
            component: () => import('../views/les-amendes-relatives-au-stationnement.vue')
        },
        {
            path: '/les-infractions-sur-l-autoroute',
            name: 'les-infractions-sur-l-autoroute',
            component: () => import('../views/les-infractions-sur-l-autoroute.vue')
        },
        {
            path: '/permis-de-conduire-et-autres-documents-relatifs-au-vehicule',
            name: 'permis-de-conduire-et-autres-documents-relatifs-au-vehicule',
            component: () => import('../views/permis-de-conduire-et-autres-documents-relatifs-au-vehicule.vue')
        },
        {
            path: '/la-signalisation-du-vehicule',
            name: 'la-signalisation-du-vehicule',
            component: () => import('../views/la-signalisation-du-vehicule.vue')
        },
        {
            path: '/le-retrait-de-points-du-permis-de-conduire',
            name: 'le-retrait-de-points-du-permis-de-conduire',
            component: () => import('../views/le-retrait-de-points-du-permis-de-conduire.vue')
        },
        {
            path: '/le-retrait-ou-la-suspension-du-permis-de-conduire',
            name: 'le-retrait-ou-la-suspension-du-permis-de-conduire',
            component: () => import('../views/le-retrait-ou-la-suspension-du-permis-de-conduire.vue')
        },
        {
            path: '/lannulation-du-permis-de-conduire',
            name: 'lannulation-du-permis-de-conduire',
            component: () => import('../views/lannulation-du-permis-de-conduire.vue')
        },
        {
            path: '/permis-invalide-ou-zero-point',
            name: 'permis-invalide-ou-zero-point',
            component: () => import('../views/permis-invalide-ou-zero-point.vue')
        },
        {
            path: '/la-conduite-sans-permis',
            name: 'la-conduite-sans-permis',
            component: () => import('../views/la-conduite-sans-permis.vue')
        },
        {
            path: '/la-contestation-dune-infraction',
            name: 'la-contestation-dune-infraction',
            component: () => import('../views/la-contestation-dune-infraction.vue')
        },
        {
            path: '/antai-un-outil-pour-vous-permettre-de-payer-contester-et-consulter-votre-infraction',
            name: 'antai-un-outil-pour-vous-permettre-de-payer-contester-et-consulter-votre-infraction',
            component: () =>
                import('../views/antai-un-outil-pour-vous-permettre-de-payer-contester-et-consulter-votre-infraction.vue')
        },
        {
            path: '/fonctionnement-du-permis-a-points-et-solde-de-points',
            name: 'fonctionnement-du-permis-a-points-et-solde-de-points',
            component: () =>
                import('../views/fonctionnement-du-permis-a-points-et-solde-de-points.vue')
        },
        {
            path: '/le-permis-probatoire',
            name: 'le-permis-probatoire',
            component: () =>
                import('../views/le-permis-probatoire.vue')
        },
        {
            path: '/le-code-de-la-route',
            name: 'le-code-de-la-route',
            component: () =>
                import('../views/le-code-de-la-route.vue')
        },
        {
            path: '/que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire',
            name: 'que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire',
            component: () =>
                import('../views/que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire.vue')
        },
        {
            path: '/la-lettre-48si-invalidation-du-permis-de-conduire',
            name: 'la-lettre-48si-invalidation-du-permis-de-conduire',
            component: () =>
                import('../views/la-lettre-48si-invalidation-du-permis-de-conduire.vue')
        },
        {
            path: '/la-lettre-48-n-stage-obligatoire',
            name: 'la-lettre-48-n-stage-obligatoire',
            component: () =>
                import('../views/la-lettre-48-n-stage-obligatoire.vue')
        },
        {
            path: '/prendre-connaissance-de-son-solde-de-points',
            name: 'prendre-connaissance-de-son-solde-de-points',
            component: () =>
                import('../views/prendre-connaissance-de-son-solde-de-points.vue')
        },
        {
            path: '/releve-integral-dinformation',
            name: 'releve-integral-dinformation',
            component: () =>
                import('../views/releve-integral-dinformation.vue')
        },


    ]
})
