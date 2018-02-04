import App from '../App';
import Home from '../app/home/index';
import Education from '../app/education/index';
import TokenStudio from '../app/tokenStudio/index';

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
      {
        path: '/tokenStudio',
        component: TokenStudio,
        exact: true,
      },
    ],
  },
];

export default routes;
