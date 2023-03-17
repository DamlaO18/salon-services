const salonsQuery = `
  query Salons {
    salons {
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

export default salonsQuery