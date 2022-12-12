import Image from "next/image";
import Logo from "../media/logo/sa_pri_black_rgb.svg";
import ExpoVisual from "../media/expo_visual.jpg";
import mq from "../components/defaults/mediaquery";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        min-height: ${typeof window === "undefined"
          ? "100vh"
          : window.innerHeight + "px"};
        padding: 4em 1em;
        ${mq[1]} {
          padding: 7em 3em;
        }
      `}
    >
      <div
        css={css`
          z-index: -1;
          width: 100%;
          min-width: 1200px;
          height: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        `}
      >
        <Image
          src={ExpoVisual}
          alt="EXPO2023"
          fill
          style={{ objectFit: "contain" }}
          placeholder="blur"
        />
      </div>
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            ${mq[2]} {
              flex-direction: row-reverse;
              justify-content: space-between;
            }
          `}
        >
          <div
            css={css`
              max-width: 10em;
              margin-bottom: 3em;
              position: relative;
              width: 100%;
            `}
          >
            <Logo />
          </div>
          <Title />
        </div>
        <Information />
      </div>
      <Ticket />
    </div>
  );
}

const Title = () => {
  return (
    <div>
      <p
        css={css`
          font-family: PPNeueMachina-InktrapRegular;
          font-size: 8.25em;
          font-size: clamp(2.5rem, 13vw, 8.25em);
          margin: 0;
          line-height: 1em;
          margin-left: -0.065em;
        `}
      >
        EXPO2023
      </p>
      <p
        css={css`
          font-size: 3.75em;
          font-size: clamp(1.5rem, 4vw, 3.75em);
          margin: 0;
          margin-top: -0.25em;
          line-height: 1em;
          letter-spacing: 0.015em;
        `}
      >
        piloting the future
      </p>
    </div>
  );
};

const Information = () => {
  return (
    <div
      css={css`
        margin-top: 3em;
        p {
          font-size: 2.125em;
          margin: 0;
          letter-spacing: 0.025em;
          font-size: clamp(1.15rem, 4vw, 1.75em);
        }
      `}
    >
      <p>Stuttgart–GER</p>
      <p>June 22, 2023</p>
    </div>
  );
};

const Ticket = () => {
  return (
    <div
      css={css`
        text-align: unset;
        ${mq[2]} {
          text-align: right;
        }
      `}
    >
      <p
        css={css`
          font-size: 2.125em;
          letter-spacing: 0.025em;
          margin-bottom: 0.4em;
          font-size: clamp(1.15rem, 4vw, 1.75em);
        `}
      >
        What are you waiting for?
      </p>
      <button
        css={css`
            background: none;
            font-family: PPNeueMachina-InktrapRegular;
            border: none;
            font-size: 3.75em;
            font-size: clamp(1.5rem,4vw,3.75em);
            text-decoration: underline;
            margin-left: -0.165em;
            text-align: left;
          }
      `}
      >
        Claim your spot here.
      </button>
    </div>
  );
};
