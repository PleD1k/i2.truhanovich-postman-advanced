const myPC = {
   os: "Win10",
   version: "10",
   language: "Eng",
   Location: "Geo" ,
}

for (const key in myPC) {
    if (myPC.hasOwnProperty(key)) {
        console.log(myPC[key]);
     
    }
}