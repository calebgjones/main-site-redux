import { loremIpsum, LoremIpsum } from "lorem-ipsum";
import { DateDiff } from "../Utilities/DateDiff";

var lorem = new LoremIpsum({ 
    returnParagraphs: true
});

const dt1 = new Date("2000-09-15"); //Birth date
const dt2 = new Date(); //Current date

const Content = [
    {
        id: 0,
        section: "home",
        header: "Hey there!",
        body: "Thanks for stopping by! I’m excited to share my journey in web development, especially my passion for User Experience (UX) design and development.\n\nI love making websites more user-friendly and enjoyable. Currently, I work as a Technical Support Analyst, using my problem-solving skills to tackle technical issues. My goal is to transition into a role where I can dive deeper into UX design, helping to create seamless and engaging digital experiences.\n\nWhen I’m not working, you’ll find me hiking, bouldering, drawing, painting, or spending time with friends and family. These activities keep me inspired and balanced.\n\nThis site is all about my growth in web development. Check out my projects, insights into my UX process, and more.\n\nI hope you enjoy exploring. Feel free to reach out if you have any questions or just want to connect!"
    },
    {
        id: 1,
        section: "about",
        header: "About Me",
        body: "I'm " + DateDiff(dt1, dt2) + ", and I'm a web developer with a strong passion for User Experience (UX) design and development. Currently, I work as a Technical Support Analyst, but my love for technology began at an early age. Around 10-12 years old, I started coding in HTML and CSS, later expanding into JavaScript, C#, C++, and Python.\n\nOne of my first hands-on programming experiences was developing Minecraft mods, which introduced me to fundamental Java concepts and programming logic.\n\nOutside of coding, I’m passionate about hiking, bouldering, drawing, painting, and spending quality time with those close to me. Maintaining a healthy work-life balance is essential to me—without it, I think we’d all go a little crazy!\n\nI built this website to showcase the projects I'm most proud of and to share my journey in web development. I believe the site itself serves as a testament to my skills and passion for the field."
    },
    {
        id: 2,
        section: "projects",
        header: "Projects",
        body: lorem.generateParagraphs(4),
        links: [
            {
                id: 0,
                title: "caleb da goat",
                url: "https://www.calebdagoat.com/"
            },
            {
                id: 1,
                title: "music player",
                url: "https://caleb.dbfyvwtdn5qfo.amplifyapp.com/#"
            },
            {
                id: 2,
                title: "Beholder",
                url: "https://master.dvsjyqutxtfj9.amplifyapp.com/"
            }
        ]
    },
    {
        id: 3,
        section: "contact",
        header: "Contact",
        body: lorem.generateParagraphs(2),
        links: [
            {
                id: 0,
                title: "email",
                url: "mailto:cgrandinjones@icloud.com?subject=Website%20Inquiry"
            },
            {
                id: 1,
                title: "call",
                url: "tel:3852128649"
            },
            {
                id: 2,
                title: "instagram",
                url: "https://www.instagram.com/ok.lub"
            }
        ]
    }
    // ,
    // {
    //     // id: 4,
    //     // section: "iFrames",
    //     // header: "iFrames",
    //     // body: "Check out some iFrames!",
    //     // links: [
    //     //     {
    //     //         id: 0,
    //     //         title: "caleb da goat",
    //     //         url: "https://www.calebdagoat.com/"
    //     //     },
    //     //     {
    //     //         id: 1,
    //     //         title: "music player",
    //     //         url: "https://caleb.dbfyvwtdn5qfo.amplifyapp.com/#"
    //     //     }
    //     // ],
    //     // iframes: [
    //     //     {
    //     //         id: 0,
    //     //         title: "caleb da goat",
    //     //         url: "https://www.calebdagoat.com/"
    //     //     },
    //     // ]
    // }
];

export default Content;