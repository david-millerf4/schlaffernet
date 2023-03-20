/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
            siteMetadata {
              title
              author {
                name
                summary
              }
              image
              description
              siteUrl
              keywords
              social {
                twitterUsername
                twitterUrl
              }
            }
          }
        }
      `
    )

    const defaultDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    const pathName = `${site.siteMetadata?.siteUrl}/${title.toString().toLowerCase()}`
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`,
        url: `${site.siteMetadata.siteUrl}${pathName || ``}`,
        twitterName: site.siteMetadata?.social?.twitterUsername || ``,
        twitterUrl: site.siteMetadata?.social?.twitterUrl || ``,
      }

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <link rel="canonical" href={pathName} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={seo.description} />
            <meta property="fb:app_id" content="https://www.facebook.com/profile.php" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Experience7"></meta>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitterName || ``} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:url" content={site.siteMetadata?.social?.twitterUrl || ``} />
            <meta name="twitter:site" content={seo.twitterUrl} />
            <meta name="twitter:image:alt" content="Experience7 logo" />
            <link rel="icon" href="./img/logogk-1-ico.png" />
            {children}
        </>
    )
}

export default Seo
