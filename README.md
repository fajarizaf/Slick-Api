# Web Services with nodejs ( JSON Delivery Data )

RestFull API for Product Management
- create using express framework
- manipulate json data with lodash module
- based promised scync
- no authentications access
- simple example CRUD proses


#Dependencies
- loadash ( manipulate data array )
- nodemon ( script automate start )


#Data Store Json
path: data -> product.json


#EndPoint -- OF product data

|  method   |  endpoint         | descriptions         | data           |
| --------  | ----------------- | -------------------- | -------------- |
|  GET      |  api/products     | List off product     |  '[{},{},{}]'  |
|  GET      |  api/product/:id  | view detail product  |  {}            |
|  POST     |  api/products     | deliver new product  |  '{"info":""}' |
|  PUT      |  api/product/:id  | update new product   |  '{"info":""}' |
