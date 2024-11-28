import { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

type TInputProps = {
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: HTMLInputTypeAttribute;

} & InputHTMLAttributes<HTMLInputElement>;