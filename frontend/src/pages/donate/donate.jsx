import React from "react";
import "./donate.css";
import donation from "../../assets/donation.png";
const Donate = () => {
    const handleSubmitForm=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="donate-page">
      <div className="section-top">
        <div className="donation-img">
          <img src={donation} alt="donation" />
        </div>
        <div className="donation-desc">
          Your small act of kindness can spark a big change!
        </div>
      </div>
      <form className="donation-form">
        <div className="donation-title">
          <h1>Donation form</h1>
        </div>
        {/*------------------info---------------*/}

        <div className="donor-desc">
          <div className="form-title">
            <h2>Donor name</h2>
          </div>
          <div className="input-fields">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>
        </div>
        <hr />
        {/*------------------info---------------*/}

        <div className="donation-type">
          <div className="form-title">
            <h2>Donation Type</h2>
          </div>
          <div className="select-fields">
            <select>
              <option value="clothes">Clothes</option>
              <option value="food">Food</option>
              <option value="Books">Books</option>
              <option value="other">Other</option>
            </select>
            <div className="select-quantity">
              <input type="number" placeholder="Enter quantity" />
            </div>
          </div>
        </div>
        <hr />
        {/* Donation -note  */}
        <div className="donation-note">
          <div className="form-title">
            <h2>Donation Note</h2>
          </div>
          <textarea rows={5}></textarea>
        </div>
        {/* Distributor */}
        <hr />
        <div className="distributor">
          <div className="form-title">
            <h2>Donation Type</h2>
            <p>Search the distributor by entering email</p>
          </div>
          <div className="distributor-info">
            <input type="email" placeholder="Enter the email" />
            <button>Find</button>
          </div>
         <div className="distributor-name">
         <p>Lekhansh Sachan</p>
         </div>
        </div>
        <hr />
        <div className="submit-button">
            <button onClick={handleSubmitForm} type="submit">Submit</button>
        </div>
       
      </form>
    </div>
  );
};

export default Donate;
