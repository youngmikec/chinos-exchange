import { ReactNode } from "react";
import { Home, SignUP, SignIn,ForgotPassword } from "../pages";
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
    {
      path: '/forgot-password',
      component:<ForgotPassword />
    },
    // {
    //     path: '*',
    //     component: <NotFoundPage/>
    // }
]

export default authRoutes;