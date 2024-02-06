import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { useAppContext } from "@/utils/context";
import { createFormElement, sendEmail, validationForm } from "./componentUtils";
import { yupResolver } from "@hookform/resolvers/yup"
import Loader from "../Loader";

const ContantForm = () => {
  const { t } = useTranslation("popups");
  const inputs = t("form.inputs", { returnObjects: true });
  const { setIsOpenModal, setModalBody, setLoader } = useAppContext();
  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationForm(inputs)) });

  const onSubmit = data => {
    setLoader(true)
    reset();
    sendEmail(data).then(res => {
      if (res.status === 200) {
        setIsOpenModal(false);
        setIsOpenModal(true);
        setLoader(false)
        setModalBody("SendSuccess");
      } else {
        alert("Something went wrong!");
      }
    })
  };


  return (
    <>
      <div className="title mb-6 px-8 text-center lg:px-16">
        <span className="text-2xl font-semibold text-primary lg:text-4xl lg:font-bold">
          {t("form.title")}
        </span>
      </div>
      <div className="form relative grid grid-cols-1 px-8 lg:grid-cols-2 lg:gap-x-12 lg:px-16">
        <div className="form mb-11 lg:mb-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputs.length && inputs.map((input, idx) =>
              input.type === 'submit' ? (
                createFormElement({ input, classes: `${Object.keys(errors).length === 0 ? 'hover:cursor-pointer hover:bg-white hover:text-visited' : 'opacity-25 pointer-events-none'} text-white w-full h-[3.625rem] bg-visited rounded-[0.625rem] border-[1px] border-visited transition duration-300`, idx })
              ) : (

                <div className="w-full relative mb-[1.375rem] md:mb-[1.938rem] " key={idx}>
                  {createFormElement({ input, classes: `form-inputs peer w-full rounded-[0.625rem] bg-white border-[1px] ${errors[input.name] ? 'border-red-800 visited:border-red-800 focus:border-red-800' : 'border-[#adb5cd] visited:border-visited focus:border-visited'}  py-[0.875rem] px-[0.313rem] font-medium text-[0.875rem]  focus:outline-none`, idx, register: { ...register(input?.name) } })}
                  <label htmlFor={input.name} className={`form-label z-z4 ${watch(input.name) && watch(input.name).length ? 'animate-[topLabel_0.3s_ease-in-out_forwards] after:bg-white' : ''} peer-focus:animate-[topLabel_0.3s_ease-in-out_forwards] duration-500 absolute left-[0.75rem] pt-4 text-[#949cb6] pointer-events-none text-[0.875rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-2/4 after:bottom-0 after:w-[110%] after:h-[25%] peer-focus:after:bg-white after:z-under`}>{input.label}</label>
                  {errors[input.name] && <span role="alert" className="text-red-800 text-sm">{errors[input.name]?.message || 'Error'}</span>}
                </div>
              )
            )}
          </form>
        </div>
        <div className="image top-1/1 relative hidden justify-center lg:flex">
          <img
            className="mx-auto h-full max-h-xxs w-full max-w-xxs"
            src={t("form.image.src")}
            alt={t("form.image.alt")}
          />
        </div>
      </div>
      <Loader />
    </>
  );
};

export default ContantForm;
