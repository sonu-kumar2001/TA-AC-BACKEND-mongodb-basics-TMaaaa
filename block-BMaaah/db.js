use blog
db.createCollection("articles")
db.articles.insertMany(
    [{
        _id: 1,
        title: "first-article",
        createdAt: "26-11-2020",
        details: "article on html",
        author: {
            name: "suraj",
            email: "123@xyz",
            age: 25,
        },
        tags: ["html","css"]
    },
    {
        _id: 2,
        title: "second-article",
        createdAt: "26-11-2020",
        details: "article on javascript",
        author: {
            name: "node",
            email: "234@xyz",
            age: 25,
        },
        tags: ["javascript","react"]
    },
    {
        _id: 3,
        title: "third-article",
        createdAt: "26-11-2020",
        details: "article on node",
        author: {
            name: "suraj",
            email: "456@xyz",
            age: 25,
        },
        tags: ["node","deno"]
    }
]
)
db.articles.find().pretty()
db.articles.find({title: "first-article"}).pretty()
db.articles.find({"author.name":"node"}).pretty()
db.articles.find({tags:"node"}).pretty()
db.articles.update({article:"first-article"},{$set:{"author.name":"sonu"}})
db.articles.updateMany({},{$rename:{"details":"description"}})
db.articles.update({title:"second-blog"},{$push:{tags:"mongo"}})
db.articles.update({"author.name":"suraj"},{$set:{title:"best-blogs"}})
db.articles.update({author:{name:"suraj"}},{title:"best-blogs"})
db.articles.update({title:"first-blog"},{$set:{"author.age":30}})
db.articles.remove({_id:1})


//2nd
db.users.find({gender:"Male",sports:"cricket"}).pretty()
db.users.update({name:"Steve Ortega"},{$push:{sports:"golf"}})
db.users.find({sports:{$in:['football','cricket']}}).preety()
b.users.find({"name": {$regex: /[r][i]/}}).pretty()


