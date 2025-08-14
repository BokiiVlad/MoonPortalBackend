import { initMongoDB } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";

const appStart = async () => {
    await initMongoDB();
    setupServer();
};

appStart();
