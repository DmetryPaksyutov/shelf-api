const Books = require('./Book.model');

module.exports = {
    async getBooksList(start, end) {
        try {
            
            const books = await Books.find().select('-comments')
            .skip(start)
            .limit(end - start);
            console.log(books);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },
    
    async getBooksList_Find(start, end, regex) {
        try {
            const books = await Books.find({
                $or: [
                    { name: { $regex: regex, $options: 'i' } },
                    { author: { $regex: regex, $options: 'i' } }
                ]
            }).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getBooksList_Gener(start, end, gener) {
        try {
            const books = await Books.find(
                    {genre : gener}
            ).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getBooksList_isStock(start, end) {
        try {
            const books = await Books.find(
                    {isStock : true}
            ).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getBooksList_Find_Gener(start, end, regex, gener) {
        try {
            const books = await Books.find({
                genre : gener,
                $or: [
                    
                    { name: { $regex: regex, $options: 'i' } },
                    { author: { $regex: regex, $options: 'i' } }
                ],
            }).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getBooksList_Gener_isStock(start, end, gener) {
        try {
            const books = await Books.find({
                    genre : gener,
                    isStock : true
            }).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getBooksList_Find_Gener_isStock(start, end, regex, gener) {
        try {
            const books = await Books.find({
                genre : gener,
                isStock : true,
                $or: [
                    { name: { $regex: regex, $options: 'i' } },
                    { author: { $regex: regex, $options: 'i' } },
                ],
            }).select('-comments')
            .skip(start)
            .limit(end - start);
            return books;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },


    async getComments (id) {
        try {
            const comments = Books.findById(id, "comments");
            return comments;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async addComments (idBook, comment) {
        try {
            const updatedBook = await Book.findByIdAndUpdate(
                idBook,
                { $push: { comments: comment } },
                { new: true, useFindAndModify: false }
            );
            return true;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async addBall (id, ball) {
        try {
            const newBook = await Book.findByIdAndUpdate(
                id,
                { $inc: { countPoints: 1, sumPoints: ball } },
                { new: true } );
            return Math.round( newBook.sumPoints / newBook.countPoints );
        }
        catch (e) {
            console.log(e);
            return null
        }
    }


}
