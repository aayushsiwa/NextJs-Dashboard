import Image from "next/image";
const Card = function ({name,role,description,image}:{name:string,role:string,description:string,image:string}) {
    

    return (
        <div className="flex flex-row justify-center items-center border-2 border-gray-100 max-w-[550px]">
            <Image
                src={image}
                width={300}
                height={300}
                className=""
                alt="Image of the founder of Vercel"
            />
            <div className="flex flex-col justify-center items-center gap-3 w-full p-5">
                <p>
                    {description}
                </p>
                <h3 className="text-blue-400">{name}</h3>
                <p className="text-gray-400">{role}</p>
            </div>
        </div>
    );
};

export default Card;
