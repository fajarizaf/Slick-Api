

var Db = require('mysql-activerecord');
var db = new Db.Adapter({
	server: 'localhost',
	username: 'root',
	password: 'root',
    database: 'skarid'
});

const post = app => {

    app.get('/api/post', (req, res) => {
        db.get('post', function(err, results, fields) {
            res.json(results)
        })
    })

}

module.exports = post
