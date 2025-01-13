fetch('data.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const distance = document.getElementById('distance');
    Object.keys(data.tarifs.standard.distance).forEach(element => {
        const option = document.createElement('option');
        option.value=element
        option.textContent=element
        distance.appendChild(option)
    });

    const btn = document.getElementById('btn-calcule');
    btn.addEventListener('click',()=>{
        const poid =document.getElementById('poids').value;
        const longueur =document.getElementById('longueur').value;
        const largeur = document.getElementById('largeur').value;
        const hauteur=document.getElementById('hauteur').value;
        const section =document.querySelector('.section4')
        const distances = distance.value
        const baseS = data.tarifs.standard.base;
        const poidS = data.tarifs.standard.poids;
        const dimensionS= data.tarifs.standard.dimension;
        const distanceKey = data.tarifs.standard.distance[distances]

        const baseE = data.tarifs.express.base;
        const poidE = data.tarifs.express.poids;
        const dimensionE= data.tarifs.express.dimension;
        const distanceKeyE = data.tarifs.express.distance[distances]

        const resultatS = document.getElementById('result');
        const resultatE = document.getElementById('resultE')
        resultatS.textContent=baseS+(poid*poidS)+(dimensionS*(longueur+largeur+hauteur))+distanceKey
        resultatE.textContent=baseE+(poid*poidE)+(dimensionE*(longueur+largeur+hauteur))+distanceKeyE
        section.style.display='flex'
    })
})