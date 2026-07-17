import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Spinner from "@/components/atoms/Spinner";

const variantClasses = {
  default:
    "back-border bg-white px-4 py-2.5 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 active:scale-[.98] transition-all",

  outline:
    "border border-slate-300 bg-white px-4 py-2.5 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50 active:scale-[.98] transition-all",
  secondary:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2",
  primary:
    "px-4 py-2.5 rounded-lg bg-[#14ADD6]  text-sm font-medium text-white transition hover:bg-[#1098bc]",

  success:
    "bg-green-500 hover:bg-green-600 px-4 py-2.5 rounded-lg text-white text-sm font-medium active:scale-[.98] transition-all",

  warning:
    "bg-amber-500 hover:bg-amber-600 px-4 py-2.5 rounded-lg text-white text-sm font-medium active:scale-[.98] transition-all",

  danger:
    "bg-red-500 hover:bg-red-600 px-4 py-2.5 rounded-lg text-white text-sm font-medium active:scale-[.98] transition-all",

  bluebutton:"bg-[#1677F2] flex h-12 w-full items-center justify-center gap-3 rounded-2xl text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0F67D8]",

  ghost:
    "bg-transparent px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-all",

  icon:
    "h-10 w-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50",

  white:
    "bg-white px-4 py-2.5 rounded-lg text-slate-700 shadow-sm",

  black:
    "bg-slate-800 hover:bg-slate-900 px-4 py-2.5 rounded-lg text-white",

  gradient:
    "btn-gradient px-4 py-2.5 rounded-lg text-white shadow-md hover:opacity-95 transition-all",
};

function Button({
  children,
  variant = "default",
  bgColor,
  textColor,
  icon: Icon,
  href,
  height = "",
  width = "",
  rounded = "",
  className,
  loading = false,
  disabled = false,
  ...props
}) {
  const isDisabled = disabled || loading;

  const baseClasses =
    "inline-flex items-center text-nowrap justify-center gap-2 text-sm font-medium transition duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass =
    variantClasses[variant] || variantClasses.default;

  const classes = twMerge(
    baseClasses,
    variantClass,
    height,
    width,
    rounded,
    bgColor,
    textColor,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {Icon && (
          <i className={`ri-${Icon} cursor-pointer`} />
        )}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size={16} color="#fff" />
          Processing...
        </>
      ) : (
        <>
          {Icon && (
            <i className={`ri-${Icon} cursor-pointer`} />
          )}
          {children}
        </>
      )}
    </button>
  );
}

export default Button;