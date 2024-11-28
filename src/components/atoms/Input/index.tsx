import { TInputProps } from "@/@types/components/atoms";
import classNames from "classnames"

const Input = ({
  className,
  type,
  startIcon,
  endIcon,
  ...props
}: TInputProps) => {

  if(type === "checkbox") {
    return (
      <input
        className={
          classNames(
            "border-2 border-[#3d3b3b] p-2 rounded-lg text-[#3d3b3b] focus:outline-none",
            className
          )
        }
        type={type}
        {...props}
      />
    );
  }
  
  return (
    <div className="flex items-center gap-2 border-2 border-[#3d3b3b] p-2 rounded-lg w-full">
      {startIcon}
      <input
        className={
          classNames(
            "text-[#3d3b3b] focus:outline-none w-full",
            className
          )
        }
        {...props}
      />
      {endIcon}
    </div>
  )
};

export default Input;