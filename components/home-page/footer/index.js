import Link from "next/link";

export default function Footer(){
    return (
        <div className="w-full">
        <div className="flex justify-center items-center pt-20">
          <div className="grid grid-cols-4 gap-3  place-content-evenly md:gap-6">
                <p className="font-roboto font-light text-sm md:text-3xl">HOME</p>
                <p className="font-roboto font-light text-sm md:text-3xl">BLOG</p>
                <Link href="/contact.js"> <p className="font-roboto font-light text-sm md:text-3xl hover:text-gray-200">CONTACT</p></Link>
                <p className="font-roboto font-light text-sm md:text-3xl">SUBSCRIBE</p>
            </div>
            </div>
        </div>
    )
}