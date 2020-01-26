const request =  require('request')

const forecast =(latitude,longitude,callback)=>{
    url='https://api.darksky.net/forecast/a30faf8c167bad26a9e99ab85c35123a/'+latitude+','+longitude     //37.8267,-122.4233'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined);
        }else if(body.error){
            callback('Unable to find location',undefined);
        }else{
            var temp=(body.currently.temperature-32)/1.8;
            callback(undefined,'It is currently '+ temp.toFixed() +' degrees Celsius. There is a '+body.currently.precipProbability+'% chances of rain');
        }
    })
}

module.exports=forecast