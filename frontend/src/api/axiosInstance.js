import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    // This calls your Spring Boot Middleware running on port 8080
    axios.get('http://localhost:8080/api/data')
      .then(response => {
        console.log("Successfully retrieved data from MySQL via Middleware:", response.data);
        setDbData(response.data);
      })
      .catch(error => {
        console.error("Error connecting to the middleware pipeline:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Frontend Dashboard</h1>
      <h3>Data from MySQL Database via Spring Boot:</h3>
      
      {dbData.length === 0 ? (
        <p>The pipeline is working! Database table is currently empty. Ready for data injection.</p>
      ) : (
        <ul>
          {dbData.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;