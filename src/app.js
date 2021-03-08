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
    name: { type: String, required: true },
    type: String,
    active: Boolean,
    //  age : Double,
    //  year : Double,
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
            active: true
        })

        const basketballSport = new Sport({
            name: "basketball",
            type: 'Ground',
            active: true
        })

        const wweSport = new Sport({
            name: "wwe",
            type: 'Indoor',
            active: true
        })

        const result = await Sport.insertMany([vollyballSport, basketballSport, wweSport]);
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

getDoc();
