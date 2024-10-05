import hero from "../assets/hero.png"
import intro1 from '../assets/intro1.png'
import intro2 from '../assets/intro2.png'
import intro3 from '../assets/intro3.png'
import intro4 from '../assets/intro4.png'
import intro5 from '../assets/intro5.jpg'
import intro6 from '../assets/intro6.png'

export const LINKS = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "REVIEWS", id: "reviews" },
  { name: "CONTACT", id: "contact" },
];

export const ABOUT = {
  aboutUsText:
    "Life's journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.",
  aboutUsName: "Emma Olsen",
  aboutUsTitle: "Health and Wellness Coach",
  aboutUsText2: "It is ideal for health professionals to establish an online presence and connect with their audience effectively. Whether you’re a seasoned health coach or just starting, it offers a hassle-free solution to create a compelling online presence and elevate your coaching business.",
};

export const REVIEWS = {
  reviewsImages: [
    {
      src: intro5,
      alt: "newlyweds4",
      delay: 0.5,
    },
    {
      src: intro6,
      alt: "newlyweds5",
      delay: 0.6,
    },
  ],
  reviewsTitle: "Reviews",
  reviewsSubtitle: "Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinaunc sapien egestas at cursus. ",
  reviewsName: "Elizabeth Murray",
  reviewsMember: "Member",
  reviewsText: "Life's journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress."
}
