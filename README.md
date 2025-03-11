# KML File Viewer & Summary Tool

This is a simple **React-based web application** built with **Vite** that allows users to:
- Upload a **KML (Keyhole Markup Language) file**.
- Parse and display its contents on a **Leaflet map**.
- View a **summary** of different KML elements (Points, LineStrings, Polygons).
- See **detailed information** about element types and their total lengths.

## Features
- **Upload & Read KML File**
- **Visualize KML elements on a map (Leaflet.js)**
- **Summary Table** (Counts different geometry types)
- **Detailed Table** (Shows total lengths for line-based elements)
- **Styled with Tailwind CSS**

## Tech Stack
- **Frontend:** React, Vite, Leaflet.js, Tailwind CSS
- **Libraries:** `togeojson` (for KML to GeoJSON conversion)

## Installation & Setup

### Clone the Repository
git clone https://github.com/Ashi-Jain07/Ookul-Assignment.git
cd vite-project

### Install Dependencies
npm install

### Start the Development Server
npm run dev
Then, open http://localhost:5173/ in your browser.

## Usage
Upload a KML file using the upload button.
The map will automatically render KML elements.
Click "Show Summary" to see element counts.
Click "Show Details" to see lengths of line elements.

## Map Integration
The application uses Leaflet.js with OpenStreetMap tiles to display geographical data.
