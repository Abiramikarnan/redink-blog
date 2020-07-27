import Login from './components/login';
import Home from './components/Home';
import Cards from './components/cards';
import Author from './components/Authors';
import Todos from './components/Todos'; 
import About from './components/About';

const Routes = [
    {

      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/Login",
        name: "Login",
        component: Login
      },
      {
        path: "/Cards",
        name: "Cards",
        component: Cards
      },
      {
        path: "/Author",
        name: "Author",
        component: Author
      },
      {
        path: "/Todoss",
        name: "Todos",
        component: Todos
      },
      {
        path: "/About",
        name: "About",
        component: About
      },
]

export default Routes;