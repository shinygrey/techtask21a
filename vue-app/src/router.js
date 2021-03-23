import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from './components/ViewHome.vue';
import ViewWhatWeDo from './components/ViewWhatWeDo.vue';
import ViewDigitalDivide from './components/ViewDigitalDivide.vue';
import ViewGetInvolved from './components/ViewGetInvolved.vue';
import ViewInsights from './components/ViewInsights.vue';
import ViewOurNetwork from './components/ViewOurNetwork.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{path: '/',	component: ViewHome},
		{path: '/what-we-do', component: ViewWhatWeDo},
		{path: '/digital-divide', component: ViewDigitalDivide},
		{path: '/get-involved',component: ViewGetInvolved},
		{path: '/our-network',component: ViewOurNetwork},
		{path: '/insights',component: ViewInsights},
	]
});
