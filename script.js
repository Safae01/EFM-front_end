fetch('data.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const distance = document.getElementById('distance');
    Object.keys(data).forEach(element => {
        const option = document.createElement('option')
        option.value=element;
        option.textContent=element;
        distance.appendChild(option)
    });
})