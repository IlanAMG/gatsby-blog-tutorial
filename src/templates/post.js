import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

import { Button, Divider } from 'antd'
import { Icon } from '@ant-design/compatible';

export default ({ data, pageContext }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html

  const { prev, next } = pageContext

  return (
    <Layout>
      <SEO title={title} description={data.markdownRemark.excerpt} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Bio />
      <Divider />
      <Button.Group>
        {next && (
          <Button type="primary" size="large">
            <Link to={next.frontmatter.slug}>
              <Icon type="left" />
              {next.frontmatter.title}
            </Link>
          </Button>
        )}
        {prev && (
          <Button type="primary" size="large">
            <Link to={prev.frontmatter.slug}>
              {prev.frontmatter.title}
              <Icon type="right" />
            </Link>
          </Button>
        )}
      </Button.Group>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
