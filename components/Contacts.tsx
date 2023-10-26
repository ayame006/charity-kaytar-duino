import { contactsItems } from "@/constants"
import Image from "next/image"

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-8">
      {contactsItems.map((item) => (
        <div className="w-[380px] h-[150px] bg-white rounded-2xl mx-auto flexStart">
            <Image src={item.img} alt={item.title} width={97} height={112} className="pt-10" />
            <h1 className="text-font-medium font-bold text-gray-dark pl-14">{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Contacts
