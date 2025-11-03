# Languini: Full-Stack AI Language Tutor 🧠

!

## 🚀 Live Project & Code

| Component | Link |
| :--- | :--- |
| **Live Demo** | **[Test the Live Project!](YOUR_LIVE_DEMO_URL)** *(Primary CTA)* |
| **Source Code** | **[Explore the Backend API](LINK_TO_BACKEND_FOLDER)** |
| **Source Code** | **[Explore the Frontend Client](LINK_TO_FRONTEND_FOLDER)** |

---

## 🎯 Project Overview: Validation of Full-Stack Proficiency

**Languini** is a high-impact portfolio piece designed to validate my full-stack development, security, and architectural design skills. It is an end-to-end application integrating a complex **OpenAI/Gemini AI API** with a custom, secure backend.

This project demonstrates expertise in:

* Building and securing a **production-ready Node.js REST API**.
* Implementing **secure custom JWT/Cookie authentication**.
* Advanced **client-side state management** with Zustand.
* Complex **data modeling** and **Full CRUD operations** using MongoDB.
* Integrating **real-time communication** via WebSockets (or Socket.IO).

---

## 🛠️ Key Technical Achievements & Skills Demonstrated

The core technical accomplishments of Languini, framed from a technical hiring manager's perspective:

| Feature / User Benefit | Technical Accomplishment (The "Proof") |
| :--- | :--- |
| **AI-Powered Conversation Practice** | Deep, stateful integration with the **OpenAI/Gemini API** for dynamic responses, paired with advanced **server-side state management** to maintain conversation history and context. |
| **Real-Time Data Flow** | Implementation of **WebSockets** for low-latency, real-time feature delivery (e.g., chat updates) and secure, persistent user connectivity. |
| **Secure User Authentication** | Custom-built authentication flow using **Express.js**, **bcrypt** for secure password hashing, and **JWT/Cookies** for stateless session management and authorization. |
| **Persistent Learning Data** | **Complex database design** and **Full CRUD operations** in **MongoDB** to store and retrieve unique user data, generated lesson plans, and personalized dictionary items. |
| **Dynamic, Complex UI** | Demonstrates the ability to render a complex, component-based chat and dashboard interface using **React** and managing local state effectively with **Zustand**. |

---

## 💻 Tech Stack

| Type | Technologies Used |
| :--- | :--- |
| **Frontend** | React, Zustand (State Management), TailwindCSS, DaisyUI (Coffee Theme) |
| **Backend** | Node.js, Express.js (REST API) |
| **Database** | MongoDB |
| **Security** | Custom JWT/Cookies, bcrypt |
| **Real-Time** | WebSockets / Socket.IO |
| **AI Integration** | OpenAI or Gemini API |

---

## 🧠 The Technical Flow ("How It Works")

1.  **Secure Authentication:** User registers or logs in. A custom-built process leverages `bcrypt` for password hashing, and a secure **HTTP-only cookie containing a JWT** is used to establish an authenticated, persistent session.
2.  **RESTful API:** The React client communicates exclusively with the **Node.js/Express.js REST API** to manage all persistent user data. All routes are secured and checked for valid JWTs.
3.  **AI & State Management:** Conversation requests are sent to the backend, which securely routes the request to the **OpenAI/Gemini API**. The backend manages the context/history to ensure the AI remains in character and on-topic.
4.  **Learning Persistence:** New vocabulary and AI-designed lesson plans are persisted in **MongoDB** using normalized data models for efficient retrieval and review in the flashcard module.

---

## ❓ FAQ for Hiring Managers

**Q: What was the most technically challenging part of this project?**
**A:** Implementing robust **global state management** using **Zustand**. This involved maintaining the integrity of the dynamic conversation history, profile data, and UI state across various React components while minimizing unnecessary re-renders. It required a deep practical application of React Hooks, component lifecycle, and state normalization to ensure a performant, low-latency user experience.

---

## ⚙️ Quick Start (How to Run Locally)

*(You must fill in these steps for a complete README)*

1.  **Clone the repository:** `git clone [repository_url]`
2.  **Setup Environment:** Create a `.env` file in the root of the backend folder with the following variables:
    ```
    PORT=5000
    MONGODB_URI=...
    JWT_SECRET=...
    OPENAI_API_KEY=...
    ```
3.  **Install Dependencies:**
    ```bash
    # In the /backend directory
    npm install
    # In the /frontend directory
    npm install
    ```
4.  **Run:**
    ```bash
    # Start the backend server
    npm start 
    # Start the frontend client
    npm run dev
    ```

---

## 💡 Suggestions for What to Include

In addition to the content above, you should include these items to make the README complete for an engineering audience:

1.  **Architecture Diagram (Optional but highly effective):** A simple visual (even an ASCII diagram or a linked image) showing the flow: **React Client** <-> **Express/Node API** <-> **MongoDB & AI API**. This quickly conveys system complexity.
2.  **Complete Environment Variables List:** Include a complete, but blank, list of every required environment variable in the "Quick Start" section.
3.  **Deployment Method:** Briefly mention how the project is deployed (e.g., "Deployed on Vercel (Frontend) and Render (Backend API)"). This shows deployment skills.
4.  **Future Enhancements:** A short list of features you would implement next (e.g., "Implement unit and integration testing," "Move to Redis for session/caching"). This shows forward-thinking and an understanding of next steps.

---

## 📝 Advice on Documentation

It is generally **not** recommended to put detailed technical documentation within the main `README.md`.

* **Keep the README Focused:** The README should remain a *marketing document* for your project, focusing on the architecture and how to run it.
* **Separate API Documentation:** For technical recruiters/engineers, the best place for detailed documentation is a separate file or generated document.
    * **Recommendation:** Create an `API_DOCS.md` file (or use a tool like Swagger/OpenAPI) that lists your main REST API routes, HTTP methods, required parameters, and example response bodies. Link directly to this file from the main README.
* **In-Code Documentation:** The best place to document complex logic, state management decisions (e.g., why you chose Zustand over Redux), and security-focused functions is directly within the code using comments or JSDoc-style documentation. This allows engineers to understand *how* the code works as they explore the repository.