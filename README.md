# Prince Makani Portfolio

A premium, modern, full-stack personal portfolio website for Prince Makani, an Information Security Analyst and Web Developer based in Vadodara, Gujarat.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0f/00d4ff?text=Prince+Makani+Portfolio)

## ✨ Features

### Frontend
- 🎨 **Premium Design**: Dark gradient theme with glassmorphism effects
- 🎬 **Rich Animations**: Framer Motion animations including:
  - Section reveal effects
  - Parallax hero section
  - Animated typing text
  - Hover transitions
  - Page transitions
  - Interactive project cards
- 📱 **Responsive**: Mobile-first design that looks great on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- ♿ **Accessible**: ARIA labels and keyboard navigation support
- 🔍 **SEO Optimized**: Meta tags, semantic HTML, and Open Graph support

### Sections
1. **Hero** - Animated typing title, CTA buttons, social links
2. **About** - Professional summary, stats, profile card
3. **Skills** - Animated progress bars with tech stack
4. **Projects** - Interactive cards with hover effects
5. **Experience** - Animated timeline for internships
6. **Contact** - Working form with validation

### Backend
- 🔒 **Secure**: Helmet.js security headers
- ⏱️ **Rate Limiting**: Prevents abuse (5 requests/minute)
- 📧 **Email**: Nodemailer integration for notifications
- 💾 **Database**: MongoDB for storing messages
- ✅ **Validation**: Server-side form validation

---

## 🛠️ Tech Stack

### Frontend
- React 18 (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- Helmet.js
- Express Rate Limit

---

## 📁 Project Structure

```
prince-makani-portfolio/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                  # Node.js backend
│   ├── models/
│   │   └── Message.js       # MongoDB model
│   ├── routes/
│   │   └── contact.js       # Contact API routes
│   ├── server.js            # Express server
│   ├── package.json
│   └── .env.example         # Environment variables
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB (local or Atlas) - optional for basic functionality

### Frontend Setup

```
bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```
bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env file with your configuration
# At minimum, you can leave it empty for demo mode

# Start the server
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Environment Variables

Create a `.env` file in the backend directory:

```
env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/portfolio
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
```

---

## 📦 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables if needed

### Backend (Render/Railway)

**Render:**
1. Connect GitHub repository
2. Set root directory to `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Add environment variables

**Railway:**
1. Connect GitHub repository
2. Add PostgreSQL/MySQL service (optional)
3. Deploy backend service
4. Add environment variables

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |
| GET | `/api/messages` | Get all messages (admin) |
| GET | `/api/messages/unread` | Get unread count |
| PATCH | `/api/messages/:id/read` | Mark as read |
| DELETE | `/api/messages/:id` | Delete message |

### Contact Form Request

```
json
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to work with you on..."
}
```

### Response

```
json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change colors:

```
javascript
colors: {
  accent: {
    cyan: '#00d4ff',
    purple: '#7c3aed',
    emerald: '#10b981',
  }
}
```

### Content
- Edit components in `frontend/src/components/` to update content
- Update personal information in Hero, About, Experience sections

### Projects
Modify the `projects` array in `frontend/src/components/Projects.jsx`:

```
javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Description",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://..."
  }
]
```

---

## 📄 License

MIT License - feel free to use this project for your own portfolio!

---

## 👤 Author

**Prince Makani**
- 📍 Vadodara, Gujarat, India
- 💼 Information Security Analyst & Web Developer
- 📧 prince.makani@email.com
- 🔗 [GitHub](https://github.com/Prince-1562)
- 🔗 [LinkedIn](https://www.linkedin.com/in/prince-makani-05a35624a)

---

## 🙏 Acknowledgments

- Design inspiration from various premium portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [FontShare](https://www.fontshare.com/)
