import Image from "next/image";
import Logo from "../media/logo/sa_pri_black_rgb.svg";
import ExpoVisual from "../media/expo_visual.jpg";
import mq from "../components/defaults/mediaquery";
import { css } from "@emotion/react";
import Button from "../components/typeform";
import Link from "next/link";
import { Inter } from "../fonts/fonts";
import { PPNeueMachina } from "../fonts/fonts";

export default function Home({ className }) {
  console.log(className);
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
        padding: 4em 1em 1em;
        ${mq[1]} {
          padding: 7em 3em 3em;
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
          placeholder="empty"
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
          <Title className={className} />
        </div>
        <Information />
      </div>
      <div>
        <Ticket />
        <Footer />
      </div>
    </div>
  );
}

const Title = ({ className }) => {
  return (
    <div className={className}>
      <p
        css={css`
          font-family: ${PPNeueMachina.style.fontFamily};
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
          font-size: clamp(2rem, 4vw, 3.75em);
          margin: 0;
          margin-top: -0.1em;
          line-height: 1em;
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
          font-size: clamp(1.15rem, 4vw, 1.75em);
          letter-spacing: 0.01em;
        }
      `}
    >
      <p>Stuttgart, Germany</p>
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
      <Button
        css={css`
            background: none;
            font-family: ${PPNeueMachina.style.fontFamily};
            border: none;
            font-size: 3.75em;
            font-size: clamp(2rem,4vw,3.75em);
            text-decoration: underline;
            margin-left: -0.165em;
            text-align: left;
            cursor: pointer;
          }
      `}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      css={[
        css`
          display: flex;
          flex-direction: column;
          margin-top: 1.5em;
          ${mq[2]} {
            align-items: flex-end;
            flex-direction: row-reverse;
          }
          & > * {
            flex: 0 0 50%;
          }
        `,
      ]}
    >
      <div>
        <p
          css={css`
            font-size: 0.75em;
            opacity: 0.5;
            text-align: left;
            margin: 1em 0 0;
            a {
              color: black;
            }
            ${mq[2]} {
              text-align: right;
            }
          `}
        >
          If you or your employer are already part of STARTUP AUTOBAHN powered
          by Plug and Play you might be already eligible to register via the
          partner tickets. Please refer to the STARTUP AUTOBAHN contact person
          within your company in order to access your personal ticket. For
          additional questions please reach out to{" "}
          <a href="mailto:bastian@pnptc.com">bastian@pnptc.com</a>.
        </p>
      </div>
      <div
        css={[
          css`
            display: flex;
            font-size: 0.75em;
            margin-top: 1em;
            a {
              text-decoration: none;
              color: black;
            }
          `,
        ]}
      >
        <Link href="/imprint">Imprint</Link>
        <p
          css={[
            css`
              margin: 0 1em;
            `,
          ]}
        >
          {" "}
          |{" "}
        </p>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};
