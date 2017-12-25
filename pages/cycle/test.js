var strava = require('strava-v3');

var all_acts = strava.athlete.listActivities({'access_token':'92f0085f02eed14d9a798a6e4f2196d04319d0e2', client_id : '18013', client_secret : '7b131f7bb5292def77a9e61f85eb1e0a93125d51'},function(err,payload,limits) {
    if(!err) {
        for (var i =0; i < payload.length; i++){
            if(payload[i].type == 'Ride'){
                console.log(payload[i]);
            }
        }
        //console.log(payload.filter ( function (el) {
        //return el.type == 'cycle;
        //}));
    }
    else {
        console.log(err);
    } 
});

//console.log(all_acts());
