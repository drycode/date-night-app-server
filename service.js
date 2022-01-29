async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => { console.log(` -- ${db.name}`) })
    return databasesList.databases
};


async function listCollections(client, database) {
    collections = await client.db(database).listCollections();
    return collections.toArray();
}

async function findUser(users) {
    document = await users.findOne();
    console.log(document);
    return document;
}

async function findAllCards(cards) {
    documents = await cards.find();
    return documents.toArray();
}

module.exports = { listCollections, listDatabases, findUser, findAllCards };