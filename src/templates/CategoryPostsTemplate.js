import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import Blog from "../components/Blog";

const CategoryPostsTemplate = props => {
    const {
        pageContext: { categoryList },
        
        data: {
            posts: { edges: posts = [] },
            site: {
                siteMetadata: { facebook }
            }
        }
    } = props;

    return (
        <React.Fragment>
            <ThemeContext.Consumer>
                {theme => (
                    <Article theme={theme}>
                        <header>
                            <Headline theme={theme}>
                                <span>Ultimi Post</span> <FaTag />
                                {categoryList}
                            </Headline>
                            <ThemeContext.Consumer>
                                {theme => <Blog posts={posts} theme={theme} />}
                            </ThemeContext.Consumer>
                            {/* <List edges={edges} theme={theme} /> */}
                        </header>
                    </Article>
                )}
            </ThemeContext.Consumer>

        </React.Fragment>
    );
};

CategoryPostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired
};

export default CategoryPostsTemplate;

// eslint-disable-next-line no-undef
export const categoryQuery = graphql`
  query PostsListByCategory($categoryList: [String]) {
    posts:allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { in: $categoryList } } }
    ) {
      edges {
        node {
            excerpt
            fields {
              slug
              prefix
            }
            frontmatter {
              title
              category
              author
              cover {
                children {
                  ... on ImageSharp {
                    fluid(maxWidth: 800, maxHeight: 360) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
