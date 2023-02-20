import { Review } from "../common";

export const whatsAppUrl: string = `https://wa.me/+2348108816975`;
export type Faq = {
  question: string;
  answers: string[];
};

export const faqs: Faq[] = [
  {
    question: "How do I get started on the website?",
    answers: [
      "Visit  the website chinosexchange.con and click on sign up",
      "Put in your information as requested",
      "Verify your email address with the link sent to you email",
    ],
  },
  {
    question: "How do I get started on the website?",
    answers: [
      "Visit  the website chinosexchange.con and click on sign up",
      "Put in your information as requested",
      "Verify your email address with the link sent to you email",
    ],
  },
  {
    question: "How do I get started on the website?",
    answers: [
      "Visit  the website chinosexchange.con and click on sign up",
      "Put in your information as requested",
      "Verify your email address with the link sent to you email",
    ],
  },
];

export const appReviews: Review[] = [
  {
    fullName: "Collins Obinna",
    stars: 4.2,
    review:
      "Good user experience, awesome user interface and simple to use. I can attest to this platform anytime any day",
  },
  {
    fullName: "Bob Daniel",
    stars: 5,
    review:
      "I have been transacting on this website for long and I can boldly say they are good to go",
  },
  {
    fullName: "Blake Joshua",
    stars: 4.2,
    review:
      "Good user experience, awesome user interface and simple to use. I can attest to this platform anytime any day.",
  },
  {
    fullName: "Princess Amaka",
    stars: 5,
    review:
      "Fast and easy transaction. When you initiate a transaction customer services are always available to give you responses.",
  },
];
