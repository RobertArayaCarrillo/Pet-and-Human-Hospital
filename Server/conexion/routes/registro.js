const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");
const dbContext = require("../data/databaseContext");
const router = require('express').Router();
bodyParser = require('body-parser');

router.get("/getDatosUsuario", async(req,res) => {

    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    await dbContext.create(client, databaseId, containerId);
     // <QueryItems>
     console.log(`Querying container: Items`);

     // query to return all items
     const querySpec = {
       query: "SELECT * from c"
     };
     
     // read all items in the Items container
     const { resources: items } = await container.items
       .query(querySpec)
       .fetchAll();
 
     items.forEach(item => {
       console.log(`${item.id} - ${item.description}`);
     });
     console.log(container.items
        .query(querySpec)
        .fetchAll());
     res.send (await container.items
        .query(querySpec)
        .fetchAll());
})
router.post("/createDatosUsuario", async(req,res) => {

    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    await dbContext.create(client, databaseId, containerId);
     // <QueryItems>
     console.log(req.body);
     const user = {
      id : req.body.id,
      nombre : req.body.nombre,
      edad : req.body.edad,
      problema : req.body.problema,
      servicio : req.body.servicio,
      costo :`0`,
      pagado : `False`
    };
    const querySpec = {
        query: "SELECT * from c"
      };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
    const { resource: createdItem } = await container.items.create(user);
    res.send("True")


})
router.post("/updateDataPago", async(req,res) => {

    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    await dbContext.create(client, databaseId, containerId);
     // <QueryItems>
     var id = req.body.id;
    const querySpec = {
        query: `SELECT * from c `
      };
      
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      console.log(await container.items.item("Mamon").read());
      const {resource:alteruser} = items.find(id);








      //const alteruser = items.find(id);
      alteruser.find("pagado") = "true";
      console.log(items.find("Mamon"))

      items.forEach(item => {
        console.log(`${item.id} - ${item.description}`);
      });
      console.log("despues llego")
      items.updatedItem("pagado","true")
    const { resource: updatedItem } = await container
      .item(id)
      .replace(items);
      


})
module.exports = router;

