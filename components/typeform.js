import React from "react";
import { createPopup } from "@typeform/embed";
import { css } from "@emotion/react";
import "@typeform/embed/build/css/popup.css";

const button = ({ className }) => {
  const typeformOptions = {
    size: 100,
    hideFooter: true,
    onSubmit: (event) => {
      setTimeout(() => close(), 1500);
      if (event && event.responseId && event.responseId !== "") {
        setRegisterButton({
          state: false,
          buttonText: "Successfully Registered",
        });
      } else {
        setRegisterButton({
          state: true,
          buttonText: "Try Again",
          errorMessage:
            "Unfortunately something went wrong in the process of submitting your information. Please try again or get in touch with Bastian <bastian@pnptc.com>.",
        });
      }
    },
  };

  const { toggle } = createPopup("RB0nRVxD", typeformOptions);

  return (
    <button className={className} onClick={toggle}>
      Claim your spot here.
    </button>
  );
};

export default button;
