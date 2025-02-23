import { loremIpsum, LoremIpsum } from "lorem-ipsum";

var lorem = new LoremIpsum({ 
    returnParagraphs: true
});

const Content = [
    {
        id: 0,
        section: "home",
        header: "Hey there!",
        body: "Thanks for stopping by! I’m excited to share my journey in web development, especially my passion for User Experience (UX) design and development.\n\nI love making websites more user-friendly and enjoyable. Right now, I work as a Technical Support Analyst, using my problem-solving skills to tackle technical issues. My goal is to shift into a role where I can dive deeper into UX design, helping to create seamless and engaging digital experiences.\n\nWhen I’m not working, you’ll find me hiking, bouldering, drawing, painting, or just spending time with friends and family. These activities keep me inspired and balanced.\n\nThis site is all about my growth in web development. Check out my projects, insights into my UX process, and more.\n\nI hope you enjoy exploring, feel free to reach out if you have any questions or just want to connect!"
    }
    ,
    {
        id: 1,
        section: "about",
        header: "About Me",
        body: lorem.generateParagraphs(2) + "\n\n" + lorem.generateParagraphs(2)
    }
    ,
    {
        id: 2,
        section: "projects",
        header: "Projects",
        body: lorem.generateParagraphs(2)
    }
    ,
    {
        id: 3,
        section: "contact",
        header: "Contact",
        body: lorem.generateParagraphs(2)
    }
];

export default Content;