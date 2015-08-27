Meteor.publish("allposts", () => {
    console.log(PostsLists.find().count())
    return PostsLists.find()
})