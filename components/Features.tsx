import { FEATURES } from "@/constants"
import { FeatureItemProps } from "@/types"
import Image from "next/image"

const Features = () => {
  return (
    <div className='mt-[170px]'>
      <div className='max-container padding-container'>
        <h1 className='text-font-large text-primary-green font-caveat'>Пожертвования</h1>

        <ul className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-20">
            {FEATURES.map((item) => (
                <FeatureItem key={item.title} title={item.title} imageUrl={item.imageUrl} description={item.description}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

const FeatureItem = ({imageUrl, title, description} : FeatureItemProps) => {
    return (
        <li className="bg-white rounded-2xl md:w-[408px] md:h-[270px] p-5 xl:p-10 xl:w-[580px] xl:h-[280px] mx-auto lg:mx-0">
            <div className="flexStart pb-[34px]">
                <Image src={imageUrl} alt={title} width={64} height={64}/>
                <h2 className="text-gray-dark text-font-medium font-bold w-[271px] pl-8">{title}</h2>
            </div>
            <p className="text-gray xl:font-small text-[14px]">{description}</p>
        </li>
    )
}

export default Features
