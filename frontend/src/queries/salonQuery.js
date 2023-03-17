const salonQuery = (slug) => `
  query Salon {
    salon(slug: "${slug}") {
      id
      name
      imageUrl
      slug
      averageScore
      reviews {
        id
        title
        description
        score
      }
    }
  }
`

export default salonQuery