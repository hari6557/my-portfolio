import DownloadIcon from "../assets/Icons/DownloadIcon";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import GitHubIcons from "../assets/Icons/GitHubIcons";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import LinkedInIcon from "../assets/Icons/LinkedInIcon";
import DeveloperIcon from "../assets/Images/DeveloperIcon";
// import ProfileImage from "../assets/Images/ProfileImage";
import Button from "./Button";
import ExtraSkills from "./ExtraSkills";
import Language from "./Language";
import Skills from "./Skills";

const LeftSideBar = () => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date("1998-06-21");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const downloadResume = () => {
    const pdfUrl = "https://drive.google.com/file/d/10vtVUBPxsGg18uHxkHvXkojCpTtdKD0p/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HarikrishnanResume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="py-5 flex flex-col items-center bg-white px-5">
      <DeveloperIcon />
      <h1 className="text-black text-base leading-10 font-normal">
        Harikrishnan s
      </h1>
      <h1 className="text-gray-400 text-sm font-normal">Front-End Developer</h1>
      <div className="flex gap-3 py-3 items-center">
        <a href="https://www.facebook.com/harikrishnan.saji.7?mibextid=LQQJ4d" className="hover:scale-110 transition-transform duration-200 ease-out cursor-pointer">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com/i_am_harri?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" className="hover:scale-110 transition-transform duration-200 ease-out cursor-pointer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/harikrishnan6557" className="hover:scale-110 transition-transform duration-200 ease-out cursor-pointer">
          <LinkedInIcon />
        </a>
        <div className="hover:scale-110 transition-transform duration-200 ease-out cursor-pointer">
          <a href="https://github.com/hari6557" className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <GitHubIcons/>
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-xs leading-6 bg-yellow-500 px-5 rounded-sm mr-5">
            Age
          </h1>
          <h1 className="text-xs leading-6">{calculateAge()}</h1>
        </div>
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-xs leading-6 bg-yellow-500 px-5 rounded-sm mr-5">
            Blood
          </h1>
          <h1 className="text-xs leading-6">O+ve</h1>
        </div>
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-xs leading-6 bg-yellow-500 px-5 rounded-sm mr-5">
            Freelance
          </h1>
          <h1 className="text-xs leading-6 text-green-400">Available</h1>
        </div>
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-xs leading-6 bg-yellow-500 px-5 rounded-sm mr-5">
            Mobile
          </h1>
          <h1 className="text-xs leading-6">8078968311</h1>
        </div>
      </div>
      <h1 className="text-black text-base leading-10 font-normal">Languages</h1>
      <div className="flex flex-col">
        <Language />
      </div>
      <h1 className="text-black text-base leading-10 font-normal">Skills</h1>
      <div className="flex flex-col">
        <Skills />
      </div>
      <h1 className="text-black text-base leading-10 font-normal">
        Extra Skills
      </h1>
      <div>
        <ExtraSkills />
      </div>
      <Button onClick={downloadResume} name="Resume" icon={<DownloadIcon/>}/>
    </div>
  );
};

export default LeftSideBar;
