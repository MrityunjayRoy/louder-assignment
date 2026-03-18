# AI Event Concierge

A minimal, modern Next.js platform that helps users plan corporate offsites using the Google Gemini AI.

## Technologies Used
- **Next.js (App Router)** - Fast UI and API routes
- **Tailwind CSS** - Clean, minimal UI design implementation
- **MongoDB** - Database for historical records persistence
- **Google Gemini API** (`@google/genai`) - To parse requirements into structured, robust recommendations

## Setup Instructions

### 1. Install Dependencies
Run the following command in the project directory to install all required npm modules:
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root of the project (`/home/mj/louder-assessment/.env.local`) using the structure below:
```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Run the Development Server
Start the application locally:
```bash
npm run dev
```

### 4. Access the App
Open your browser and navigate to [http://localhost:3000](http://localhost:3000). 
You will see an interface to type your natural language prompt. Example: *"A 10-person leadership retreat in the mountains for 3 days with a $4k budget"*. The application will return a parsed, structured event venue proposal.
