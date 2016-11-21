/**
 * Created by Andrew on 21/11/2016.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our http server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
//Cennection URL. This is where your mongodb server is running.
var url = 'mongodb://<dbuser>:<dbpassword>@ds050879.mlab.com:50879/nodeappmongo';
//We need to work with "MongoClient" interface in order to connect to a MongoDB server.
var MongoClient = mongodb.MongoClient;