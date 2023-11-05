import { SubmitHandler, useForm } from "react-hook-form";
import sendEmail from "../Utils/email-service";

interface IFormInput {
    fullName: string
    emailAddress: string
    subject: string
    message: string
}

const Info = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        sendEmail(data);
    }
  return (
    <div className="pb-5 px-2 pr-5 w-96 md:w-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="px-5 flex flex-col items-center md:items-start bg-white py-2 rounded-sm">
        <p className="leading-10 text-gray-400">Your Full Name (Required)</p>
        <input className="bg-gray-200 w-[100%] h-10 rounded-md px-5" type="text" {...register("fullName")}/>
        <p className="leading-10 text-gray-400">Your Email (Required)</p>
        <input className="bg-gray-200 w-[100%] h-10 rounded-md px-5" type="email" {...register("emailAddress")} />
        <p className="leading-10 text-gray-400">Subject</p>
        <input className="bg-gray-200 w-[100%] h-10 rounded-md px-5" type="text" {...register("subject")} />
        <p className="leading-10 text-gray-400">Your Message</p>
        <textarea className="bg-gray-200 w-[100%] h-80 flex flex-col text-start px-5 pt-2 rounded-md" {...register("message")} />
        <div className="flex cursor-pointer items-center justify-center bg-yellow-500 text-sm w-3/5 md:1/5 rounded-lg shadow-lg mt-4 px-2 py-3">
            <input className="cursor-pointer w-[100%]" type={'submit'} value="Send Message"/>
        </div>
      </form>
    </div>
  );
};

export default Info;
