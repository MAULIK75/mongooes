const mongoose = require('mongoose');
// const Model = mongoose.model('Double');
// require('mongoose-double')(mongoose);

//connection setup between mongoDB and NodeJS, ExpressJS
mongoose.connect('mongodb://localhost:27017/Sport', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successful created....!!!");
}).catch((err) => {
    console.log(err);
})

//Schema for databse collections
const listSchema = new mongoose.Schema({
    name: { type: String, required: true, unique : true},
    type: String,
    active: Boolean,
    age : {type : Number, min: 15, max: 65 },
    year : {type : Number},
    date: {
        type: Date,
        default: Date.now
    }

})



//create an model or collection

const Sport = mongoose.model('Sport', listSchema
    // { name: String ,
    //     type: String,
    //     active: Boolean}
);


/* 
//create an document or insert data into it

const Football = new Sport({
    name: "Football",
    type: 'sport',
    active: true

})
Football.save();


const Cricket = new Sport({
    name: "Cricket",
    type: 'sport',
    active: true
})
Cricket.save();
 */

// create or insert document usinf async await

const newDoc = async () => {
    try {
        const vollyballSport = new Sport({
            name: "vollyball",
            type: 'Ground',
            active: true,
            age : 20,
            year : 2011
        })

        const basketballSport = new Sport({
            name: "basketball",
            type: 'Ground',
            active: true,
            age : 17,
            year : 2015
        })

        const wweSport = new Sport({
            name: "wwe",
            type: 'Indoor',
            active: true,
            age : 14,
            year : 2014
        })

        const result = await Sport.insertMany([wweSport]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

newDoc();



//Read document


const getDoc = async () => {

    const result = await Sport.find({ name : "wwe"}).select({name : 1}).count();
    console.log(result);
}

// getDoc();
