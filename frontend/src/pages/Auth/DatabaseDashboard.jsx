import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DatabaseDashboard() {
  const [dbData, setDbData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null);

  // Robust data fetching function with exception handling
  const fetchDatabasePipeline = async () => {
    setLoading(true);
    setErrorStatus(null);
    
    try {
      const response = await axios.get('http://localhost:8080/api/data', {
        timeout: 5000 // Real IT practice: never let a request hang infinitely
      });

      // Defensive Check: Ensure payload is an array structure before assigning
      if (response.data && Array.isArray(response.data)) {
        setDbData(response.data);
      } else {
        throw new Error("Malformatted API Payload: Expected an array structure.");
      }
    } catch (error) {
      console.error("Exception caught in Middleware Pipeline:", error);
      
      // Categorize exception root causes for precise user troubleshooting
      if (!error.response) {
        setErrorStatus("Network Timeout / Spring Boot Middleware is Offline (Port 8080).");
      } else if (error.response.status === 404) {
        setErrorStatus("Endpoint Not Found (404). Check your controller routing mapping.");
      } else if (error.response.status === 500) {
        setErrorStatus("Internal Server Error (500). Your MySQL instance may be down or password invalid.");
      } else {
        setErrorStatus(`API Execution Exception: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatabasePipeline();
  }, []);

  return (
    <div style={{ padding: '30px', color: '#fff', maxWidth: '600px', margin: '0 auto' }}>
      <h2>💾 Database Data Pipeline</h2>
      <p style={{ color: '#aaa' }}>Verifying connectivity from Frontend ➔ Middleware ➔ MySQL (D: Drive)</p>

      {/* Test Case 1: Active Async Fetching State */}
      {loading && (
        <div style={{ color: '#646cff', fontWeight: 'bold', padding: '15px' }}>
          🔄 Polling Spring Boot middleware...
        </div>
      )}

      {/* Test Case 2: Exception Fallback Recovery Screen */}
      {!loading && errorStatus && (
        <div style={{ border: '1px solid #ff4a4a', padding: '15px', borderRadius: '6px', background: '#2a1a1a', marginBottom: '15px' }}>
          <p style={{ color: '#ff4a4a', margin: '0 0 10px 0' }}><strong>Pipeline Failure:</strong> {errorStatus}</p>
          <button 
            onClick={fetchDatabasePipeline}
            style={{ background: '#ff4a4a', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Test Case 3: Empty Database Array Payload */}
      {!loading && !errorStatus && dbData.length === 0 && (
        <div style={{ background: '#222', border: '1px dashed #444', padding: '20px', borderRadius: '6px', textAlign: 'center' }}>
          <p style={{ color: '#888' }}>✅ Connection Healthy!</p>
          <p style={{ margin: 0 }}>The `api_data` table inside <strong>api_app_db</strong> is empty. Ready for data ingestion.</p>
        </div>
      )}

      {/* Test Case 4: Nominal Flow (Data Safely Rendered) */}
      {!loading && !errorStatus && dbData.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dbData.map((item) => (
            <li key={item.id || Math.random()} style={{ background: '#2a2a2a', padding: '12px', borderRadius: '6px', marginBottom: '10px', borderLeft: '4px solid #646cff' }}>
              <strong style={{ color: '#646cff' }}>{item.title || "No Title"}</strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#ccc' }}>{item.description || "No Description Provided"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DatabaseDashboard;