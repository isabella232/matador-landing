import App from '../App';
import Home from '../app/Home/index';
import Education from '../app/Education/EducationPage';


const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: HomePage, // Landing Page
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
