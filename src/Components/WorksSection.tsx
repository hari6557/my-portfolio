import WorkCard from "./WorkCard"
// import MealFinder  from "../assets/JpgImages/MealFinder.JPG";
// import Netflix from "../assets/JpgImages/Netflix.jpg"

const WorksSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard url="https://hari6557.github.io/Netflix-Clone/"/>
        <WorkCard url="https://hari6557.github.io/Trippy/"/>
        <WorkCard url="https://news-24x7-lhp7.vercel.app/"/>
    </div>
  )
}

export default WorksSection