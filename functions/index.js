import { https, logger } from "firebase-functions";

export const helloWorld = https.onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
