import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "react-bootstrap/Card";

export default function BarChart() {
  const [barData, setBarData] = useState([]);

  const AddNewData = (event) => {
    const rand = Math.floor(Math.random() * 70) + 10;
    setBarData([...barData, rand]);
  };
  const stop = (event) => {
    event.stopPropagation();
  };

  return (
    <Card style={{ height: "300px", overflow: "auto", marginBottom: "20px" }}>
      <Card.Header>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Bar Graph</h5>

          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => AddNewData()}
          >
            Add
          </button>
        </div>
      </Card.Header>

      <Card.Body>
        <CChart
          type="bar"
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "Novemeber",
              "December",
            ],
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: barData,
              },
            ],
          }}
          labels="months"
        />
      </Card.Body>
    </Card>
  );
}
