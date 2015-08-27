Meteor.methods({
  "InsertPost": (data) => {
     PostsLists.insert({
         title: "Ulysses",
         author: "James Joyce",
         createdAt: new Date()
     }, (err, res) => {
         if(err) {
             console.log(err)
         }

         console.log(res)
     })
  }
})