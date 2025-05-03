document.querySelector(".button").addEventListener("click",()=>{
    const inputcity=document.querySelector(".inputcity").value;


     function weatherapp(data){
        const temp=document.querySelector(".temp");
        temp.innerHTML=data.current.temp_c;

        const city=document.querySelector(".city");
        city.innerHTML=data.location.name;
        

        const image=document.querySelector(".image");
        image.src=data.current.condition.icon;
        

     }
   const promises=fetch(`http://api.weatherapi.com/v1/current.json?key=92fa59de52c547d3a46161743250301&q=${inputcity}&aqi=no`)

    promises.then((response)=>{
       return response.json();
    }).then((data)=>{
        weatherapp(data);
    })


})