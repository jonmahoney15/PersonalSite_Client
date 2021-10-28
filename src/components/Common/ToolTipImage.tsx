import React, { useRef } from "react";
import { createPopper } from "@popperjs/core";

interface ITooltipProps {
    Image: string;
    AltText: string;
    Title: string;
    content: string;
}

const TooltipImage = (props: ITooltipProps) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = useRef();
  const tooltipRef = useRef();
  const openLeftTooltip = () => {
    //@ts-ignore
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top"
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <img
            src={process.env.PUBLIC_URL+props.Image}
            alt={props.AltText}
            className="m-1 md:m-10"
            style={{height: 80}}
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            //@ts-ignore 
            ref={btnRef}
          />
          <div
            className={
              (tooltipShow ? "" : "hidden ") +
              "bg-gray-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            //@ts-ignore
            ref={tooltipRef}
          >
            <div>
              <div
                className={
                  "border-gray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-100 uppercase rounded-t-lg"
                }
              >
                {props.Title}
              </div>
              <div className="p-3 text-white">
                  {props.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TooltipImage;
