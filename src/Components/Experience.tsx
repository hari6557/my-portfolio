import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div>
      <ExperienceCard
        place="Newton School, Banglore"
        desgnation="Internship"
        duration="Jan-2021 - Aug-2021"
        description="Got the oppurtunity to learn Web development and problem solving. Technical skills learned : HTML, Css, Javascript, React, Javascript. Worked on various projects as part of the internship.
        Particiapated on various coding contest contected by the platform. Got the oppurtunity to Work under mentors from Adobe and Amazon for better exposure."
      />
      <ExperienceCard
        place="BYJU's, Banglore"
        desgnation="Software Dev"
        duration="Aug-2021 - Sept-2022"
        description="Developed different components and pages from scratch using React. Implemented SEO best practices, such as optimizing page load times
        and incorporating structured data, to improve search engine visibility
        and rankings using Google pagespeed insight tool. Worked on integrating APIs needed for the project.Worked on delivering new features needed for the Ecommerce project.
        Implemented a product reviewing feature, with this feature the user should be able to add ratings and
        comments for the respective products. Another feature implemented is Restricting user, which restrict the user
        selecting multiple class products, which means, if a user added
        class 9 product to cart user wont be able to add another class
        product to cart without removing the former one. "
      />
      <ExperienceCard
        place="moneyHOP, Banglore"
        desgnation="Frontend Dev"
        duration="Sept-2022 - Present"
        description="Successfully handled and delivered multiple projects including web and mobile applications. Expertise in React and React native frameworks, leveraging their capa-
        bilities to create interactive and responsive components. Integrated custom payment checkout and standard payment checkout in the web application with Razorpay.
        Implemented custom E-sign feature in the web application.Worked in revamping of mobile application to deliver efficient and visually appealing experience to the users.
        Integrated Video Kyc feature in the Mobile application for the smooth on-boarding of users, and for the integration worked with third-party APIs and services.
        Integrated frontend components with backend logic, working closely with backend developers to achieve seamless data flow and functionality.Worked in integrating security based changes like encrypting and de-
        crypting request and responses in the api for both the web and mobile application.Actively participated in agile development processes, such as daily
        stand-ups and sprint planning, to ensure efficient project delivery."
      />
    </div>
  );
};

export default Experience;
