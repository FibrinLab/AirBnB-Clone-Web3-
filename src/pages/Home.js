import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg2.png";
import logo from "../images/airbnb.png";
import { ConnectButton, Select, DatePicker, Input, Icon, Button } from "web3uikit";
import { useState } from "react";

const Home = () => {

  const [checkIn, setCheckIn] = useState(new Date());  
  const [checkOut, setCheckOut] = useState(new Date());  
  const [destination, setDestination] = useState("New York");
  const [guest, setGuest] = useState(2);

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
          <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places to stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: 'nyc',
                  label: 'New York'
                },
                {
                  id: 'abj',
                  label: 'Abuja'
                },
                {
                  id: 'lon',
                  label: 'London'
                }
              ]}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              onChange={(event) => setGuest(Number(event.target.value))}
              type="number"
            />
          </div>
          <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guest: guest
          }}>
            <div className="searchButton">
              <Icon
                fill="#000000"
                size={24}
                svg="search"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div>
        <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        />
      </div>
        
    </>
  );
};

export default Home;
