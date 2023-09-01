import { gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query {
    authors {
      id
      avatar {
        url
      }
      name
      slug
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      blogs {
        ... on Blog {
          id
          cover {
            url
          }
          title
          slug
        }
      }
    }
  }
`;

const GET_BLOGS = gql`
  query {
    blogs {
      author {
        avatar {
          url
        }
        name
      }
      id
      cover {
        url
      }
      title
      slug
    }
  }
`;

const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blog(where: { slug: $slug }) {
      title
      cover {
        url
      }
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query getBlogComments($slug: String!) {
    comments(where: { blog: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export { GET_AUTHORS, GET_AUTHOR, GET_BLOGS, GET_BLOG, GET_BLOG_COMMENTS };
