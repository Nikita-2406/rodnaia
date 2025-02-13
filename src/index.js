import './css/style.css'
const imagePath = require('./img/2.jpg');
console.log(imagePath)


const text = document.querySelector('.text')
let img = document.querySelector("img")

const textList = ["Я очень сильно люблю тебя", "Ты самая большая моя радость в жизни", "Я хочу чтобы жизненный путь мы прошли вместе", "Ты моя маленькая принцесса", "Я очень сильно тобой дорожу", "Люблю тебя сильнее всех на свете", "Ты у меня самая"]
const comlimentsList = ["Любимая", "Лучшая", "Красивая", "Желанная", "Нежная", "Милая", "Драгоценная", "Идеальаня", "Незаменимая", "Родная", "Близкая", "Страстная", "Заботливая", "Очаровательная", "Внимательная", "ЛЮБЛЮ ТЕБЯ ОЧЕНЬ СИЛЬНО МАЛЕНЬКАЯ МОЯ"]
const paint = [require('./img/2.jpg'), require('./img/3.jpg'), require('./img/4.jpg'), require('./img/5.jpg'), require('./img/6.jpg'), require('./img/8.jpg'), require('./img/7.jpg'),]
text.addEventListener("click", () => {
  console.log("click")
  let i = 0
  const i1 = setInterval(() => {
    if (textList.length > i) {
      text.innerHTML = textList[i]
      img.src = paint[i]
      i++
    } else {

      clearInterval(i1)
      const i2 = setInterval(() => {
        if (comlimentsList.length > i) {
          text.innerHTML = comlimentsList[i]
          i++
        } else {
          clearInterval(i2)
        }
      }, 500)

    }
  }, 2000)

  
})