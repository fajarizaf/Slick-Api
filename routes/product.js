const lodash = require('lodash')
const fs = require('fs')

const product = app => {
  let pathProduct = './data/product.json'
  let products = JSON.parse(fs.readFileSync(pathProduct, 'utf8'))


      // Read
      app.get('/api/products', (req, res) => {
        res.json(products)
      })


      // Read by id product
      app.get('/api/product/:id', (req, res) => {
          let getIndex = new Promise((resolve, reject) => {
              const index = lodash.findIndex(products, { id: parseInt(req.params.id) })
              if(index >= 0) { resolve (index) }
              reject('notFound')

          // then success
          }).then((callback) => {
            res.json(products[callback])
          }).catch((callback) => {
            res.json({"info": callback })
          })
      })


      // Create
      app.post('/api/products', (req, res) => {
        var deliver = req.body
        products.push(deliver)
        fs.writeFile(pathProduct, JSON.stringify(products), 'utf8', function(err) {
          if(err) { res.json({"info":"Failed"}) }
          res.json({"info":"Success"})
        })
      })


      // Update
      app.put('/api/product/:id', (req, res) => {
        var dataUpdate = req.body
        let getIndex = new Promise((resolve, reject) => {
          const index = lodash.findIndex(products, { id: parseInt(req.params.id) })
          if(index >= 0) { resolve(index) }
          reject('Failed')

        }).then((callback) => {
            lodash.merge(products[callback], dataUpdate)
            fs.writeFile(pathProduct, JSON.stringify(products), 'utf8', function(err) {
              if(err) { res.json({"info":"Failed"}) }
              res.json({"info":"Success"})
            })
        }).catch((callback) => {
            res.json({"info": callback })
        })
      })

}

module.exports = product
