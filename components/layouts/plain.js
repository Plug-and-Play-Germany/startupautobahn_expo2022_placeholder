import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import mq from "../defaults/mediaquery";
import ExpoVisual from "../../media/expo_visual.jpg";
import Image from "next/image";
import { PPNeueMachina } from "../../fonts/fonts";

const Plain = ({ title, children }) => {
  let [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  }, []);

  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        min-height: ${height};
        h1 {
          font-family: ${PPNeueMachina.style.fontFamily};
          font-size: clamp(2.5rem, 13vw, 8.25em);
          font-weight: 400;
          margin: 0 0 0.25em;
        }
        h2 {
          font-weight: 500;
          margin-top: 1.5em;
          margin-bottom: 0.1em;
          font-size: 1.2em;
          ${mq[1]} {
            font-size: 1.5em;
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 0.5em;
          font-size: 0.85em;
          ${mq[1]} {
            font-size: 1em;
          }
        }
        ol {
          margin-top: 5em;
        }
        li {
          margin-bottom: 2em;
          b {
            font-weight: 600;
          }
        }
      `}
    >
      <div
        css={[
          css`
            position: relative;
            width: 100%;
            padding: 4em 0.8em 0;
            ${mq[1]} {
              padding: 10em 2.5em 0;
            }
          `,
        ]}
      >
        <Image
          src={ExpoVisual}
          alt="EXPO2023"
          fill
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
          priority
          css={[
            css`
              z-index: -1;
              width: 100%;
            `,
          ]}
        />
        <h1>{title}</h1>
      </div>
      <div
        css={[
          css`
            max-width: 55em;
            padding: 1em 1em 1em;
            ${mq[1]} {
              padding: 1em 3em 3em;
            }
          `,
        ]}
      >
        {children}
      </div>
    </section>
  );
};

export default Plain;
