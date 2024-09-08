const Clubs = require('./Club.model');

module.exports = {
    async getClubsList(start, end) {
        try {
            
            const clubs = await Clubs.find().select('-messages').select('-entrants')
            .skip(start)
            .limit(end - start);
            
            return clubs;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },
    
    async getClubsList_name(start, end, nameP) {
        try {
            
            const clubs = await Clubs.find({name : {$regex: nameP, $options: 'i'}})
            .select('-messages').select('-entrants')
            .skip(start)
            .limit(end - start);
            
            return clubs;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getClubsList_tags(start, end, tagsArray) {
        try {
            
            const clubs = await Clubs.find( { tags: { $in: tagsArray } } )
            .select('-messages').select('-entrants')
            .skip(start)
            .limit(end - start);
            
            return clubs;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async getClubsList_name_tags(start, end, nameP, tagsArray) {
        try {
            
            const clubs = await Clubs.find({
                tags: { $in: tagsArray },
                name: { $regex: nameP, $options: 'i' }
            })
            .select('-messages').select('-entrants')
            .skip(start)
            .limit(end - start);
            
            return clubs;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async createClub (name, entrants, tags, image) {
        try {
            let club = await new Clubs({
                name, entrants, tags, image, messages : []
            }).save();
            return {status : true};
        }
        catch (e) {
            console.log(e);
            return null
        }
    }


}
