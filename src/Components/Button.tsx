interface Properties {
    additionalStyle ?: string,
    clickHandler: () => void,
    label: string
}
const Button = (props: Properties) => {
  return (
    <button 
        className={`hover:scale-105 transition-all duration-500 hover:cursor-pointer font-bold mt-10 w-fit p-4 bg-green-950 mx-auto text-white text-3xl rounded-2xl ${props.additionalStyle}`}
        onClick={props.clickHandler}>{props.label}</button>
  )
}

export default Button
