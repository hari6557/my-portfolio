import ExperienceCard from "./ExperienceCard";

const Education = () => {
  return (
    <div>
      <ExperienceCard
        place="S B H S S, Mannar"
        desgnation="Student"
        duration="June-2013 - March-2014"
        title="X th"
        description="I have completed my SSLC Board examination from S B H S S in the year of 2014 with A+ grade in all subjects."
      />
      <ExperienceCard
        place="N S H S S, Mannar"
        desgnation="Student"
        duration="June-2014 - March-2016"
        title="XII th"
        description="I have completed my Higher Secondary Board examination from N S H S S in the year of 2016 with 95% marks. "
      />
      <ExperienceCard
        place="KTU, Trivandrum"
        desgnation="Student"
        duration="June-2016 - March-2020"
        title="BTech (EC)"
        description="I have completed my Btech in Electronics & Communication from Kerala Technological University in the year of 2020 with a CGPA of 6.74."
      />
    </div>
  );
};

export default Education;
