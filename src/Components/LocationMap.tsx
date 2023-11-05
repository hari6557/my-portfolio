const LocationMap = () => {
  return (
    <div className="bg-white py-2 w-[100%] px-10 pt-3">
      <p className="leading-10 text-gray-400">Currenct Location :</p>
      <iframe
        className="w-[100%] h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665941609!2d77.46612645591198!3d12.954280235676594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699191652066!5m2!1sen!2sin"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
