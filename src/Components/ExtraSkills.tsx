import ExtraSkillIcon from "../assets/Icons/ExtraSkillIcon"


const ExtraSkills = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-start items-center">
            <ExtraSkillIcon/>
            <p className="text-xs leading-6 text-gray-400 pl-5">GIT Knowledge</p>
        </div>
        <div className="flex justify-start items-center">
            <ExtraSkillIcon/>
            <p className="text-xs leading-6 text-gray-400 pl-5">JIRA Knowledge</p>
        </div>
    </div>
  )
}

export default ExtraSkills