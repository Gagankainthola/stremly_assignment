# Notes Desktop Application

A secure note-taking desktop app built with **Electron (frontend)** and **Node.js + Express (backend)**.  
It supports authentication, CRUD operations on notes, local storage, and packaged `.exe` for Windows.

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. **Install dependencies (root + backend)**
   ```bash
   npm install
   cd backend
   npm install
   cd ..
   ```

3. **Run backend server**
   ```bash
   cd backend
   node server.js
   ```

4. **Run desktop app (Electron)**
   ```bash
   npm start
   ```

---

## Steps to Run `.exe`

1. Navigate to project root.  
2. Build the Electron executable:
   ```bash
   npm run build
   ```
3. Go to the `dist/` folder, you’ll find the generated `.exe`.  
4. Double-click the `.exe` to launch the Notes desktop app without needing Node.js or setup.

---

## Design Choices / Assumptions

- **Electron** chosen for cross-platform desktop packaging.  
- **Express + MongoDB** backend to handle authentication and note persistence.  
- Used **JWT authentication** for secure login/signup.  
- **CORS + cookies** configured for safe client-server communication.  
- App designed to **cache notes locally** in case of server downtime.

---

## Limitations & Future Improvements

- Currently tested only on **Windows** for `.exe`.  
- Limited offline support (only cached notes available).  
- No role-based access control, only basic auth.  
- UI is minimal; can be improved with better design system.  
- Future improvements:
  - Full offline-first mode (sync when online).  
  - Cloud storage integration (Google Drive/Dropbox).  
  - Real-time collaboration on notes.  
  - Cross-platform builds for Mac/Linux.  

---
