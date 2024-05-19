import Card from "./components/Card/index";
export default function Home() {
    const speakerInformation = [
        {
            name: "Guillmero Rauch",
            role: "Vercel CEO",
            description:
                "Guillermo Rauch is the CEO of Vercel and the creator of Next.js. He is passionate about developer experience and building products that enable developers to succeed",
            image: "/guillmero.jpg",
        },
        {
            name: "Lee Robinson",
            role: "VP of Product",
            description:
                "Lee Robinson is the VP of Product at Vercel. He is passionate about developer experience and building products that empower developers to succeed.",
            image: "/lee.jpg",
        },
        {
            name: "Delba",
            role: "Software Engineer",
            description:
                "Delba is a software engineer at Vercel. She is passionate about building products that are accessible to everyone.",
            image: "/delba.jpg",
        },
        {
            name:"Lydia Hallie",
            role:"Software Engineer",
            description:"Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
            image:"/lydia.jpg"
        }
    ];
    return (
        <>
            <header className="text-6xl text-center">Hello GHW</header>
            <h1 className="text-xl text-center">Welcome to my dashboard</h1>
            <div className="flex flex-row justify-center items-center gap-4 flex-wrap ms-2">
                {speakerInformation.map((speaker) => (
                    <Card
                        key={speaker.name}
                        name={speaker.name}
                        role={speaker.role}
                        description={speaker.description}
                        image={speaker.image}
                    />
                ))}
            </div>
        </>
    );
}
