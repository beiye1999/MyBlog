import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import friendChain from './pages/friendChain'

const routes = [
{
	path:'/',
    component:home
},
{
	path:'/home',
	name:'home',
    component:home
},
{
    path:'/about',
    name:'about',
    component:about
},
{
    path:'/archive',
    name:'archive',
    component:archive
},
{
    path:'/tag/:name',
    name:'tag',
    component:archive
},
{
    path:'/article',
    name:'article',
    component:article
},
{
    path:'/friendChain',
    name:'friendChain',
    component:friendChain
},
{
    path:'*',
    redirect:'/'
}
]
export default routes;
