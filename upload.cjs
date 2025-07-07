const admin = require("firebase-admin");
const fs = require("fs");
const csv = require("csv-parser");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const results = [];

fs.createReadStream("products.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    for (const item of results) {
      try {
        const product = {
          name: item.name,
          description: item.description,
          price: parseFloat(item.price),
          imagePath: item.imagePath,
          rating: parseInt(item.rating || "0", 10),
        };

        // Optionally use product name or a unique ID
        await db.collection("products").add(product);
        console.log(`Added product: ${product.name}`);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
    console.log("Upload complete.");
  });
