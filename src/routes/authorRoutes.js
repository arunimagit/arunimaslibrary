const express = require("express");
const authorsRouter = express.Router();
function router(nav){

    var authors = [
        {
          
            author: "Chetan Bhagat",
            book: "The 3 Mistakes of My Life",
            genre: "Fiction",
            img: "Chetan.jpg"
        },
        
        {
            author: "Arundhati Roy",
            book: "The God of Small Things",
            genre: "Fiction",
            img: "Arundhati.jpg"
        },
        {
            author: "Lewis Carroll",
            book: "Alice's Adventures in Wonderland",
            genre: "Fantasy",
            img: "alice.jpg"
    
        } 

    ]
    authorsRouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            title:"Library",
            authors
        });
    });
    
    
    authorsRouter.get("/:id", function(req,res){
        const id = req.params.id;
            res.render("author",{
                nav,
                title:"Library",
                author:authors[id]
            });
    });

    return authorsRouter;

}


module.exports = router;