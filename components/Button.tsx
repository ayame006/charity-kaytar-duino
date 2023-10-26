import { ButtonProps } from "@/types"

const Button = ({ type, title, variant } : ButtonProps) => {
  return (
    <button type={type} className={`gap-4 rounded-full ${variant}`}>
        {title}
    </button>
  )
}

export default Button
