import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// eslint-disable-next-line
export const CategoryPageTemplate = ({ title, data: post, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              {(post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                )) || `image should be here` }
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CategoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CategoryPage;

export const Head = ({ data: { markdownRemark: post } }) => {
    return (
      <Seo
        title={post.frontmatter.title}
      />
    )
  }

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredimage {
            childImageSharp {
                gatsbyImageData(
                width: 120
                quality: 100
                layout: CONSTRAINED
                )
            }
        }
      }
    }
  }
`;
