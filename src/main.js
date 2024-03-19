import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import App from "./App"
import router from "@/router/router"
import components from "@/components/UI"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"

const app = createApp(App)

const i18n = createI18n({
  locale: "ru",
  messages: {
    en: {
      message: {
        Cocktailz: "Cocktailz",
        SearchByDrink: "Search by drink...",
        Main: "Main",
        ID: "ID",
        Drink: "Drink",
        option: {
          Ordinary_Drink: "Ordinary Drink",
          Cocktail: "Cocktail",
          Shake: "Shake",
          "Other_/_Unknown": "Other / Unknown",
          Cocoa: "Cocoa",
          Shot: "Shot",
          "Coffee_/_Tea": "Coffee / Tea",
          Homemade_Liqueur: "Homemade Liqueur",
          "Punch_/_Party_Drink": "Punch / Party Drink",
          Beer: "Beer",
          Soft_Drink: "Soft Drink",
        },
        Listofcocktailzisempty: "List of cocktailz is empty",
        changeLanguage: "Eng",
      },
    },
    ru: {
      message: {
        Cocktailz: "Коктейли",
        SearchByDrink: "Искать по напитку...",
        Main: "Главная",
        ID: "Идентификатор",
        Drink: "Напиток",
        option: {
          Ordinary_Drink: "Обычный напиток",
          Cocktail: "Коктейль",
          Shake: "Молочный коктейль",
          "Other_/_Unknown": "Другое / Неизвестно",
          Cocoa: "Какао",
          Shot: "Шоты",
          "Coffee_/_Tea": "Кофе / Чай",
          Homemade_Liqueur: "Домашний ликер",
          "Punch_/_Party_Drink": "Пунш / Вечеринка напиток",
          Beer: "Пиво",
          Soft_Drink: "Безалкогольный напиток",
        },
        Listofcocktailzisempty: "Список коктейлей пуст",
        changeLanguage: "Рус",
      },
    },
  },
})
components.forEach((component) => {
  app.component(component.name, component)
})

app.use(router).use(i18n).mount("#app")
