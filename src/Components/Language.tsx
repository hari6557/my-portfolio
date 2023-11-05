import RangeBar from "./RangeBar"


const Language = () => {
  return (
    <div>
      <RangeBar name="English" percentage={8}/>
      <RangeBar name="Hindi" percentage={8}/>
      <RangeBar name="Malayalam" percentage={10}/>
    </div>
    
  )
}

export default Language