import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../media/logo/sa_pri_black_rgb.svg";
import Location from "../media/location.svg";
import Date from "../media/date.svg";
import ExpoVisual from "../media/expo_visual.jpg";
import mq from "../components/defaults/mediaquery";
import { css } from "@emotion/react";
import Button from "../components/typeform";
import Link from "next/link";
import { PPNeueMachina } from "../fonts/fonts";

export default function Home() {
  let [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  }, []);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        min-height: ${height};
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
          priority
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
      <div>
        <Ticket />
        <Footer />
      </div>
    </div>
  );
}

const Title = () => {
  return (
    <div>
      <h1
        css={css`
          font-family: ${PPNeueMachina.style.fontFamily};
          font-size: 8.25em;
          font-size: clamp(2.5rem, 13vw, 8.25em);
          margin: 0;
          font-weight: 400;
          line-height: 1em;
          margin-left: -0.065em;
        `}
      >
        EXPO2023
      </h1>
      <p
        css={css`
          font-size: 3.75em;
          font-size: clamp(2rem, 4vw, 3.75em);
          margin: 0;
          margin-top: -0.1em;
          line-height: 1em;
        `}
      >
        Piloting the Future
      </p>
    </div>
  );
};

const Information = () => {
  const info_list = [
    {
      content: "Stuttgart, Germany",
      icon: <Location />,
    },
    {
      content: "June 22, 2023",
      icon: <Date />,
    },
  ];
  return (
    <table
      css={[
        css`
          margin-top: 3em;
        `,
      ]}
    >
      {info_list.map((item, i) => (
        <tr key={i}>
          <td>
            <div
              css={[
                css`
                  height: clamp(1.15rem, 4vw, 1.65em);
                  margin-right: 0.75em;
                  text-align: center;
                  svg {
                    height: 100%;
                    vertical-align: baseline;
                  }
                `,
              ]}
            >
              {item.icon}
            </div>
          </td>
          <td>
            <p
              css={[
                css`
                  font-size: 2.125em;
                  margin: 0;
                  font-size: clamp(1.15rem, 4vw, 1.75em);
                  letter-spacing: 0.01em;
                `,
              ]}
            >
              {item.content}
            </p>
          </td>
        </tr>
      ))}
    </table>
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
          font-size: clamp(2rem, 4vw, 3.75em);
          text-decoration: underline;
          margin-left: -0.165em;
          text-align: left;
          cursor: pointer;
        `}
      />
      <p
        css={[
          css`
            margin-top: 15px;
          `,
        ]}
      >
        <a
          href="https://pnptc.notion.site/EXPO2023-all-you-need-to-know-d152426b22994e01ac1112bd4d29e88b"
          target="_blank"
          rel="noreferrer"
          css={[
            css`
              width: 350px;
              display: inline-block;
              text-decoration: none;
              color: inherit;
            `,
          ]}
        >
          Already registered and looking for more event specific information?{" "}
          <span
            css={[
              css`
                text-decoration: underline;
              `,
            ]}
          >
            Follow this link
          </span>
          .
        </a>
      </p>
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
