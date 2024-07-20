import ayla from '../../public/image/ayla.jpg';
import crefin from '../../public/image/crefin.jpg';
import realEstate from '../../public/image/real-estate.jpg';
import travel from '../../public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Vendor Management System',
        description: "The Vendor Management System is designed to streamline and automate the processes associated with managing vendor relationships. This system allows businesses to efficiently handle vendor data, track orders, manage contracts, and monitor performance. Key features include vendor onboarding, performance evaluation, compliance tracking, and automated communication. The system enhances operational efficiency, reduces manual errors, and provides a centralized platform for all vendor-related activities.",
        tools: ['React', 'TypeScript', 'Sequilize', 'ORM', 'MySQL', 'Node', 'Zustand', 'Express', 'Zod', 'Tailwind', 'Material-UI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Google Map Locations',
        description: 'I have created a complete project on Google Map where the user can Navigate from and to with the dispalying duration, distance and the correct routes.',
        tools: ['React', 'Tailwind CSS', "Google Maps-api", "TypeScript", "chakra-ui"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Time Meal Routine Planner',
        description: 'Me and my friend built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'OpenAI API', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'E-Commerce Admin Dashboard and Store',
        description: "This project provides a user-friendly platform for customers to explore, add items to their cart, and seamlessly complete their purchase. Utilizing modern web technologies, we aim to deliver a smooth and secure shopping experience. So this is the E-commerce store where all the list of products which is added in admin will reflect on the store. This is more about the process of selection, sorting and filter methods and from adding the items to cart then checking out with the use of stripe for the payment.This project provides a comprehensive control center for managing various aspects of our online store. Whether you're overseeing product details, managing categories, or handling orders, this admin dashboard streamlines your workflow.",
        tools: ['Next.js', 'React', 'Prisma-MySQL', 'Next Cloudinary', 'Zustand', 'React-hot-toast', 'Lucide-React', 'Zod', 'Tailwind', 'Stripe'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },