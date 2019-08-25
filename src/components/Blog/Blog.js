import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";
import {  FaInstagram} from "react-icons/fa/";

const Blog = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main">
        <section className="instagram">
         <a className="instagram" href="https://instagram.com/running_sembo" target="_blank">Seguimi su Instagram <FaInstagram/></a>
        </section>
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .instagram{
          font-size:${theme.heading.size.h3};
          padding-top:30px;
          font-weight:bold;
          text-align:center;
          
        }
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
