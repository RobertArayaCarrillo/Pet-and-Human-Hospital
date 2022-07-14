// @ts-check

const config = {
  endpoint: "https://myappdbcosmoss.documents.azure.com:443/",
  key: "e50Hqojr9jt4vs4l8AAmjgjeG6BxYxssbg5KFIUvLRUdFBnzRhYqqR56Hr0tCPZjPV5LTVsj5s8ym5Kt2hsJ5w==",
  databaseId: "Hospital_Container",
  containerId: "Hospital",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
