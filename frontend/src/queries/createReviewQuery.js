const createReviewQuery = (attributes) => `
  mutation {
    createReview(
      title: "${attributes.title}",
      description: "${attributes.description}",
      score: ${attributes.score},
      salonId: ${attributes.salonId}
    ) {
      title
      description
      score
      salonId
    }
  }
`

export default createReviewQuery
