let names = ['ali', 'ahmad', 'zaher', 'abed']
let ages = [22,45,32,55]

let container = document.createElement('div')
document.body.appendChild(container)
container.style.setProperty('text-align', 'center')

function createCard(name='Name', ages='Age') {
  let card = document.createElement('div')
  let title = document.createElement('h3')
  let age = document.createElement('p')
  let img = document.createElement('img')

  let titleContent = document.createTextNode(name)
  let ageContent = document.createTextNode(ages)

  title.appendChild(titleContent)
  age.appendChild(ageContent)
  img.src = 'https://img.pixers.pics/pho_wat(s3:700/FO/57/40/61/63/700_FO57406163_92421ddd819d9374b243b56f29953b57.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/prydnads-kuddar-brand-alfabetet-bokstaven-t.jpg.jpg'
  card.appendChild(title)
  card.appendChild(age)
  card.appendChild(img)
  container.appendChild(card)

  card.style.width = '200px'
  card.style.padding = '10px'
  card.style.background = 'black'
  card.style.color = 'white'
  card.style.margin = '3px'
  card.style.display = 'inline-block'

  img.style.width = '100%'

}

for(let i = 0; i < 4; i++)
{
  createCard(names[i], ages[i])
}
