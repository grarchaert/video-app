import { gql } from "@apollo/client";

export const VIDEOS_QUERY = gql`
query Videos($tags: String!, $after: String!, $before: String!) {
  allVideos(limit: 4, tags: $tags, after: $after, before: $before) {
      items {
          id
          name
          poster
      }
      cursor {
          before
          after
      }
  }
}
`;

export const VIDEO_QUERY = gql`
query Video($id: ID!) {
  video(id: $id) {
      name
      description
      poster
  }
}
`;