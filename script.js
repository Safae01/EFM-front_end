fetch('data.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const distanceSelect = document.getElementById('distance');
    Object.keys(data.tarifs.standard.distance).forEach((element)=>{
            const option = document.createElement('option')
            option.value=element;
            option.textContent=element;
            distanceSelect.appendChild(option)
    })
    
    
    const btn = document.querySelector('.btn-calcule');

    btn.addEventListener("click",()=>{
        const section =document.querySelector('.section4')

        const result = document.getElementById('result')
        const resultE= document.getElementById('resultE')
        const poid = document.getElementById('poids').value
        const longueur = document.getElementById('longueur').value
        const largeur = document.getElementById('largeur').value
        const hauteur = document.getElementById('hauteur').value
        const distanceKey = distanceSelect.value
        const distanceValueS = data.tarifs.standard.distance[distanceKey]
        const distanceValueE= data.tarifs.express.distance[distanceKey]
        

        const baseS = data.tarifs.standard.base;
        const poidsS = data.tarifs.standard.poids;
        const dimensionS =data.tarifs.standard.dimension
        const baseE = data.tarifs.express.base;
        const poidsE = data.tarifs.express.poids;
        const dimensionE =data.tarifs.express.dimension
        

        if(poid === '' || longueur === '' || largeur === "" || hauteur === "" || distanceKey === ""){
            alert('veuillez remplir tous les champs')
        }else{
            // setTimeout(() => {
            //     section.scrollIntoView({
            //         behavior: "smooth"
            //     })
            // }, 100)
            section.scrollIntoView({
                behavior:"smooth"
            })
            section.style.display='flex'
            result.textContent= baseS+(poid*poidsS)+(longueur*dimensionS)+distanceValueS
            resultE.textContent= baseE+(poid*poidsE)+(longueur*dimensionE)+distanceValueE
        }
    })
})