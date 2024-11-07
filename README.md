**EN**

# Next Pizzeria

The **Next Pizzeria** project is a full-fledged online grocery store, which is a copy of DodoPizza, but with improvements. This project was invented by **Archakov**, here is only my implementation. Developed using advanced technologies, it includes all the functions for a full-fledged online store, such as product filtering, user registration, payment and much more.

Deployed on [Vercel | Next Pizzeria](https://next-pizzeria.vercel.app/).

## 📋 Project Description

This project is a full-fledged online store with functionality that covers all key stages of user interaction, from registration to checkout.

### Project functionality:

1. **Product filtering with server rendering** and storing parameters in the URI to save the filter state.
2. **Product output** and the ability to add them to the cart.
3. **Authorization and registration** using login and password, as well as via GitHub and Google.
4. **Account confirmation** by sending an email.
5. **Editing a user profile**.
6. **Purchasing goods** using the Yookassa payment system. (for test payments, you can use the card **`5555 5555 5555 4444`** with any other data)
7. **Displaying goods** in a modal window or on a separate page using Parallel Routes.
8. **Sending emails** upon registration, creating an order, and successful payment.
9. **Deployment to Vercel** to store the database and deploy the application.
10. An example of how **client and server components** work using real examples (not from the documentation).

## ⚙️ Technologies

The project uses modern tools and libraries to develop a high-quality web application.

1. **Next.js** (Parallel Routes, Group Routes, Server Actions, API)
2. **TypeScript** for strong typing and increased code reliability.
3. **TailwindCSS** + **ShadCN** for component styling.
4. **Prisma** + **PostgreSQL** for working with the database.
5. **NextAuth** for user authentication via various providers (GitHub, Google, login/password).
6. **React Hook Form** + **Zod** for working with forms and validation.
7. **Zustand** for application state.
8. **react-use** for convenient hooks.
9. **nextjs-toploader** for displaying a loading indicator.
10. **react-hot-toast** for real-time notifications.
11. **react-insta-stories** for creating Instagram stories in the app.
12. **lucide-react** for icons.
13. **Resend** for sending emails to users.

## 🚀 Installation and launch

To develop and launch the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/estecore/next-pizzeria.git
cd next-pizzeria
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file (there is an example in the repository) and add the necessary environment variables to it, such as database data and API keys for external services (e.g. Yookassa, Resend, etc.).

### 4. Run the project

```bash
npm run dev
```

The project will now be available at [http://localhost:3000](http://localhost:3000).

**Thanks for checking out the project!**

_The project description was created using ChatGPT._

---

**RU**

# Next Pizzeria

Проект **Next Pizzeria** представляет собой полноценный интернет-магазин продуктов, который является копией ДодоПицца, но с улучшениями. Этот проект придумал **Archakov**, здесь же лишь моя реализация. Разработан с использованием передовых технологий, он включает все функции для полноценного онлайн-магазина, такие как фильтрация товаров, регистрация пользователей, оплата и многое другое.

Деплоен на [Vercel | Next Pizzeria](https://next-pizzeria.vercel.app/).

## 📋 Описание проекта

Этот проект представляет собой полноценный интернет-магазин с функционалом, который охватывает все ключевые этапы взаимодействия с пользователем, от регистрации до оформления покупки.

### Функциональность проекта:

1. **Фильтрация товаров с серверным рендерингом** и хранением параметров в URI для сохранения состояния фильтрации.
2. **Вывод товаров** и возможность их добавления в корзину.
3. **Авторизация и регистрация** с использованием логин-пароля, а также через GitHub и Google.
4. **Подтверждение аккаунта** через отправку письма на электронную почту.
5. **Редактирование профиля** пользователя.
6. **Покупка товаров** с помощью системы платежей Yookassa. (для тестовый платежей можете использовать карту **`5555 5555 5555 4444`** с любыми остальными данными)
7. **Вывод товара** в модальном окне или на отдельной странице с использованием Parallel Routes.
8. **Отправка писем на почту** при регистрации, создании заказа и успешной оплате.
9. **Деплой на Vercel** для хранения базы данных и развертывания приложения.
10. Пример того, как работают **клиентские и серверные компоненты** на реальных примерах (не из документации).

## ⚙️ Технологии

Проект использует современные инструменты и библиотеки для разработки высококачественного веб-приложения.

1. **Next.js** (Parallel Routes, Group Routes, Server Actions, API)
2. **TypeScript** для строгой типизации и повышения надежности кода.
3. **TailwindCSS** + **ShadCN** для стилизации компонентов.
4. **Prisma** + **PostgreSQL** для работы с базой данных.
5. **NextAuth** для аутентификации пользователей через различные провайдеры (GitHub, Google, логин/пароль).
6. **React Hook Form** + **Zod** для работы с формами и валидацией.
7. **Zustand** для состояния приложения.
8. **react-use** для удобных хуков.
9. **nextjs-toploader** для отображения индикатора загрузки.
10. **react-hot-toast** для уведомлений в реальном времени.
11. **react-insta-stories** для создания инстаграммных историй в приложении.
12. **lucide-react** для иконок.
13. **Resend** для отправки писем пользователям.

## 🚀 Установка и запуск

Для локальной разработки и запуска проекта выполните следующие шаги:

### 1. Клонировать репозиторий

```bash
git clone https://github.com/estecore/next-pizzeria.git
cd next-pizzeria
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Настроить переменные окружения

Создайте файл `.env` (пример есть в репозитории) и добавьте в него необходимые переменные окружения, такие как данные для базы данных и API ключи для внешних сервисов (например, Yookassa, Resend и других).

### 4. Запустить проект

```bash
npm run dev
```

Теперь проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).

**Спасибо, что ознакомились с проектом!**

_Описание проекта было составлено с использованием ChatGPT._
