const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    //delete many

    // db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //delete one

    // db.collection('todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //Find one and delete
    // db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Jon Snow'}).then((result) => {
        console.log('Duplicates deleted successfully!');
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b7858de4e376b4dd847b49b')
    }).then((result) => {
        console.log('User deleted by id');
        console.log(result);
    });
    //db.close();
});

