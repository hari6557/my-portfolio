type Props = {
  place: string;
  desgnation: string;
  duration: string;
  title?: string;
  description: string;
};

const ExperienceCard = ({
  place,
  desgnation,
  duration,
  title,
  description,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between bg-white px-10 py-5">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium leading-10 text-xl">{place}</h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-light leading-5 text-center text-lg pb-4 md:pr-4 md:pb-0">
              {desgnation}
            </p>
            <p className="font-light bg-yellow-500 px-2 leading-5 text-center text-sm">
              {duration}
            </p>
          </div>
        </div>
        <div className="w-2/2 mt-5 md:mt-0 md:w-1/2 flex flex-col items-center md:items-start">
          {title && <h1 className="font-medium leading-10 text-xl">{title}</h1>}
          <p className="text-gray-500 font-light leading-5 text-sm text-center md:text-start">
            {description}
          </p>
        </div>
      </div>
      <div className="border w-12/12 border-solid border-slate-100"></div>
    </div>
  );
};

export default ExperienceCard;
