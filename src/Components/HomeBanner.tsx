import RightArrow from "../assets/Icons/RightArrow";
import BannerBackGround from "../assets/Images/BannerBackGround";
import DeveloperImage from "../assets/Images/DeveloperImage";
import Button from "./Button";

const HomeBanner = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url('${BannerBackGround}')` }}></div>
      <div className="relative z-10 flex flex-col items-center md:flex-row md:justify-between px-10 py-2 md:py-5">
        <div className="text-white flex flex-col items-center md:items-start">
          <p className="text-center text-black font-bold text-2xl sm:text-4xl leading-7 md:text-left md:text-5xl lg:text-7xl xl:text-7xl">
            I'm Harikrishnan
          </p>
          <p className="text-center text-black font-bold text-2xl sm:text-4xl leading-7 md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-yellow-500 mr-3 text-xl sm:text-3xl  md:text-4xl lg:text-5xl xl:text-6xl">Front-end</span>
            Developer
          </p>
          <p className="text-center text-black font-thin text-sm py-1 md:text-left lg:text-lg">
            I like to craft solid and scalable frontend products with greater user experiences.
          </p>
          <Button name="Hire me" icon={<RightArrow/>}/>
        </div>
        <DeveloperImage />
      </div>
    </div>
  );
};

export default HomeBanner;
