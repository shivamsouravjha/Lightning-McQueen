import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const RedirectSignup = () => {
  const did = useParams().did;
  const [data, setData] = useState({});
  const [resources, setResources] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [skill, setSkill] = useState("");

  useEffect(() => {
    setData({
      resources,
      duration,
      location,
      startDate,
      skill,
    });
  }, [resources, duration, location, startDate, skill]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://taxibackendf.herokuapp.com/api/customer/user/${did}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      ///const datainjson = await response.json();
      ///const did = datainjson.driver._id;
      // console.log(data);
      /// window.location = `/initial`;
    } catch (err) {
      console.log("Error");
    }

    //added later
    setResources("");
    setDuration("");
    setLocation("");
    setStartDate("");
    setSkill("");

    // this data  contains all values
  };

  return (
    <Wrapper>
      <h2>Quotation Form</h2>
      <div className="containerBox">
        <form onSubmit={submitHandler}>
          <div className="inputBox">
            <label htmlFor="quantity">Quantity of Resources : </label>
            <input
              type="text"
              placeholder="Number"
              name="quantity"
              value={resources}
              onChange={(e) => {
                setResources(e.target.value);
              }}
              title="Please enter number of people"
              required
             />
          </div>
          <div className="inputBox">
            <label htmlFor="duration">Project Duration : (Days) </label>
            <input
              type="text"
              placeholder="days"
              name="duration"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              title="Please enter duration  of work"
              required
           />
          </div>
          <div className="inputBox">
            <label htmlFor="location">Location : </label>
            <input
              type="text"
              placeholder="Full address"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              title="Please enter location"
              required
/>
          </div>
          <div className="inputBox">
            <label htmlFor="startDate">Start date (Notice Period) : </label>
            <input
              type="text"
              placeholder="Notice period"
              htmlFor="startDate"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              title="Please enter Date"
              required
 />
          </div>
          <div className="service">
            <label htmlFor="skill" className="label">
              Type of Service :
            </label>
            <select
              name="skill"
              id="skill"
              value={skill}
              onChange={(e) => {
                setSkill(e.target.value);
              }}
                 title="Please enter the skill"
              required >         
              
<option>Sector</option>
<option value="agriculture">Agriculture&nbsp;</option>
<option value="business-services">Business Services&nbsp;</option>
<option value="computer">Computer&nbsp;</option>
<option value="construction">Construction&nbsp;</option>
<option value="defence">Defence&nbsp;</option>
<option value="education">Education&nbsp;</option>
<option value="electricity,-gas-and-water">Electricity, Gas And Water&nbsp;</option>
<option value="electronics">Electronics&nbsp;</option>
<option value="finance">Finance&nbsp;</option>
<option value="fishing">Fishing&nbsp;</option>
<option value="food-manufacturing">Food Manufacturing&nbsp;</option>
<option value="furniture">Furniture&nbsp;</option>
<option value="health">Health&nbsp;</option>
<option value="insurance">Insurance&nbsp;</option>
<option value="leather-products">Leather Products&nbsp;</option>
<option value="machinery-and-equipments">Machinery And Equipments&nbsp;</option>
<option value="manufacturing">Manufacturing&nbsp;</option>
<option value="metals-and-chemicals">Metals And Chemicals&nbsp;</option>
<option value="mining-and-quarrying">Mining And Quarrying&nbsp;</option>
<option value="others">Others&nbsp;</option>
<option value="paper-and-printing">Paper And Printing&nbsp;</option>
<option value="personal-and-social-services">Personal And Social Services&nbsp;</option>
<option value="real-estate">Real Estate&nbsp;</option>
<option value="recreation">Recreation&nbsp;</option>
<option value="recycling">Recycling&nbsp;</option>
<option value="research-and-development">Research And Development&nbsp;</option>
<option value="sewage">Sewage&nbsp;</option>
<option value="telecommunication">Telecommunication&nbsp;</option>
<option value="textiles">Textiles&nbsp;</option>
<option value="tobacco">Tobacco&nbsp;</option>
<option value="trading">Trading&nbsp;</option>
<option value="transport-and-storage">Transport And Storage&nbsp;</option>
<option value="wholesale-trading">Wholesale Trading&nbsp;</option>
<option value="wood-products">Wood Products&nbsp;</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 68rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  .containerBox {
    width: 35%;
    height: 80%;
    box-shadow: 1px 1px 4px 1px;
    padding: 2rem;
    display: flex;
    flex-direct: row;

    align-items: center;
  }
  button {
    margin-top: 6rem;
    font-size: 20px;
    padding: 6px 1rem;
    border: none;
    outline: none;
    color: white;
    background-color: #22a6a8;
    border-radius: 5px;
    margin-left: 40%;
  }
  button:hover {
    background-color: #9fd5d6;
    color: #22a6a8;
  }
  .label {
    color: black;
    font-size: 17px;
  }
  form {
    width: 100%;
  }
  .inputBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
    width: 100%;
  }
  input {
    height: 3rem;
  }
  .service {
    display: flex;
    align-items: center;
  }
  .service > label {
    margin-top: 1rem;
    margin-left: -1rem;
  }
  .service > select {
    margin-left: 40%;
    width: 10rem;
    height: 3rem;
  }
  h2 {
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1350px) {
    .containerBox {
      width: 46%;
    }
  }
  @media only screen and (max-width: 1000px) {
    .containerBox {
      width: 60%;
    }
  }
  @media only screen and (max-width: 800px) {
    .containerBox {
      width: 75%;
    }
  }
  @media only screen and (max-width: 600px) {
    .containerBox {
      width: 95%;
    }
  }
  @media only screen and (max-width: 440px) {
    .containerBox {
      width: 99%;
    }
    form {
      width: 100%;
    }
    .inputBox {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 5rem;
      width: 70%;
    }

    .service > select {
      margin-left: 10%;
    }
  }
`;

export default RedirectSignup;
