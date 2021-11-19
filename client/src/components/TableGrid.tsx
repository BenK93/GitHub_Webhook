import React from "react";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TableGrid = (props: any) => {
  const columns = [
    {
      field: "avatar",
      headerName: "Profile",
      flex: 0.5,
      renderCell: (p: any) => (
        <img
          src={p.value}
          style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          loading="lazy"
        />
      ),
    },
    { field: "username", headerName: "User", flex: 1 },
    { field: "id", headerName: "ID", flex: 1 },
    { field: "number", headerName: "Number", flex: 1 },
    {
      field: "state",
      headerName: "Status",
      flex: 1,
      renderCell: (p: any) =>
        p.value === "open" ? (
          <h3 style={{ color: "#2dd522" }}>{p.value}</h3>
        ) : (
          <h3 style={{ color: "#f36565" }}>{p.value}</h3>
        ),
    },
    {
      field: "body",
      headerName: "Body Message",
      flex: 4,
      renderCell: (p: any) => (
        <TextField
          id="filled-multiline-static"
          multiline
          style={{ padding: "10px" }}
          rows={2}
          defaultValue={p.value}
          variant="outlined"
        />
      ),
    },
    {
      field: "created_at",
      headerName: "Created",
      type: "date",
      flex: 1,
    },
  ];
  return (
    <DataGrid
      rowHeight={100}
      rows={props.requests}
      columns={columns}
      pageSize={10}
      style={{ backgroundColor: "#c1f9ff6b", borderRadius: "20px" }}
      rowsPerPageOptions={[10]}
    />
  );
};
