import home from '../component/pages/home/home'
import detail from '../component/pages/detail/detail'
import comments from '../component/pages/comments/comments'
import collect from "../component/pages/collect/collect"
var routes=[
    {
        path:"/home",
        component:home
    },
    {
        path:"/detail",
        component:detail
    },
    {
        path:"/comments/:id",
        component:comments
    },
    {
        path:"/collect",
        component:collect
    },
    {
        path:"*",
        redirect:"/home"
    }
]
export default routes;