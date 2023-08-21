fetch("data.json")
.then(response => response.json())
.then(loaddata)
.catch(alert);

let dataarr;

function loaddata(data) {
    dataarr = data;
    console.log(dataarr);
}

function showoneCrewMember(index){
    document.querySelectorAll(".crewnavmember").forEach((c)=>{
        c.classList.remove("whitebackground");
    })
    document.querySelectorAll(".crewnavmember")[index].classList.add("whitebackground");
}

function showonedestination(index){
    document.querySelectorAll(".destinationmenu").forEach((d)=>{
        d.parentElement.classList.remove("bottomborder");
    })
    document.querySelectorAll(".destinationmenu")[index].parentElement.classList.add("bottomborder");
}

function showonerocket(index){
    document.querySelectorAll(".navmenuvehicleli").forEach((li)=>{
        li.classList.remove("clicked");
    })
    document.querySelectorAll(".navmenuvehicleli")[index].classList.add("clicked");
}

document.querySelectorAll(".destinationmenu").forEach((d,i) => {
    d.addEventListener("click", ()=>{
        showonedestination(i);
        let info = dataarr.destinations[i];
        document.getElementById("currentplanetname").textContent = info.name.toUpperCase();
        document.getElementById("planetdescription").textContent = info.description;
        document.getElementById("planetimage").setAttribute("src",info.images.png);
        document.getElementById("traveltime").textContent = info.travel.toUpperCase();
        document.getElementById("avgdistance").textContent = info.distance.toUpperCase();
    })
})

document.querySelectorAll(".crewnavmember").forEach((c,i)=>{
    c.addEventListener("click", ()=>{
        showoneCrewMember(i);
        let info = dataarr.crew[i];
        document.getElementById("profession").textContent = info.role.toUpperCase();
        document.getElementById("name").textContent = info.name.toUpperCase();
        document.getElementById("description").textContent = info.bio;
        document.getElementById("crewimg").setAttribute("src",info.images.png);
    })
})

document.querySelectorAll(".navmenuvehicleli").forEach((l,i)=>{
    l.addEventListener("click", ()=>{
        showonerocket(i);
        let info = dataarr.technology[i];
        document.getElementById("nameofvehicle").textContent = info.name.toUpperCase();
        document.getElementById("vehicledescription").textContent = info.description;
        document.getElementById("imageofvehicle").setAttribute("src", info.images.portrait)
    })
})