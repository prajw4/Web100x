const express = require("express")
const app = express();
var users =[{
  name : "Prajwal",
  age : "45",
  kidneys:[{
    Healthy:false
  }]

}];

app.use(express.json()); 
app.get("/",function(req,res){
  const johnkidneys = users[0].kidneys;
  const numberofkidneys = johnkidneys.length;
  let numberofHealthykidneys= 0;

  for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].Healthy){
      numberofHealthykidneys=numberofHealthykidneys+1;
      
    }
  }
  const numberofunhealthykidneys = numberofkidneys-numberofHealthykidneys;
  res.json({
    numberofkidneys,
    numberofHealthykidneys,
    numberofunhealthykidneys,
  })
})

app.post("/",function(req, res ){       
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy :ishealthy
  });

  res.json({
    msg:"Done!"
  });
});

app.put("/",function(req,res){
for(let i =0;i<users[0].kidneys.length;i++){
  users[0].kidneys[i].Healthy=true;
}
res.json({});

})

app.delete("/",function(req,res){
  const unhealthy = req.body.unhealthy;
  users[0].kidneys.pop({
    healthy :unhealthy
  });

  res.json({
    msg:"Deletion Done!"
  });

})


app.listen(3000)