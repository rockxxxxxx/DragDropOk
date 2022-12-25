import React, { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";
import Card from "react-bootstrap/Card";

export default function () {
  const [tableData, setTableData] = useState([]);
  const AddNewData = () => {
    setTableData([
      ...tableData,
      {
        id: tableData.length + 1,
        name: `Name${tableData.length + 1}`,
        description: `Description${tableData.length + 1}`,
      },
    ]);
  };

  return (
    <Card style={{ height: "300px", overflow: "auto", marginBottom: "20px" }}>
      <Card.Header>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Table</h5>

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
        <TableControl
          header={[
            { key: "id", name: "#" },
            { key: "name", name: "Name" },
            { key: "description", name: "Description" },
          ]}
          itens={tableData}
        />
      </Card.Body>
    </Card>
  );
}
