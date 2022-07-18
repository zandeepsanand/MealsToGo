const liveHost = "https://us-central1-mealstogo-d198c.cloudfunctions.net";
const localHost = "https://us-central1-mealstogo-d198c.cloudfunctions.net";


export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;