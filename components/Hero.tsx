import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <div className='flex xl:flex-row flex-col max-container'>
      <div className='pt-36 padding-container'>
        <h1 className="font-caveat sm:text-font-title text-[64px] text-primary-green font-bold;">Созидая Добро!</h1>
        <p className="sm:text-font-medium text-font-small">Вместе к Лучшему Завтрашнему</p>

        <div className="flex flex-col gap-5 xs:flex-row my-[52px]">
            <Button type="button" title="Пожертовать" variant="btn_primary_green" />
            <Button type="button" title="Подробнее" variant="btn_primary_border" />
        </div>
      </div>

      <div className="xl:flex-[1.5] xl:transform-none rotate-45 relative z-0 sm:h-[680px] h-[444px]">
          <Image className="object-contain" src="/hero-bg.png" alt="hero" fill />
      </div>
    </div>
  )
}

export default Hero
