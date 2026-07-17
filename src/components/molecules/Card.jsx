import React from "react";
import clsx from "clsx";

const Card = ({
    title,
    subtitle,
    action,
    children,
    className = "",
    bodyClassName = "",
}) => {
    return (
        <div
            className={clsx(
                "bg-white rounded1",
                className
            )}
        >
            {(title || subtitle || action) && (
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                    <div>
                        {title && (
                            <h3 className="text-base font-semibold text-gray-800">
                                {title}
                            </h3>
                        )}

                        {subtitle && (
                            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                        )}
                    </div>

                    {action}
                </div>
            )}

            <div className={clsx("p-5", bodyClassName)}>{children}</div>
        </div>
    );
};

export default Card;