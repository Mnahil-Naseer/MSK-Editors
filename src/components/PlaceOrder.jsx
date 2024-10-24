import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PlaceOrder.css'; // CSS file for styling

const PlaceOrder = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container1">
      <div className="form-section">
        <h2>Describe your <span>Project!</span></h2>

        <form>
        <p>Service</p>
          {/* Flex container for Service and Budget Range */}
          <div className="form-group flex-container">
            <input type="text" placeholder="Which Service you want? (e.g., Mobile Development, Website)" className="input-service" />
            <input type="text" placeholder="Budget Range" className="input-budget" />
          </div>
          <label>Project Description</label>
          <div className="form-group">
            <textarea placeholder="Describe your project here"></textarea>
          </div>
          <label>Payment Method</label>
          <div className="form-group">
            <div className="payment-options">
              <label><input type="radio" name="payment" /> Bkash</label>
              <label><input type="radio" name="payment" /> Payoneer</label>
              <label><input type="radio" name="payment" /> Local Bank Transfer</label>
              <label><input type="radio" name="payment" /> EasyPaisa</label>
            </div>
          </div>

          <div className="form-group">
            <label>Deadline</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">Place Order</button>
          </div>

          <p className="notice">Notice: Before starting any project, 25% of a project will be taken as an advance.</p>
        </form>
      </div>

      <div className="description-section">
        <h2>What you want?</h2>
        <h3>Project Description</h3>
        <p>Contact us today and learn how we can help bring your business to the next level with a custom software solution!</p>

        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Work Email" />
          <input type="text" placeholder="Contact" />
          <button type="submit">Chat</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
