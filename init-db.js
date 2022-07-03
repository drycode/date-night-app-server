use primaryDateNightDb;
db.users.drop();
db.dateCards.drop();
db.createUser({
  user: "testuser",
  pwd: "examplepasswordnotforproduction",
  roles: [
    {
      role: "readWrite",
      db: "primaryDateNightDb",
    },
  ],
});
