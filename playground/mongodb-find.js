const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('todos').find({
    //     _id: new ObjectID('5b7851504e376b4dd847b499')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('todos').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
 
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({location: 'Winterfell'}).toArray().then((docs) => {
        console.log('People found: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Could not fetch users from MongoDB server');
    });
    //db.close();
});

