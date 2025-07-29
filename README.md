# AEB Jamaat Portal

A full-stack web application built with React JS frontend and Express JS backend, featuring a modern landing page with a mosque architectural design.

## Features

- **Modern Landing Page**: Beautiful hero section with mosque architectural rendering
- **Responsive Design**: Mobile-friendly navigation and layout
- **Full-Stack Architecture**: React frontend with Express backend
- **Clean UI**: Professional design with smooth animations

## Tech Stack

### Frontend
- React JS 18
- CSS3 with modern styling
- Responsive design

### Backend
- Express JS
- Node.js
- CORS enabled
- RESTful API structure

## Project Structure

```
aeb-jamaat-portal/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── HeroSection.js
│   │   │   └── HeroSection.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Express backend
│   ├── index.js
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd aeb-jamaat-portal
   ```

2. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

   This will install dependencies for:
   - Root project (concurrently)
   - Backend server
   - Frontend client

### Running the Application

#### Development Mode (Recommended)

Run both frontend and backend simultaneously:
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

#### Running Separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### Production Build

To create a production build:
```bash
npm run build
```

## API Endpoints

- `GET /api/health` - Server health check

## Customization

### Adding Real Images

To replace the CSS-generated mosque with a real image:

1. Add your mosque image to `client/public/images/`
2. Update `HeroSection.js`:
   ```jsx
   <div className="hero-background">
     <img 
       src="/images/mosque.jpg" 
       alt="Mosque" 
       className="mosque-image"
     />
   </div>
   ```
3. Update `HeroSection.css`:
   ```css
   .mosque-image {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   ```

### Styling Modifications

- Navigation bar: `client/src/components/Navbar.css`
- Hero section: `client/src/components/HeroSection.css`
- Global styles: `client/src/index.css`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 