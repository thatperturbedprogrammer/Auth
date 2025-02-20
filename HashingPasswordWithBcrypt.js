// Hashing password using bcryptjs
import bcrypt from "bcryptjs";

const saltRounds = 10;

// hashing the password and saving it in the database
bcrypt.hash(password, saltRounds, async (err, hash) => {
  if (err) {
    console.log(`Error hashing password : ${err}`);
  } else {
    // save the password in the database
    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2)",
      [email, hash]
    );
    console.log(result);
  }
});

// Verifying the password using bcrypt.compare() method to compare the plain password with the hashed password stored in the database.
bcrypt.compare(loginPassword, dbHashedPassword, (err, result) => {
  if (err) {
    console.log(`Error comparing hashed passwords : ${err}`);
  } else {
    if (result) {
      // If the passwords match, render the page.
      res.render("<page-name>");
    } else {
      // If the passwords do not match, send an error message.
      res.send("Incorrect Password");
    }
  }
});
