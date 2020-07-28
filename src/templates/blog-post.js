import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash';
import Img from 'gatsby-image'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

import "katex/dist/katex.min.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="clearfix post-content-box">
          <article className="article-page">
            <div className="page-content">
              {post.frontmatter.img && (
                <div className="page-cover-image">
                  <figure>
                    <Img
                      className="page-image"
                      key={post.frontmatter.img.childImageSharp.fluid.src}
                      fluid={post.frontmatter.img.childImageSharp.fluid}
                    />
                  </figure>
                </div>
              )}
              <div className="wrap-content">
                <header className="header-page">
                  <h1 className="page-title">{post.frontmatter.title}</h1>
                  <div className="page-date">
                    <span>{post.frontmatter.date}</span>
                  </div>
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="page-footer">
                  <div className="page-tag">
                    {post.frontmatter.tags &&
                    post.frontmatter.tags.map(tag => (
                      <span key={tag}>
                        <Link  className="tag" to={`/tags/${kebabCase(tag)}/`}># {tag}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY, MMM DD")
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 3720) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
