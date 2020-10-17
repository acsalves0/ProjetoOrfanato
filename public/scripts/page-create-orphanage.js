// create map
const map = L.map('mapid').setView([-20.1249637,-40.3033028], 15) //Latitude, logitude, zoom do mapa

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

//   create and add markers

map.on('click', (event) => {
     const lat = event.latlng.lat;
     const lng = event.latlng.lng;

     document.querySelector('[name=lat]').value = lat;
     document.querySelector('[name=lng]').value = lng;

    //  remove icon 
    marker && map.removeLayer(marker)

    //  add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

// add campo de fotos

function addPhotoField(){

    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adc
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    // verificar se o campo esta vazio, se sim, nao adc ao container de imagens
    const input =newFieldContainer.children[0]
        if(input.value == ""){
            return
        }
    // limpar campo antes de adc ao container de imagens
    input.value = ""
    // add o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
   const span = event.currentTarget

   const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length < 2){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
       return
   }
    // deletar o campo
     span.parentNode.remove();
}


// selecionar sim ou nao
function toggleSelect(event) {
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
        button.classList.remove('active')
    })

    // colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value

}

// function validate(event){
   
//     // validar se lat e lng estão preenchidos
//     const needsLatAndLng = true;
//     if(needsLatAndLng){
//     // se estiver vazio, fazer
//         event.preventDefault()
//         alert('Selecione um ponto no mapa')
//     }   
// }
