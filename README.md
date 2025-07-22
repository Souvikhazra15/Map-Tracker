# MAP-Tracker

MAP-Tracker is a simple real-time map tracking application built with Node.js, Express, EJS, Socket.IO, and Leaflet. It streams your geolocation and displays it on a map, along with the locations from other connected devices.

## Features

- **Real-Time Location Tracking:** Emit and display geolocation data in real-time using Socket.IO.
- **Interactive Map:** Uses Leaflet to display location markers on a map.
- **Multiple Device Support:** Track and display locations from multiple users simultaneously.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A modern browser with geolocation support.
- Both your PC and phone must be on the same network to test connectivity.

## Installation

1. **Clone the Repository:**

    ````bash
    git clone <repository-url>
    cd MAP-Tracker
    ````

2. **Install Dependencies:**

    ````bash
    npm install
    ````

## Usage

1. **Run the Server:**

    ````bash
    node app.js
    ````

2. **Access the Application:**

    - On your PC, open your browser and navigate to:
    
      ````none
      http://localhost:3000
      ````
      
    - To connect from your phone:
        - Ensure your phone and PC are on the same Wi-Fi network.
        - Find your PC's IP address (e.g., using `ipconfig` on Windows).
        - Open your phone's browser and navigate to:
    
          ````none
          http://<Your-PC-IP>:3000
          ````

## Project Structure

```
MAP-Tracker/
│   app.js               // Main server file
│   README.md            // This file
│
├───public/
│   ├───css/
│   │       style.css    // CSS styling for the application
│   │
│   └───js/
│           script.js  // Client-side JavaScript, handles map and socket events
│
└───views/
        index.ejs      // Main HTML template using EJS
```

## Troubleshooting

- **Map Not Displaying:**  
  Ensure the `map` div has defined dimensions in CSS (e.g., width and height set to 100%).

- **No Location Marker:**  
  Check that geolocation permissions are granted in your browser. Debug to ensure that the client's geolocation is being emitted to the server.

- **Socket Connection Issues:**  
  Verify that there are no errors in the browser console or server terminal regarding Socket.IO.

## License

This project is licensed under the MIT License.
