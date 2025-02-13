export class Popover {
  constructor (parentElem) {
    this.parentElem = parentElem
    this.bindtoDOM = this.bindtoDOM.bind(this)
    this.text = this.parentElem.querySelector('.text')
    this.img = this.parentElem.querySelector('img')
  }

  bindtoDOM () {
    const textList = ["Я очень сильно люблю тебя", "Ты самая большая моя радость в жизни", "Я хочу чтобы жизненный путь мы прошли вместе", "Ты моя маленькая принцесса", "Я очень сильно тобой дорожу", "Люблю тебя сильнее всех на свете", "Ты у меня самая"]
    const comlimentsList = ["Любимая", "Лучшая", "Красивая", "Желанная", "Нежная", "Милая", "Драгоценная", "Идеальаня", "Незаменимая", "Родная", "Близкая", "Страстная", "Заботливая", "ОЧаровательная", "Внимательная", "ЛЮБЛЮ ТЕБЯ ОЧЕНЬ СИЛЬНО МАЛЕНЬКАЯ МОЯ"]

    this.text.addEventListener("click", () => {
      console.log(text.innerHTML)
      this.text.innerHTML = "123123"
    })
  }

}