import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-gray-light mt-[176px]'>
      <div className="max-container padding-container py-[60px] text-font-small text-gray">
        <p>© Кайтар Дуйно 2023</p>
        <Link href='/'>Политика конфиденциальности</Link>
      </div>
    </div>
  )
}

export default Footer