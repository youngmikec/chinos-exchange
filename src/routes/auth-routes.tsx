import { ReactNode } from "react";
import { Home, SignUP, SignIn } from "../pages";
import EmailVerificationPage from "../pages/email-verification";


export type RouteType = {
    path: string;
    component: ReactNode
}

const authRoutes: RouteType[] = [
    {
        path: '/',
        component: <Home />,
    },
    // {
    //     path: '/about-us',
    //     component: <AboutUs/>
    // },
    
    {
        path: '/sign-up',
        component: <SignUP/>
    },
    {
        path: '/sign-in',
        component: <SignIn/>
    },
    {
        path: '/verify',
        component: <EmailVerificationPage />
    },
    // {
    //     path: '*',
    //     component: <NotFoundPage/>
    // }
]

export default authRoutes;