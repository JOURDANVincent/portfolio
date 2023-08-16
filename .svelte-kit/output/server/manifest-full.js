export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "my-developer-portfolio/_app",
	assets: new Set([".nojekyll","favicon.ico","fonts/Rajdhani-Bold.ttf","fonts/Rajdhani-Regular.ttf","images/png/form/arobase.png","images/png/form/message.png","images/png/form/user.png","images/png/form/user2.png","images/screenshot_app/movie_hunter_1.webp","images/screenshot_app/movie_hunter_2.webp","images/screenshot_app/movie_hunter_3.webp","images/screenshot_app/what_around_1.webp","images/screenshot_app/what_around_2.webp","images/screenshot_app/what_around_3.webp","images/screenshot_app/what_around_4.webp","images/screenshot_app/what_around_5.webp","images/screenshot_app/ymd_1.webp","images/screenshot_app/ymd_2.webp","images/screenshot_app/ymd_3.webp","images/screenshot_app/ymd_4.webp","images/screenshot_app/ymd_5.webp","images/screenshot_app/ymd_6.webp","images/screenshot_web/BuyTheE-Way.webp","images/screenshot_web/BuyTheEway.webp","images/screenshot_web/calendar.webp","images/screenshot_web/calendarManu.webp","images/screenshot_web/Dynamique-Mobile.webp","images/screenshot_web/GeneralHospital.webp","images/screenshot_web/PageDeGarde-CV-Mobile.webp","images/screenshot_web/PageDeGarde-Wordpress-Desktop.webp","images/screenshot_web/premierCV.webp","images/screenshot_web/PremierCVResponsive.webp","images/screenshot_web/ProjetVinyle.webp","images/screenshot_web/Screenshot-CV-Linkedin.webp","images/screenshot_web/trocTaBière.webp","images/screenshot_web/TTCB.webp","images/screenshot_web/TTCB2.webp","images/screenshot_web/VSPROD.webp","images/screenshot_web/wordpress-Marama.webp","images/svg/brand_icons/angular.svg","images/svg/brand_icons/angular2.svg","images/svg/brand_icons/bootstrap.svg","images/svg/brand_icons/css-3.svg","images/svg/brand_icons/express-js.svg","images/svg/brand_icons/firebase.svg","images/svg/brand_icons/hibernate.svg","images/svg/brand_icons/html5.svg","images/svg/brand_icons/ionic.svg","images/svg/brand_icons/java.svg","images/svg/brand_icons/javascript.svg","images/svg/brand_icons/linux.svg","images/svg/brand_icons/mysql.svg","images/svg/brand_icons/next-js.svg","images/svg/brand_icons/nodejs.svg","images/svg/brand_icons/nodejs2.svg","images/svg/brand_icons/php.svg","images/svg/brand_icons/react-native.svg","images/svg/brand_icons/react.svg","images/svg/brand_icons/realm-io.svg","images/svg/brand_icons/realm.svg","images/svg/brand_icons/redux.svg","images/svg/brand_icons/sequelize.svg","images/svg/brand_icons/spring-boot.svg","images/svg/brand_icons/svelte.svg","images/svg/brand_icons/typescript.svg","images/svg/brand_icons/vuejs.svg","images/svg/card/desktop.svg","images/svg/card/expand.svg","images/svg/card/mobile.svg","images/svg/section/about.svg","images/svg/section/contact.svg","images/svg/section/experience.svg","images/svg/section/home.svg","images/svg/section/progress.svg","images/svg/section/project.svg","images/svg/section/skill.svg","images/svg/static/angular_js.svg","images/svg/static/bootstrap.svg","images/svg/static/css_3.svg","images/svg/static/express_js.svg","images/svg/static/html_5.svg","images/svg/static/java.svg","images/svg/static/javascript.svg","images/svg/static/linux.svg","images/svg/static/mongo_db.svg","images/svg/static/node_js.svg","images/svg/static/php.svg","images/svg/static/react_native.svg","images/svg/static/svelte.svg","images/svg/static/typescript.svg","robots.txt","styles/styles.css","vincent-jourdan_about.png","vincent-jourdan_home.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.4b17beb4.js","app":"_app/immutable/entry/app.d72da455.js","imports":["_app/immutable/entry/start.4b17beb4.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/singletons.3ec1ba3e.js","_app/immutable/chunks/index.a448b83c.js","_app/immutable/entry/app.d72da455.js","_app/immutable/chunks/scheduler.f6fc8aee.js","_app/immutable/chunks/index.16182d92.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/skill",
				pattern: /^\/skill\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
