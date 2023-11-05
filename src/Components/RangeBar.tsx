type Props = {
    name: string
    percentage: number
}
const RangeBar = ({name, percentage}: Props) => {
    const getPercentage = (value: number) => {
        return value*10
    }
  return (
    <>
      <div className="flex justify-between">
        <p className="text-xs leading-6 text-gray-400">{name}</p>
        <p className="text-xs leading-6 text-gray-400">{getPercentage(percentage)}%</p>
      </div>
      <div className="w-[10rem] border border-solid border-yellow-500">
        <div className={`w-[${percentage}rem] border border-solid border-yellow-500 `}></div>
      </div>
    </>
  );
}

export default RangeBar