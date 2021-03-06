var express = require ("express");
var ejs = require ("ejs");
var bodyParser = require ("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
  {name: "Salmon creek", image:"https://images.unsplash.com/photo-1522205419828-f5b336fc3931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b10bf52b7ea50de3250fe021944e57d&auto=format&fit=crop&w=1050&q=80"},
  {name: "Rhett & Link", image:"https://images.unsplash.com/photo-1510016785329-91a548661797?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83087784e83098da941676741fa78c23&auto=format&fit=crop&w=720&q=80"},
  {name: "Lily Sign", image:"https://images.unsplash.com/photo-1506469265591-1fba55e325ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf8c37653649d073ce1dc7c86357783e&auto=format&fit=crop&w=675&q=80"},
  {name: "abc xyz", image:"https://images.unsplash.com/photo-1508257599793-5a200cf82b07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4b040befc23b61e1b38d524a1aff564&auto=format&fit=crop&w=1050&q=80"},
  {name: "def igh", image:"https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcfb4406dd853f2495004eefda3ccdeb&auto=format&fit=crop&w=1050&q=80"},
  {name: "mno pqr", image:"https://images.unsplash.com/photo-1502550900787-e956c314a221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e90f191de3a03c2002ac82c009490e07&auto=format&fit=crop&w=634&q=80"}
];

//so that for the template we dont have to type .ejs everytime
app.set("view engine", "ejs");
app.get('/', function(req,res){
  res.render("landing");
});
app.get('/campgrounds', function(req,res){

  res.render("campgrounds",{campgrounds: campgrounds});
});
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});
app.post("/campgrounds",function(req,res){
  // res.send("This is the post route");
  //get data from form and add it to the campground array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  //redirect back to campfrounds page
  res.redirect("/campgrounds");
});
app.listen(3000, function(){
  console.log("yelpCamp server has started");
});
