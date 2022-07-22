const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
const dbContext = require("../data/databaseContext");
const router = require('express').Router();

router.get("/getDatosUsuario", async(req,res) => {
    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);
    await dbContext.create(client, databaseId, containerId);
    request.execute("SELECT * from c");
    //query: "SELECT * from c"
    res.send(result.recordset);
    console.log(res);
})



module.exports = router;

