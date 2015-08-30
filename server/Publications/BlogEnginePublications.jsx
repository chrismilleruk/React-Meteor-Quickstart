Meteor.publish("allposts", () => {
    return PostsLists.find()
})

Meteor.publish("myposts", (userId) => {
    return PostsLists.find({"owner": userId})
})