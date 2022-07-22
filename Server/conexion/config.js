// @ts-check

/*const config = {
  endpoint: "https://myappdbcosmoss.documents.azure.com:443/",
  key: "e50Hqojr9jt4vs4l8AAmjgjeG6BxYxssbg5KFIUvLRUdFBnzRhYqqR56Hr0tCPZjPV5LTVsj5s8ym5Kt2hsJ5w==",
  databaseId: "Hospital_Container",
  containerId: "Hospital",
  partitionKey: { kind: "Hash", paths: ["/category"] }

};*/
const config = {};

config.host = process.env.HOST || "https://myappdbcosmoss.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "e50Hqojr9jt4vs4l8AAmjgjeG6BxYxssbg5KFIUvLRUdFBnzRhYqqR56Hr0tCPZjPV5LTVsj5s8ym5Kt2hsJ5w==";
config.databaseId = "Hospital_Container";
config.containerId = "Hospital";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3001'} to try the sample.`);
}

module.exports = config;
