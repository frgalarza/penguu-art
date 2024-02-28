import Image from "next/image"

export default function Project({img, name}){
    return <article>
            <Image width='400' height='200' src={img} alt={name}></Image>
    </article>
}