import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { FaArrowDown } from "react-icons/fa/";
import {FaTree} from 'react-icons/fa/';
import {TiTree} from 'react-icons/ti/';
import mountain from '../../images/png/Webp.net-resizeimage.png'
const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          Sono Luca Sembolini e sono un Trail Runner per passione, qui esprimo le mie opinioni su tutto quello che riguarda il mondo del running. 
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          {/* <FaTree /> */}
          <img src={mountain} alt="mountain image" />
        </button>
        
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .instagram{
          align-items:left;
          font-weight:bold;
          background:${theme.background.color.brand};
          border-radius:0.5;
          position:absolute;
          bottom:0;
          right:0;
        }
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image:
                            linear-gradient(
                              rgba(0, 0, 0, 0.5),
                              rgba(0, 0, 0, 0.5)
                            ), url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${`calc(${theme.hero.h1.size} * 0.7)`};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          transform: rotate(180deg);
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(img) {
            position: relative;
          
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: linear-gradient(
                              rgba(0, 0, 0, 0.5),
                              rgba(0, 0, 0, 0.5)
                            ), url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.2)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image:linear-gradient(
                              rgba(0, 0, 0, 0.5),
                              rgba(0, 0, 0, 0.5)
                            ), url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.4)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
