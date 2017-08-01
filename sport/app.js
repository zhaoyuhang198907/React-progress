let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/lists', function (req, res) {
    res.sendfile('./mock/sportLists.json');
});
app.post('/lists', function (req, res) {
    let lists = JSON.parse(fs.readFileSync('./mock/sportLists.json'));
    req.on('data',function (data) {
        let list=JSON.parse(data);
        lists.push(list);
    });
    req.on('end',function () {
        fs.writeFile('./mock/sportLists.json', JSON.stringify(lists), function () {
            res.send('success');
        });
    })
});
app.listen(8080);