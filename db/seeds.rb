# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
salons = Salon.create([
    {
        name: "Vescada Nails",
        image_url: "https://images.app.goo.gl/c2sPSYQTwbYVLfYB9"
    },
    {
        name: "Vanity Nails",
        image_url: "https://images.app.goo.gl/3gskEygmWXwXFa2j7"
    },
    {
        name: "Hawaii Nails",
        image_url: "https://images.app.goo.gl/BRQ4CsPAKCkSrQtZ9"
    },
    {
        name: "Luxury Nails",
        image_url: "https://images.app.goo.gl/FYANQxSk27yb3kRd6"
    },
    {
        name: "Odyssey Nails",
        image_url: "https://images.app.goo.gl/dSVsktN5bz7VFU2z5"
    },
    {
        name: "U Star Nails",
        image_url: "https://images.app.goo.gl/jXXtGVWyvDr1Wv5MA"
    }
])

reviews = Review.create([
    {
        title: "Great salon",
        description: "The staff took time with my nails and salon was very clean",
        score: 5,
        salon: salons.first
    },
    {
        title: "OK",
        description: "I had to wait a while to be seen. Nails were done nicely",
        score: 3,
        salon: salons.first
    }
])