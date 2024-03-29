import Home from "../pages/home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

//interface is typscript specific and wont work in the console
interface RouteType {
    path:string,
    component: () => JSX. Element,
    name: string,
    protected: boolean
}
const routes: RouteType[] =[
    {
      path:"",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path:"/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
  
    },
    {
      path: "/about",
      component: About,
      name:"About",
      protected: false
    }
  ];
export default routes