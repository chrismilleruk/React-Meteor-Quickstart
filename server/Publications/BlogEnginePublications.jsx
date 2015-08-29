Meteor.publish("allposts", () => {
    console.log(PostsLists.find().count())
    return PostsLists.find()
})

Meteor.publish("myposts", (userid) => {
    console.log("User ID: ",userid)
})