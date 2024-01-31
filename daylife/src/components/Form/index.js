import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { useModal } from "@/utils/context";
import { sendEmail } from "./hooks";

const ContantForm = () => {
  const { t } = useTranslation("popups");
  const { setIsOpenModal, setModalBody } = useModal();
  const { register, watch, reset, handleSubmit } = useForm();

  const onSubmit = data => {
    setIsOpenModal(false);
    reset();
    sendEmail(data).then(res => {
      if (res.status === 200) {
        setIsOpenModal(true);
        setModalBody("SendSuccess");
      } else {
        alert("Something went wrong!");
      }
    })
  };
  const inputs = t("form.inputs", { returnObjects: true });

  return (
    <>
      <div className="title mb-6 px-8 text-center lg:px-16">
        <span className="text-2xl font-semibold text-primary lg:text-4xl lg:font-bold">
          {t("form.title")}
        </span>
      </div>
      <div className="form grid grid-cols-1 px-8 lg:grid-cols-2 lg:gap-x-12 lg:px-16">
        <div className="form mb-11 lg:mb-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputs.length && inputs.map((input, idx) =>
              input.type === 'submit' ? (
                <input key={idx} className="text-white w-full h-[3.625rem] bg-visited rounded-[0.625rem] hover:cursor-pointer b hover:bg-white border-[1px] hover:text-visited border-visited transition duration-300" type={input.type} value={input.value} />
              ) : (

                <div className="w-full relative mb-[1.375rem] md:mb-[1.938rem] " key={idx}>
                  <input
                    className="peer w-full rounded-[0.625rem] bg-white border-[1px] border-[#adb5cd] py-[0.875rem] px-[0.313rem] font-medium text-[0.875rem] visited:border-visited focus:border-visited focus:outline-none"
                    type={input.type}
                    name={input?.name}
                    {...register(input?.name)}
                  />
                  <label className={`form-label z-z4 ${watch(input?.name) !== '' ? 'animate-[topLabel_0.3s_ease-in-out_forwards] after:bg-white' : ''} peer-focus:animate-[topLabel_0.3s_ease-in-out_forwards]  duration-500  absolute left-[0.75rem] top-[1.00rem]  text-[#949cb6] pointer-events-none text-[0.875rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-2/4 after:bottom-0 after:w-[120%] after:h-[53%] peer-focus:after:bg-white after:z-under`}>{input.placeholder}</label>
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
    </>
  );
};

export default ContantForm;
