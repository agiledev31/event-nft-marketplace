import PageError from "../views/pages/404Error";
import PageActivity from "../views/pages/activity";
import PageArticleCreate from "../views/pages/Article/create";
import PageArticle from "../views/pages/Article";
import PageAuthor from "../views/pages/author";
import PageBlog from "../views/pages/blog";
import PageCollection from "../views/pages/collection";
import PageContact from "../views/pages/contact";
import PageEventCardCreate from "../views/pages/event/create_eventcard";
import PageEventCard from "../views/pages/event/eventcard";
import PageExplorer from "../views/pages/explorer";
import PageForgetpassword from "../views/pages/forget";
import Home from "../views/pages/home";
import PagePrivacy from "../views/pages/privacy";
import PageSignin from "../views/pages/signin";
import PageSignup from "../views/pages/signup";
import PageMessageCreate from "../views/pages/message/create";
import PageResetPassword from "../views/pages/reset_password";
import PageAdminActivity from "../views/pages/admin/activity";
import PageAdminUsers from "../views/pages/admin/users";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/error',
        element: <PageError />
    },
    {
        path: '/article/create',
        element: <PageArticleCreate />
    },
    {
        path: '/article/:id',
        element: <PageArticle />
    },
    {
        path: '/admin/activity',
        element: <PageAdminActivity />
    },
    {
        path: '/admin/users',
        element: <PageAdminUsers />
    },
    {
        path: '/activity',
        element: <PageActivity />
    },
    {
        path: '/signin',
        element: <PageSignin />
    },
    {
        path: '/signup',
        element: <PageSignup />
    },
    {
        path: '/forget',
        element: <PageForgetpassword />
    },
    {
        path: '/reset_password/:code',
        element: <PageResetPassword />
    },
    {
        path: '/privacy',
        element: <PagePrivacy />
    },
    {
        path: '/blog',
        element: <PageBlog />
    },
    {
        path: '/contacts',
        element: <PageContact />
    },
    {
        path: '/explorer',
        element: <PageExplorer />
    },
    {
        path: '/collection',
        element: <PageCollection />
    },
    
    {
        path: '/author',
        element: <PageAuthor />
    },
    {
        path: '/event/eventcard/create',
        element: <PageEventCardCreate />,
    },
    {
        path: '/event/eventcard/:id',
        element: <PageEventCard />,
    },
    {
        path: '/message/create',
        element: <PageMessageCreate />,
    },
    {
        path: '*',
        element: <PageError />,
    },
    

]

export default routes;