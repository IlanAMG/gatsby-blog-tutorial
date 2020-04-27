const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(
        `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
    ).then(result => {
        console.log(JSON.stringify(result, null, 2))
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
            const prev = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: post.node.frontmatter.slug,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: post.node.frontmatter.slug,
                    next,
                    prev,
                },
            })
        })
    })
}
