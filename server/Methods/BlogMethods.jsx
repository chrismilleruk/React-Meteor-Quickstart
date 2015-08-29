Meteor.methods({
  "InsertPost": (data) => {
      console.log("METEOR USER: ",Meteor.user()._id)
     PostsLists.insert({
         title: data.title,
         author: data.author,
         content: data.content,
         createdAt: new Date(),
         owner: Meteor.user()._id
     }, (err, res) => {
         if(err) {
             console.log(err)
         }

         console.log(res)
     })
  }
})