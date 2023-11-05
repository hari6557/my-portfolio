type Props = {
    icon: JSX.Element
    heading: string
    subHeading: string
}

const ServiceCard = ({icon, heading, subHeading}: Props) => {
  return (
    <div className="py-5 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out">
        <div className="bg-white rounded-md cursor-pointer flex flex-col items-center px-5 py-5">
            {icon}
            <h1 className="font-semibold text-xl py-2">{heading}</h1>
            <h2 className="text-gray-500 font-thin">{subHeading}</h2>
        </div>
    </div>
  )
}

export default ServiceCard