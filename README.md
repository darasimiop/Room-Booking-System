# 🏨 Room Booking System for Student Dormitories

A simple web-based application that allows students to register, view available rooms, book a room, and allows admins to view all bookings.

---

## 🚀 Features Completed

### ✅ Sprint 1
- Student Registration with validation and data storage (`student_registration.html`)
- View Available Rooms with filtering (`room_availability.html`)

### ✅ Sprint 2
- Room Booking Form with POST to database (`room_booking.html`)
- Admin View for managing and viewing all bookings (`admin_view.html`)
- Booking data saved and persisted via `db.json` using JSON Server

---

## 📂 Project Structure

Room-Booking-System/ │── index.html # Main landing page │── student_registration.html │── student_registration.js │── room_availability.html │── room_availability.js │── room_booking.html │── room_booking.js │── admin_view.html │── admin_view.js │── db.json # JSON Server data └── styles.css


---

## ⚙️ How to Run

1. Make sure you have Node.js and `json-server` installed:
   ```bash
   npm install -g json-server

2. Start the server: 
json-server --watch db.json --port 3000

3. Open the files (.html) using Live Server in VS Code.

📸 Sprint 2 Demo Video

Watch the full feature demo here:
👉 [Paste your YouTube link here when ready]
📚 GitHub Repository

This project is maintained at:
🔗 https://github.com/darasimiop/Room-Booking-System
📌 Future Sprint Goals

    Booking approval workflow (admin)

    Login authentication by role (admin/student)

    Cancel or update bookings





