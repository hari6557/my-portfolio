import MailIcon from "../assets/Icons/MailIcon";
const ContactInfo = () => {
  return (
    <div className="bg-white px-5 py-3 rounded-sm flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <div className="bg-yellow-500 w-8 h-8 rounded-full flex justify-center items-center">
          <MailIcon />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="leading-10 text-gray-400 ">Country:</p>
            <p className="leading-10 text-gray-400 ">India</p>
          </div>
          <div className="flex justify-between ">
            <p className="leading-10 text-gray-400 ">State:</p>
            <p className="leading-10 text-gray-400 ">Kerala</p>
          </div>
          <div className="flex justify-between ">
            <p className="leading-10 text-gray-400 ">City:</p>
            <p className="leading-10 text-gray-400 ">Alappuzha</p>
          </div>
          <div className="flex justify-between ">
            <p className="leading-10 text-gray-400 ">Email:</p>
            <p className="leading-10 text-gray-400 ">
              harikrishnansajikumar123@gmail.com
            </p>
          </div>
          <div className="flex justify-between ">
            <p className="leading-10 text-gray-400 ">Mobile:</p>
            <p className="leading-10 text-gray-400 ">+91 8078968311</p>
          </div>
          <div className="flex justify-between ">
            <p className="leading-10 text-gray-400 ">Telegram:</p>
            <p className="leading-10 text-gray-400 ">@hari6557</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
