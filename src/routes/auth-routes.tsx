import { ReactNode } from "react";
import { Home, SignUP, SignIn, ForgotPassword } from "../pages";
import AboutUs from "../pages/about-us";
import Airtimes from "../pages/airtimes";
import ContactUs from "../pages/contact-us";
import Cryptos from "../pages/crytops";
import EmailVerificationPage from "../pages/email-verification";
import Faq from "../pages/faq";
import GiftCards from "../pages/giftcards";



export type RouteType = {
    path: string;
    component: ReactNode
}

const authRoutes: RouteType[] = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/about-us',
        component: <AboutUs />
    },
    {
        path: '/airtimes',
        component: <Airtimes />
    },
    {
        path: '/contact-us',
        component: <ContactUs />
    },
    {
        path: '/cryptos',
        component: <Cryptos />
    },
    {
        path: '/faqs',
        component: <Faq />
    },
    {
        path: '/giftcards',
        component: <GiftCards />
    },
    
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
        path: '/verify/:code',
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