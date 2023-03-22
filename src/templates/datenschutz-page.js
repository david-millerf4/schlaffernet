import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo"

// eslint-disable-next-line
export const DatenschutzPageTemplate = ({ title, content, contentComponent }) => {
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
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DatenschutzPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DatenschutzPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DatenschutzPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DatenschutzPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DatenschutzPage;

export const Head = () => <Seo title="Datenschutz" />

export const datenschutzPageQuery = graphql`
  query DatenschutzPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
