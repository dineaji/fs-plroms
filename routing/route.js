const express = require('express');
const axios = require('axios');
//var $ = require('jQuery');

var app = new express();
var router = express.Router();

var headerData = require('../pageContent/header.json');


router.get('/',(req,res)=>{
	res.render('home.hbs',{
		header : headerData
	})
});




/*router.get('/mattelvideoplayer',(req,res)=>{
  axios.get(playlistUrl).then((response)=>{
    // console.log(response.data.playlist);
    res.render('mattelvideoplayer.hbs',{
      appTitle: appTitle,
      pageTitle: 'Playlist | Mattel',
      hasNav: true,
      videoSourceIndex: videoSourceIndex,
      playlist: response.data.playlist,
      vertical: false
    });
  }).catch((error)=>{
    console.log(error);
    res.redirect('/');
  });
});

*/
module.exports = router;