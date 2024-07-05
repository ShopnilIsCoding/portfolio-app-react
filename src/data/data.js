import WorkIm from '../assets/projects/workImg.jpeg'
import RealEst from '../assets/projects/realestate.jpg'

export const data=[
    {
        id:1,
        name:"CraftGlow(Full Stack)",
        image:"https://i.ibb.co/12zQnP1/Screenshot-563.png",
        github:"https://github.com/ShopnilIsCoding/CraftGlow-Client",
        live:"https://craftglow-42054.firebaseapp.com/",
        desc: ["User Authentication: Log in or register using Google, GitHub, or email/password for easy and secure access.",
            "Craft Item Pages: Browse all craft items added to our database, with detailed pages for each item available exclusively to logged-in users.",
            
            "CRUD Functionality: Logged-in users can add, update, and delete their own items in our database, with React Sweet or Toast alerts for each CRUD operation.",
            
            "Custom CSS and Animations: Our website uses custom CSS and animated cards to provide an engaging and visually appealing user experience.",
            
            "Night and Day Mode Toggle: Customize your browsing experience with our night and day mode toggle feature.",
            
            "Category and Subcategory Sections: Explore our six main categories, each with corresponding subcategories and data for a comprehensive crafting experience."
            ]
    },
    {
        id:2,
        name:"premierresx(front-end)",
        image:"https://i.ibb.co/wSDhqch/Screenshot-564.png",
        github:"https://github.com/ShopnilIsCoding/PremierResX",
        live:"https://premierresx.web.app/",
        desc :["User Authentication: Users can register and log in using their email and password. Additionally, authentication is provided via GitHub and Google login using Firebase.",
            "Profile Management: Users can update their profile information, including name, and profile picture.",
           " Private Routes: Certain sections of the website, such as the 'For You' section and estate detail pages, are private routes accessible only to logged-in users.",
            "Real Estate Listings: The homepage displays six real estate listings to all website visitors, providing a glimpse of available properties.",
            "404 Error Page: A custom 404 error page is implemented to enhance user experience when encountering page not found errors.",
            "Dynamic Title: Each page of the website dynamically updates its title using React Helmet, providing a more informative and engaging browsing experience."]
    },
    {
        id:3,
        name:"Jobnest(Full Stack)",
        image:"https://i.ibb.co/t45Npz8/Screenshot-565.png",
        github:"https://github.com/ShopnilIsCoding/Jobnest-Client",
        live:"https://jobnestbd.web.app/",
        desc : ["Visually Appealing Design: Focused on color contrast, proper alignment, and customizing component styling for a unique look.",
            "Responsive Design: Made the website accessible on all devices - mobile, tablet, and desktop.",
           " Persistent Navbar and Footer: Keeping the navbar and footer visible on all pages except the 404 page, providing meaningful navigation and contact information.",
            "Login & Registration Systems: Implemented error handling and user-friendly forms for seamless user authentication.",
            "JWT Implementation: Secured certain routes with JSON Web Token (JWT) authentication to ensure user access control.",
            "Job Listings: Displayed job listings categorized by type, with detailed information and interactive features such as view details and apply buttons."]
    }


]