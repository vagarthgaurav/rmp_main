import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue'),
		meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/courses/:param',
		name: 'courses',
        component: () => import('../views/Courses.vue'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/success',
		name: 'success',
        component: () => import('../views/Success.vue'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/registerCourse/:id',
		name: 'registerCourse',
        component: () => import('../views/RegisterCourse'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/registerTrainer/',
		name: 'registerTrainer',
        component: () => import('../views/RegisterTrainer'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/registerTrainingCenter/',
		name: 'registerTrainingcenter',
        component: () => import('../views/RegisterTrainingCenter'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/register/',
		name: 'register',
        component: () => import('../views/RegisterStudent'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/reset-password/',
		name: 'resetpassword',
        component: () => import('../views/ResetPassword.vue'),
        meta: { title: 'Recup Mes Points - Trouvez un stage et récupérez 4 points' }
	},
	{
		path: '/stage-recuperation-points',
		name: 'stage-recuperation-points',
        component: () => import('../views/stage-recuperation-points'),
        meta: { title: 'Recup Mes Points - Stages de récupération' }
	},
	{
		path: '/stage-sensibilisation-securite-routiere',
		name: 'stage-sensibilisation-securite-routiere',
        component: () => import('../views/stage-sensibilisation-securite-routiere'),
        meta: { title: 'Recup Mes Points - Stage de sensibilisation à la sécurité routière' }
	},
	{
		path: '/stage-volontaire-stage-de-recuperation-de-points',
		name: 'stage-volontaire-stage-de-recuperation-de-points',
        component: () => import('../views/stage-volontaire-stage-de-recuperation-de-points'),
        meta: { title: 'Recup Mes Points - Stage volontaire de récupération de points' }
	},
	{
		path: '/stage-de-recuperation-de-points-obligatoire-en-permis-probatoire',
		name: 'stage-de-recuperation-de-points-obligatoire-en-permis-probatoire',
        component: () => import('../views/stage-de-recuperation-de-points-obligatoire-en-permis-probatoire'),
        meta: { title: 'Recup Mes Points - Stage de récupération de points obligatoire en permis probatoire' }
	},
	{
		path: '/les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere',
		name: 'les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere',
        component: () => import('../views/les-différents-stages-obligatoires-de-sensibilisation-a-la-securite-routiere'),
        meta: { title: 'Recup Mes Points - Stage de sensibilisation à la sécurité routière' }
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
		component: () => import('../views/fonctionnement-du-permis-a-points-et-solde-de-points.vue')
	},
	{
		path: '/le-permis-probatoire',
		name: 'le-permis-probatoire',
		component: () => import('../views/le-permis-probatoire.vue')
	},
	{
		path: '/le-code-de-la-route',
		name: 'le-code-de-la-route',
		component: () => import('../views/le-code-de-la-route.vue')
	},
	{
		path: '/que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire',
		name: 'que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire',
		component: () => import('../views/que-faire-en-cas-de-perte-ou-de-vol-de-votre-permis-de-conduire.vue')
	},
	{
		path: '/la-lettre-48si-invalidation-du-permis-de-conduire',
		name: 'la-lettre-48si-invalidation-du-permis-de-conduire',
		component: () => import('../views/la-lettre-48si-invalidation-du-permis-de-conduire.vue')
	},
	{
		path: '/la-lettre-48-n-stage-obligatoire',
		name: 'la-lettre-48-n-stage-obligatoire',
		component: () => import('../views/la-lettre-48-n-stage-obligatoire.vue')
	},
	{
		path: '/prendre-connaissance-de-son-solde-de-points',
		name: 'prendre-connaissance-de-son-solde-de-points',
		component: () => import('../views/prendre-connaissance-de-son-solde-de-points.vue')
	},
	{
		path: '/releve-integral-dinformation',
		name: 'releve-integral-dinformation',
		component: () => import('../views/releve-integral-dinformation.vue')
	}
];


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
	const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
	const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create, so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});

export default router;
