# Starter Express HBS

Starter project **Express.js + HBS (Handlebars)** dengan arsitektur rapi dan siap dikembangkan untuk aplikasi **full-stack klasik (SSR)**.

Project ini dibuat sebagai **starter template** untuk pembelajaran backend dan server-side rendering menggunakan:

- Express.js (ESM)
- HBS (Handlebars)
- PostgreSQL
- SQL manual (tanpa ORM / Prisma)
- Struktur folder best practice

---

## ✨ Fitur

- Express.js dengan ES Module (`import/export`)
- Template engine HBS (SSR)
- Layout & partial system
- PostgreSQL menggunakan `pg`
- Database schema berbasis file `.sql`
- Script executor schema (tanpa `psql`)
- Environment config dengan `.env`
- Arsitektur controller → service → database

---

## 📁 Struktur Project

```text
project-root/
├─ src/
│   ├─ app.js              # setup express (tanpa listen)
│   ├─ server.js           # entry point server
│   ├─ routes/             # routing (web)
│   ├─ controllers/        # controller layer
│   ├─ services/           # business logic + SQL
│   ├─ database/           # database connection (pg pool)
│   ├─ configs/            # environment config
│   └─ views/              # HBS layouts, pages, partials
│
├─ database/
│   ├─ schema/             # file SQL schema
│   └─ run-schema.js       # executor schema
│
├─ .vscode/
│   ├─ settings.json/      # Konfig vscode
|
├─ .env.example
├─ package.json
└─ README.md
```

## 🚀 Cara Menggunakan

### 1️⃣ Clone Repository

```bash
git clone https://github.com/fakhri-muzakki/starter-express-hbs.git
cd starter-express-hbs
```

---

### 2️⃣ Install Dependency

```bash
npm install
```

---

### 3️⃣ Setup Environment Variable

Buat file **.env** di root project dan paste ini:

```bash
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres

# sesuaikan password, kebetulan saya ada passwordnya
DB_PASSWORD=yourpassword
DB_NAME=express_hbs_db
```

📌 Pastikan:

- PostgreSQL sudah terinstall
- Database sudah dibuat
- Service database dalam keadaan aktif

---

### 4️⃣ Setup Database Schema

Project ini tidak menggunakan ORM (Prisma / Sequelize).
Jadi tabelnya **buat sendiri** menggunakan aplikasi **pg admin** atau semacamnya.

Tapi Bisa juga pake fitur project ini caranya :

1. Tambahkan atau edit file .sql di folder:

```cmd
database/schema/
```

2. Jalankan perintah ini:

```bash
npm run db:schema
```

Script ini akan:

- Membaca semua file .sql
- Menjalankannya ke database
- Dieksekusi secara berurutan

---

### 5️⃣ Jalankan Project

```bash
npm run dev
```

Aplikasi akan berjalan di:

```arduino
http://localhost:3000
```

---

## 🧠 Catatan Penting

- Project ini mungkin hanya akan di pakai di stage 1, karena project ini FE dan BE -nya gabung
- Project ini tidak menggunakan ORM
- Semua query database ditulis manual di service layer
- Semua query database ditulis manual di service layer
- Folder src/database/ digunakan untuk koneksi database runtime
- Default layout HBS menggunakan views/layouts/main.hbs

---

## 📌 Tech Stack

- Node.js (ES Module)
- Express.js
- Handlebars (HBS)
- PostgreSQL
- pg (node-postgres)
- Bootstrap
