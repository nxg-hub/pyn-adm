import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-normal text-[#006181]">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
      />
      <ErrorMessage name={name} component="span" className="text-[#db3a3a]" />
    </div>
  );
};

export default InputField;

  