const mongoose = require('mongoose');
const mongoDBUrl = require('./Mongo/config').mongoDBUrl;

module.exports = {
    StartDB () {
        try {
            mongoose.set('strictQuery', false);
            mongoose.connect(mongoDBUrl)
            console.log('БД подключена');
        }
        catch(error) {
            console.log(error)
            process.exit()
        }
    },

    async findOneById (model, id) {
        try {
            return await model.findById(id);
        }
        catch (e) {
            console.log(e);
            return 'error'
        }
    },

    async findMoreById (model, ids) {
        try {
            return await model.find().where('_id').in(ids).exec();
        }
        catch (e) {
            console.log(e);
            return 'error'
        }
    }

    /*async findOneById (model, id, loading = undefined) {
        try {
            let object = await model.findById(id).exec();

                if (loading !== undefined) {
                   for (let loadingObj in loading) {
                       let fieldObject = {};
                       let field = object[loadingObj.field];

                        if (typeof field === 'string') {
                            fieldObject = await this.findOneById(loadingObj.model, field, loadingObj.dop);
                            object[loadingObj.field] = fieldObject;
                        }

                        if (Array.isArray(field)) {
                            fieldObject = await this.findMoreById(loadingObj.model, field, loadingObj.dop);
                            object[loadingObj.field] = fieldObject;
                        }
                   }

                   return object;
            }
        }
        catch (e) {
            console.log(e);
            return null;
        }
    },

    async findMoreById (model, ids, loading = undefined) {
        try {
            let objects = await model.find().where('_id').in(ids).exec();
            if (loading !== undefined) {
                for (let loadingObj in loading) {
                    const idList = objects.map(obj => obj[loadingObj.field]);

                    if (typeof idList[0] === 'string') {
                        let loadingList = await loadingObj.model.find().where('_id').in(ids).exec();
                        objects.forEach( ( obj, i ) => {
                            obj[loadingObj.field] = loadingList[i];
                        });
                    }
                }
            }

            return objects;

        }
        catch (e) {
            console.log(e);
            return null;
        }
    },*/



}