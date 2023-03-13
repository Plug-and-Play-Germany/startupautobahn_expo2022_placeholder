import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { PPNeueMachina } from "../fonts/fonts";

const AlmostThere = () => {
  let [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  }, []);

  return (
    <section
      css={[
        css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: ${height};
        `,
      ]}
    >
      <p
        css={[
          css`
            margin: 0;
            font-size: clamp(1.15rem, 2vw, 2.75em);
          `,
        ]}
      >
        We are almost there.
      </p>
      <h1
        css={[
          css`
            margin: 0;
            font-size: clamp(4.15rem, 5vw, 10.75em);
            font-weight: 400;
            font-family: ${PPNeueMachina.style.fontFamily};
          `,
        ]}
      >
        EXPO2023
      </h1>
    </section>
  );
};

export default AlmostThere;
