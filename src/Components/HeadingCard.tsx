type Props = {
    heading: string,
    subHeading?: string
}

const HeadingCard = ({heading, subHeading}: Props) => {
  return (
    <div className="flex flex-col items-center py-20">
        <h1 className="text-2xl sm:text-xl md:text-3xl text-center pb-7 font-bold text-gray-700">{heading}</h1>
        <h2 className="font-thin text-center text-gray-700 w-5/12">{subHeading}</h2>
    </div>
  )
}

export default HeadingCard