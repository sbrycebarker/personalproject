# personalproject

ADD TO SERVER JS??
app.get('/api/instagram/data', function(req , res){
axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=37620940.8ccf638.96228796bf934c5fbf17c8a2394e2a88')
.then(function (response) {
  // console.log(response.data);
  res.json(response.data)
}).catch(function (error){
  // console.log(error)
}
);

});
