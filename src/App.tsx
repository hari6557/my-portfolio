import "./App.css";
import ContactInfo from "./Components/ContactInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import HeadingCard from "./Components/HeadingCard";
import HomeBanner from "./Components/HomeBanner";
import Info from "./Components/Info";
import LeftSideBar from "./Components/LeftSideBar";
import LocationMap from "./Components/LocationMap";
import Services from "./Components/Services";
import WorksSection from "./Components/WorksSection";

function App() {
  return (
    <div className="flex">
      <aside className="px-5 bg-white">
        <LeftSideBar/>
      </aside>
      <div className="bg-gray-300 h-full px-5">
        <HomeBanner />
        <HeadingCard
          heading="What I Do.. ?"
          subHeading="I'm a Front-end developer who is specialized in creating the visual elements and user interfaces of web and mobile applications."
        />
        <Services />
        <HeadingCard
          heading="What is my Qualification.. ?"
          subHeading="I hold a Bachelor of Technology (B.Tech) degree in Electronics and Communication."
        />
        <Education />
        <HeadingCard
          heading="Do you have any prior Experience.. ?"
          subHeading="I have gained valuable experience in my career as a frontend developer. I started with an internship at Newton School, followed by a role as a frontend developer at Byju's. Currently, I am working as a frontend developer at MoneyHOP."
        />
        <Experience />
        <HeadingCard
          heading="Have you done any works.. ?"
          subHeading="Yeah I have done some projects during the beginning of my development journey. "
        />
        <WorksSection/>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="md:w-1/2">
            <div className="flex justify-center md:justify-start items-center md:px-2">
              <HeadingCard heading="Leave Us Your Info"/>
            </div>
            <Info/>
          </div>
          <div className="md:w-1/2 pb-5">
            <div className="flex justify-center md:justify-start items-center md:px-2">
              <HeadingCard heading="Contact Information"/>
            </div>
            <ContactInfo/>
            <LocationMap/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
