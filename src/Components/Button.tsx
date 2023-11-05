
type Props = {
    name: string
    icon?: JSX.Element
    onClick?: ()=> void
}

const Button = ({name, icon, onClick} : Props) => {
  return (
    <div className="flex cursor-pointer items-center justify-center bg-yellow-500 text-sm w-3/5 md:1/5 rounded-lg shadow-lg mt-4 px-2 py-3">
        <button onClick={onClick} className="text-black pr-3">{name}</button>
        <div>{icon}</div>
    </div>
    
  )
}

export default Button