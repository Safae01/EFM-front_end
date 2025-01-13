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
    const menu= document.querySelector('.logo-menu')
    const nav = document.querySelector('.menu')
    menu.addEventListener('click',()=>{
        
        if(nav.style.display==='none'){
            nav.style.display='flex'
        }else{
            nav.style.display='none'
        }
    })
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
        

        if(poid === '' || longueur === '' || largeur === "" || hauteur === "" || distanceKey === "" || 
            isNaN(poid) || poid <= 0 || isNaN(longueur) || longueur <= 0 || 
            isNaN(largeur) || largeur <= 0 || isNaN(hauteur) || hauteur <= 0) {
            alert('veuillez remplir tous les champs avec des nombres supérieurs STRICTEMENT à 0');
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
            result.textContent= baseS+(poid*poidsS)+((longueur+largeur+hauteur)*dimensionS)+distanceValueS
            resultE.textContent= baseE+(poid*poidsE)+((longueur+largeur+hauteur)*dimensionE)+distanceValueE
        }
    })
})