"use client";

import clsx from "clsx";
import React, { useState, forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      labelClass = "",
      className = "",
      iconEye = false,
      error,
      options = [],
      valueKey,
      labelKey,
      labelRender,
      icon = "",
      onReset,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = rest.type === "password";
    const isTextarea = rest.type === "textarea";
    const isSelect = rest.type === "select";

    const inputClass = clsx(
      "w-full rounded-lg border bg-white text-sm text-slate-700 placeholder:text-slate-400 transition-all duration-200 outline-none",
      "border-slate-200",
      "focus:border-[#14ADD6] focus:ring-4 focus:ring-[#14ADD6]/10",
      icon ? "pl-11" : "pl-4",
      isTextarea ? "py-3 min-h-36 max-h-60 resize-y" : "py-2.5",
      (iconEye || onReset) && !isTextarea && "pr-11",
      error &&
        "border-red-300 focus:border-red-400 focus:ring-red-100",
      className
    );

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            className={clsx(
              "text-sm font-medium text-slate-700",
              labelClass
            )}
          >
            {label}
          </label>
        )}

        <div className="relative w-full">
          {icon && (
            <i
              className={clsx(
                icon,
                "absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 pointer-events-none"
              )}
            />
          )}

          {isTextarea ? (
            <textarea
              ref={ref}
              {...rest}
              className={inputClass}
            />
          ) : isSelect ? (
            <select
              ref={ref}
              {...rest}
              className={inputClass}
            >
              {rest.placeholder && (
                <option value="" disabled>
                  {rest.placeholder}
                </option>
              )}

              {options.map((opt, idx) => (
                <option
                  key={idx}
                  value={
                    valueKey
                      ? opt[valueKey]
                      : opt.value ?? opt
                  }
                >
                  {labelRender
                    ? labelRender(opt)
                    : labelKey
                    ? opt[labelKey]
                    : opt.label ?? opt}
                </option>
              ))}
            </select>
          ) : (
            <>
              <input
                ref={ref}
                {...rest}
                type={
                  isPassword
                    ? showPassword
                      ? "text"
                      : "password"
                    : rest.type
                }
                className={inputClass}
              />

              {onReset && rest.value && (
                <button
                  type="button"
                  onClick={onReset}
                  className={clsx(
                    "absolute top-1/2 -translate-y-1/2",
                    iconEye ? "right-11" : "right-3",
                    "flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
                  )}
                >
                  <i className="ri-close-line" />
                </button>
              )}

              {iconEye && isPassword && (
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-[#14ADD6]"
                >
                  <i
                    className={
                      showPassword
                        ? "ri-eye-line"
                        : "ri-eye-off-line"
                    }
                  />
                </button>
              )}
            </>
          )}
        </div>

        {error && (
          <span className="text-xs font-medium text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;