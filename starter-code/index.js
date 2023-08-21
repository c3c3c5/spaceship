fetch("data.json")
.then(reponse => reponse.json())
.then(showdata)
.catch(alert)

function showdata(data){
    console.log(data);
}
