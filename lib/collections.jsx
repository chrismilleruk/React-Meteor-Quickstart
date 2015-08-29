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
    content: {
        type: String,
        label: "content"
    },
    createdAt: {
        type: Date,
        label: "Created At"
    },
    owner: {
        type: String,
        label: "owner"
    }
})

PostsLists.attachSchema(Schemas.PostsListSchema);