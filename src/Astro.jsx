import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './astro.css';

function Astro(props) {
  const [json, setJson] = useState({});
  // const leo = "scorpio";

  useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${props.sign}&day=today`;
    axios.post(URL).then((response) => setJson(response.data));
  }, [props.sign]);

  return (
    <div className="astrodiv">
      <table border="2px">
        <tr>{props.sign}</tr>
        <td>
          <strong>Current Date:</strong> {json.current_date} <br />
          <strong>Compatibility:</strong> {json.compatibility} <br />
          <strong>Lucky Number:</strong> {json.lucky_number} <br />
          <strong>Lucky Time:</strong> {json.lucky_time} <br />
          <strong>Color:</strong> {json.color} <br />
          <strong>Date Range:</strong> {json.date_range} <br />
          <strong> Mood: </strong>
          {json.mood} <br />
          <strong>Description: </strong>
          {json.description} <br />
        </td>
      </table>
    </div>
  );
}

export default Astro;
