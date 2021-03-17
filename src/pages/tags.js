// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react'
import { Link, graphql } from 'gatsby'

import { kebabCase } from 'lodash'

import Layout from '../components/layout'
const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group

  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="blog-tags">
          <h1>Tags</h1>
          <ul className="tags">
            {allTags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  className="tag"
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
