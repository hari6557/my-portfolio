type Props = {
  url: string;
};

const WorkCard = ({ url }: Props) => {
  return (
    <div className="py-10 flex items-center flex-col">
      <div className="bg-white p-1 border border-solid">
        <iframe
          className="rounded-sm hover:scale-110 transition-transform duration-200 ease-out"
          scrolling="no"
          src={url}
          width="300"
          height="300"
        ></iframe>
      </div>
      <a
        className="bg-yellow-500 my-5 py-1 px-5 rounded-md hover:scale-110 transition-transform duration-200 ease-out"
        href={url}
      >
        Take a look
      </a>
    </div>
  );
};

export default WorkCard;
