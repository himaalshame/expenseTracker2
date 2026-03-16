# Expense Tracker

A simple and easy-to-use application for tracking daily and monthly expenses.

**Built by:** [Ibrahim Ilshamy](https://github.com/himaalshame)  
**Email:** himaalshame22@gmail.com

---

## 📋 Features

✅ Add new expenses  
✅ Edit existing expenses  
✅ Delete expenses  
✅ **Dynamic Filtering** by category  
✅ **Search Functionality** by title  
✅ **Clear All Data** with a single click (with confirmation)  
✅ Display total amount (auto-updates with filters)  
✅ Categorize expenses (Food, Transport, Entertainment, Health, Shopping, Utilities, Other)  
✅ Set date for each expense  
✅ Data persistence with localStorage  
✅ Modern responsive design  

---

## 🚀 Installation & Running Steps

### Step 1️⃣: Clone the repository
```bash
git clone https://github.com/himaalshame/expenseTracker2.git
cd expenseTracker2
```

### Step 2️⃣: Install dependencies
```bash
npm install
```

### Step 3️⃣: Run in development mode
```bash
npm run dev
```
Open `http://localhost:5174` in your browser.

### Step 4️⃣: Build for production
```bash
npm run build
```
This creates a `dist` folder ready for deployment.

---

## 📁 Project Structure

```
expenseTracker2/
├── src/
│   ├── components/
│   │   ├── ExpenseList.jsx      (Display expenses)
│   │   ├── ExpenseForm.jsx      (Add expense form)
│   │   ├── ExpenseEdit.jsx      (Edit expense form)
│   │   ├── Header.jsx           (Navigation header)
│   │   └── Footer.jsx           (Footer)
│   ├── styles/
│   │   ├── Header.css
│   │   └── Footer.css
│   ├── App.jsx                  (Main app)
│   ├── App.css                  (App styles)
│   ├── index.css                (Global styles)
│   └── main.jsx                 (Entry point)
├── public/                      (Static files)
├── package.json                 (Dependencies)
└── vite.config.js              (Vite configuration)
```

---

## 🛠 Technologies Used

- **React 19** - UI library
- **Vite** - Fast build tool
- **React Router** - Navigation
- **Bootstrap 5** - Styling
- **Gradient UI** - Modern design with gradients
- **Responsive CSS** - Mobile first design

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Check code for errors |
| `npm run preview` | Preview production build |

---

## ✨ Future Improvements

- [x] Add filters by category and search by title
- [x] Add "Clear All" data feature
- [ ] Implement dynamic sorting for table headers
- [ ] Save data to cloud (Firebase/Backend)
- [ ] Add charts and visualization (Dashboard)
- [ ] Export data to CSV or PDF
- [ ] Dashboard with expense statistics
- [ ] Charts and graphs for visualization
- [ ] Multi-user support with authentication
- [ ] Expense reports and export to PDF/CSV
- [ ] Dark mode
- [ ] Notifications and alerts
- [ ] Budget limits per category

---

## 👨‍💻 How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact & Support

**Developer:** Ibrahim Ilshamy  
**Email:** himaalshame22@gmail.com  
**GitHub:** [himaalshame](https://github.com/himaalshame)

For issues or questions, please open an issue on GitHub or contact me via email.

---

Made with ❤️ Ibrahim Ilshamy
