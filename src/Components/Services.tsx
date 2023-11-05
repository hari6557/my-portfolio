import MentorIcon from "../assets/Icons/MentorIcon";
import UiUxDesignIcon from "../assets/Icons/UiUxDesignIcon";
import WebDevelopmentIcon from "../assets/Icons/WebDevelopmentIcon";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <ServiceCard
        heading="Web Dev"
        subHeading="Web App, Mobile App"
        icon={<WebDevelopmentIcon />}
      />
      <ServiceCard
        heading="UI/UX"
        subHeading="Web App, Mobile App"
        icon={<UiUxDesignIcon/>}
      />
      <ServiceCard
        heading="Mentoring"
        subHeading="Mentoring in Frontend"
        icon={<MentorIcon/>}
      />
    </div>
  );
};

export default Services;
