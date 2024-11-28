import { useEffect } from "react";
import classNames from "classnames";
import { TButtonProps } from "@/@types/components/atoms";

const Button = ({
  children,
  className,
  startIcon,
  endIcon,
  ...props
}: TButtonProps) => {

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();

  }, []);

  return (
    <button
      data-twe-ripple-init
      className={
        classNames(
          "flex items-center gap-1 font-semibold hover:bg-[#3d64f2]/[0.80] py-2 px-4 rounded-xl text-white focus:outline-none",
          className
        )
      }
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;