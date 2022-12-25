import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "react-bootstrap/Card";

export default function Chart() {
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  const AddNewData = () => {
    const rand = Math.floor(Math.random() * 70) + 10;
    const rand1 = Math.floor(Math.random() * 60) + 20;
    setChartData1([...chartData1, rand]);
    setChartData2([...chartData2, rand1]);
  };

  return (
    <Card style={{ height: "300px", overflow: "auto", marginBottom: "20px" }}>
      <Card.Header>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Chart Graph</h5>

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
          type="line"
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
                label: "My First dataset",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: chartData1,
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "rgba(151, 187, 205, 1)",
                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                pointBorderColor: "#fff",
                data: chartData2,
              },
            ],
          }}
        />
      </Card.Body>
    </Card>
  );
}
