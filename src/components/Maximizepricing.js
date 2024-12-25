import React from 'react';
import './Maximizepricing.css';

function Maximizepricing() {
  return (
    <div className="Maximizepricing">
      <h1>Pricing</h1>
      <div className="Maximizepricing-options">
        <div className="Maximizepricing-card">
          <h2>Intro</h2>
          <p>$0 per month forever</p>
          <button>Join for free</button>
        </div>
        <div className="Maximizepricing-card">
          <h2>Basic</h2>
          <p>$0 per month forever</p>
          <button>Join for free</button>
        </div>
        <div className="Maximizepricing-card">
          <h2>Pro</h2>
          <p>$3.67 per user/month</p>
          <button>Continue with Pro</button>
        </div>
        <div className="Maximizepricing-card">
          <h2>Enterprise</h2>
          <p>$19.25 per user/month</p>
          <button>Contact Sales</button>
        </div>
      </div>
      <div className="comparison">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Intro</th>
              <th>Basic</th>
              <th>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dropbox Backup</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Maximizepricing;
