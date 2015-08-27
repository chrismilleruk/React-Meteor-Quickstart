PostsLists = new Mongo.Collection("posts")


Schemas = {}

Schemas.PostsListSchema = ({
    title: {
        type: String,
        label: "title",
        max: 100
    },
    author: {
        type: String,
        label: "author",
        max: 100
    },
    createdAt: {
        type: Date,
        label: "Created At"
    }
})

PostsLists.attachSchema(Schemas.PostsListSchema);