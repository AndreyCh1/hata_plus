let scopeParagraf = document.getElementById("paragraf"),
    // tagH4 = document.getElementsByTagName("h4"),
    // heroTitle = document.getElementsByClassName("hero_title"),
    supportButton = document.querySelector(".support_button"),
    // offers = document.querySelectorAll(".offers"),
    newParagraf = "Напевно кожен з нас не раз думав про те, щоб купити будинок котедж і насолоджуватися життям в гармонії з природою. Дійсно, для багатьох жителів мегаполісу заміська нерухомість під містом стала справжньою віддушиною і порятунком від сумній життя в багатоповерхівках спальних районів.",
    // newH4 = "Компанія “Хата Плюс”",
    // newHeroTitle = "Пропозиція місяця",
    newSupportButton = "By button",
    newOffers = "",
    tagH4 = "",
    heroTitle = ""

let array = document.getElementsByTagName("h1"),
    array1 = document.getElementsByClassName("hero_title"),
    offers = document.querySelectorAll(".offers figure"),
    arrForEach = [...array],
    arrForEach1 = [...array1]
    // arrForEach2 = [...offers]

console.log(arrForEach)
// console.log(arrForEach1)

arrForEach.forEach(function(element){
    // console.log(element)
    tagH4 = element
    // console.log(element)
    console.log(element.innerText)
})

arrForEach1.forEach(function(element){
    heroTitle = element
})

// arrForEach2.forEach(function(element){
//     offers = element
// })

let newH4 = "Заголовок h1",
    newHeroTitle = "Hello world"

console.log(scopeParagraf.innerText)
console.log(heroTitle.innerText)
console.log(supportButton.innerText)
// console.log(offers.innerText)
console.log(offers)
scopeParagraf.innerHTML = `<i style="color: #dfdf2f">${newParagraf}</i>`
tagH4.innerHTML = `<h4>${newH4}</h4>`
heroTitle.innerHTML = `<i>${newHeroTitle}</i>`
supportButton.innerHTML = `<div class="support_button column"><a href="tel:+380971002525" style="color: #27b827">${newSupportButton}</a></div>`
// offers.innerHTML = `<div">${newOffers}</div>`