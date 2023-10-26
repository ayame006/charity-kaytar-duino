import React from 'react'
import Button from './Button'

const Form = () => {
  return (
     <div className='w-[1180px] mt-[170px] max-container flex flex-col gap-10 overflow-hidden bg-primary-green bg-form-img lg:bg-right bg-left bg-no-repeat px-6 py-12 text-white xl:flex-row xl:max-h-[534px] rounded-2xl'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-[32px] sm:text-font-large font-caveat'>Это мне по силам — любить</h1>
          <p className='text-font-secondary-medium sm:w-[432px] w-[347px]'>Новый тираж худи и футболок от компании «СМЕРЧ». Для всех, кого объединяет «Кайтар Дуйно»: ярких, активных, внимательных и чутких.</p>
        </div>

        <div className='flex flex-col gap-[21px]'>
          <input type="text" className='sm:w-[536px] sm:h-[60px] w-[360px] h-[50px] bg-primary-green border-white border rounded-full outline-none' />
          <input type="text" className='sm:w-[536px] sm:h-[60px] w-[360px] h-[50px] bg-primary-green border-white border rounded-full outline-none'/>
          <input type="text" className='sm:w-[536px] sm:h-[60px] w-[360px] h-[50px] bg-primary-green border-white border rounded-full outline-none'/>
          <Button type="submit" title="Отправить" variant="btn_submit" />
        </div>
     </div>
  )
}

export default Form
