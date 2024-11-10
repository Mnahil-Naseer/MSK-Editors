import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './PlaceOrder.css'; // CSS file for styling

const PlaceOrder = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container1">
      <div className="form-section">
        <h2>Describe your <span>Project!</span></h2>
        <form>
          {/* Flex container for Service and Budget Range */}
          <label>Service</label>
          <div className="form-group flex-container">
            <input type="text" placeholder="Which Service you want? (e.g., Mobile Development, Website)" className="input-service" />
            <input type="text" placeholder="Budget Range" className="input-budget" />
          </div>
          <label>Project Description</label>
          <div className="form-group">
            <textarea placeholder="Describe your project here"></textarea>
          </div>
          <label>Payment Method</label>
          <div class="form-group">
            <div class="payment-options">
              <label><input type="checkbox" name="payment" /> Binance</label>
              <label><input type="checkbox" name="payment" /> Payoneer</label>
              <label><input type="checkbox" name="payment" /> Local Bank Transfer(pakistani)</label>
              <label><input type="checkbox" name="payment" /> EasyPaisa/JazzCash</label>
            </div>
          </div>


          <div className="form-group">
            <input type="text" placeholder='Any other Payment method you have? Mention all' className='payment2' />
            <label>Deadline</label>
            <div className="datepicker-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                className="datepicker-input"
              />
              <FaCalendarAlt className="calendar-icon" />
            </div>
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
