import { renderEditSingleSelectCell } from "@mui/x-data-grid";
import axios from "axios";

export const getRequests = async () => {
  const result = await axios.get("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.data;
};
