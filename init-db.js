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
