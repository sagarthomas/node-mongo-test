const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID('5b786b8ff8d2fd4dd8628767')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrignal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    // Update user name and increment age
    db.collection('Users').findOneAndUpdate(
        {
            name: 'Eddard Stark'
        },
        {
            $set: {
                name: 'Bran Stark'
            },
            $inc: {
                age: -45
            }
        }, 
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    //db.close();
});

