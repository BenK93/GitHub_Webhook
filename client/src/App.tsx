import React from "react";
import "./App.css";
import { TableGrid } from "./components/TableGrid";
import { getRequests } from "./services/getPullRequests";

class App extends React.Component {
  state = {
    requests: [],
  };

  async componentWillMount() {
    const data = await getRequests();
    console.log(data);
    this.setState({ requests: data });
  }

  render() {
    return (
      <div className="App">
        <div className="Table">
          <TableGrid requests={this.state.requests} />
        </div>
      </div>
    );
  }
}

export default App;
