
# Feedify

Feedify is a powerful and flexible **feedback and suggestion management tool** designed to help you collect, manage, and analyze user feedback effortlessly. Built with modern web technologies, Feedify enables seamless integration and simple yet effective feedback handling for your team.

> 🚀 **Currently in Beta**: Feedify is in the early stages of development. Some features might be incomplete, but we are actively working on improving and adding more functionalities. **Note**: There are currently some issues related to **Turbopack** in **Next.js 15**, which might cause unexpected behavior during development. These problems are being addressed as soon as possible.

---

## 🌟 Features

- 📝 **Submit Feedback**: Users can easily submit feedback and suggestions.
- 📊 **View Feedback**: Admins can view and manage all feedbacks submitted by users.
- 🔄 **Feedback Status**: Mark feedback as **important** or **pending**.
- 🔐 **Admin Dashboard**: An easy-to-use dashboard for managing feedback and user input.
- 💾 **Real-time Database Integration**: Data is stored securely in MongoDB.
- ⚡ **Fast & Responsive**: Built with **Next.js** and **Tailwind CSS**, ensuring fast load times and a smooth experience.
- 🚧 **In Progress**: The project is currently in development, with several features yet to be implemented.

---

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Vercel](https://vercel.com/) (for deployment)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/moamlmushtaq/feedify.git
cd feedify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env.local`

You need to set up a `.env.local` file with the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_PASSWORD=your_admin-password
```

### 4. Run the project

```bash
npm run dev
---

## 📦 Folder Structure

```bash
app/
  admin/           → Admin dashboard page
  feedback/        → Submit feedback page
lib/
  mongodb.ts       → MongoDB connection setup
  nextauth.ts      → NextAuth.js setup
models/
  Feedback.ts      → Mongoose model for feedback
  User.ts          → Mongoose model for users
```

---

## 🛣️ Roadmap

- [x] Submit feedback functionality
- [x] Admin dashboard
- [x] Feedback status management (important, pending)
- [ ] Advanced filtering options for feedback
- [ ] Improve UI/UX

---

## 🧠 Why Feedify?

**Feedify** is built with the aim of making feedback collection simple, accessible, and efficient. It enables companies to collect valuable insights from users and manage those suggestions in a streamlined way. Whether you're a small team or a large organization, **Feedify** helps you improve your product by prioritizing user feedback.

---

## 🤝 Contributing

Contributions, bug fixes, and feature requests are always welcome!  
Feel free to fork the repo, open an issue, or submit a pull request.

---

## 🧑‍💻 Author

Made with ❤️ by [Moaml Mushtak](https://github.com/moamlmushtaq)  
Part of the [Mushtak Group](https://github.com/moamlmushtaq)

---

## 🪪 License

MIT — free to use, modify, and contribute.
