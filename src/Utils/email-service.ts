import { send, init } from "emailjs-com";

const serviceId = "service_nepdpng"
const templateId = "template_196yo1a"
const userId = "QSt9jZNje4l_92Tpt"

const sendEmail = (content: any) => {
    init(userId);
    const toSend = {
        from_name: content.fullName,
        to_name: 'Hari',
        to_email: 'harikrishnansajikumar123@gmail.com',
        subject: content.subject,
        message: content.message
    }
    send(serviceId, templateId, toSend)
        .then((res: any)=>{
            console.log("RES", res)
        }).catch((err: any)=>{
            console.log("ERROR", err);
        })
}

export default sendEmail