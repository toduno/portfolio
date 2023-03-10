import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from "../typings"

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {
    pageInfo: PageInfo
}

const ContactMe = ({ pageInfo }: Props) => {
  const {
    register,
    handleSubmit
  }  = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:papareact.team@gmail?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }
   
  return (
    <div className="pt-5 pb-10 h-screen flex relative flex-col text-center md:max-w-7xl px-10 justify-center mx-auto items-center">
        <h3 className="mb-10 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-3xl md:text-4xl font-semibold text-center">
                Tell me about your project. {" "}
                <span className="decoration-emerald-300/50 underline">Let&apos;s chat.</span>
            </h4>

            <div className="space-y-10">

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-emerald-300 h-7 w-7 animate-pulse" />
                    <p className="text-lg md:text-xl">{pageInfo?.email}</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 max-w-[90vw] md:w-fit mx-auto justify-center">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" type="text" className="contactInput max-w-[44vw] md:w-fit" />
                    <input {...register('email')}  placeholder="Email" type="email" className="contactInput max-w-[44vw] md:w-fit" />
                </div>

                <input {...register('subject')}  placeholder="Subject" type="text" className="contactInput" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />
                <button
                  className="bg-emerald-300 hover:bg-emerald-200 active:bg-emerald-400 py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe