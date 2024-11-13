import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$0 / month</p>
          <p>Real-time price tracking</p>
          <p>Market capitalization insights</p>
          <p>Limited chart views</p>
          <button>Choose Basic</button>
        </div>

        <div className="pricing-card popular">
          <h3>Pro</h3>
          <p className="price">$15 / month</p>
          <p>All Basic features</p>
          <p>Unlimited chart views</p>
          <p>Price alerts</p>
          <p>Ad-free experience</p>
          <button>Choose Pro</button>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$30 / month</p>
          <p>All Pro features</p>
          <p>Exclusive analytics</p>
          <p>Customizable dashboards</p>
          <p>Priority support</p>
          <button>Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
