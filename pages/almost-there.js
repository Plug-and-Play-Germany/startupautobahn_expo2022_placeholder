import React from "react";
import { css } from "@emotion/react";

const AlmostThere = () => {
  return (
    <section
      css={[
        css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: ${typeof window === "undefined"
            ? "100vh"
            : window.innerHeight + "px"};
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
            font-family: PPNeueMachina-InktrapRegular;
          `,
        ]}
      >
        EXPO2023
      </h1>
    </section>
  );
};

export default AlmostThere;
