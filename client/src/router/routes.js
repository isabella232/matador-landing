import App from '../App';
import Home from '../app/home/index';
import Education from '../app/education/index';


const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home, // Landing Page
        exact: true,
      },
      {
        path: '/education',
        component: Education, // Education Page
        exact: true,
      },
    ],
  },
];

export default routes;
