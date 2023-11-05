import RangeBar from "./RangeBar"


const Skills = () => {
  return (
    <div>
        <RangeBar name="HTML" percentage={8}/>
        <RangeBar name="CSS" percentage={8}/>
        <RangeBar name="Javascrit" percentage={8}/>
        <RangeBar name="Typescript" percentage={8}/>
        <RangeBar name="React" percentage={8}/>
        <RangeBar name="React Native" percentage={7.5}/>
        <RangeBar name="Tailwind Css" percentage={8}/>
    </div>
  )
}

export default Skills