var express = require('express');
var router = express.Router();

var USERS = [{
    "name": "段洋",
    "guid": "d616a6E2-9718-Cebe-Cf7e-D77381bbB8C9",
    "id": 1,
    "cardId": "450000201809155723",
    "age": "82",
    "sex": "1"
}, {
    "name": "刘静",
    "guid": "03B639dE-beee-A7ac-30Cd-f5FaC5e434FC",
    "id": 2,
    "cardId": "710000201701188260",
    "age": "42",
    "sex": "0"
}, {
    "name": "张秀英",
    "guid": "34ECEfFF-5ec1-Be13-7c37-5Dd5fFc04D5f",
    "id": 3,
    "cardId": "440000199806153202",
    "age": "22",
    "sex": "0"
}, {
    "name": "贾秀英",
    "guid": "Cb8CDBe5-111D-bA68-A2d0-AADd4b4dbeC3",
    "id": 4,
    "cardId": "140000197410022409",
    "age": "22",
    "sex": "1"
}, {
    "name": "顾洋",
    "guid": "e78BddAE-5bbA-bcd6-8151-Bb13e61A3EDa",
    "id": 5,
    "cardId": "350000197701134338",
    "age": "92",
    "sex": "0"
}, {
    "name": "胡秀英",
    "guid": "FA85b4BB-e32D-B69F-dF6F-b5738fd410E4",
    "id": 6,
    "cardId": "140000198905053447",
    "age": "12",
    "sex": "0"
}, {
    "name": "谢秀英",
    "guid": "2d7F984D-F14C-DDb7-6A59-47f326E5Fcf7",
    "id": 7,
    "cardId": "120000199601247403",
    "age": "72",
    "sex": "1"
}, {
    "name": "周杰",
    "guid": "1f4cb525-9E9B-4A9d-5ADF-dABF3F24BBff",
    "id": 8,
    "cardId": "63000019930723285X",
    "age": "82",
    "sex": "1"
}, {
    "name": "唐霞",
    "guid": "dfBAcAC3-4299-A6EE-D16F-4b5Ec8cE367b",
    "id": 9,
    "cardId": "320000201011189968",
    "age": "32",
    "sex": "0"
}, {
    "name": "孔秀英",
    "guid": "d17C7eDB-BaA4-acc6-541c-CF5CdD571611",
    "id": 10,
    "cardId": "530000198901054082",
    "age": "22",
    "sex": "0"
}]
router.get('/', function (req, res, next) {
    res.json({
        path: 'test'
    })
});
/* GET home page. */
router.get('/users', function (req, res, next) {
    res.json({
        result: USERS,
        date: new Date,
        resultCode: 'ok'
    });
});

module.exports = router;