import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';

import { List, Avatar, Divider } from 'antd'

const { Item } = List
const { Meta } = Item

const Bio = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
            imageAuthor
            descriptionAuthor
          }
        }
      }
    `)

  return (
    <>
      <Divider orientation='left'>
        Ma biographie
      </Divider>
      <Item>
        <Meta
          avatar={
            <Avatar
              alt={data.site.siteMetadata.author}
              size={64}
              src={data.site.siteMetadata.imageAuthor}
            />
          }
          title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
          description={data.site.siteMetadata.descriptionAuthor}
        />
      </Item>
    </>
  )
}

export default Bio
