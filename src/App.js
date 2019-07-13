import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalFilter from "./components/GlobalFilters/GlobalFilter";
import ExportModal from "./components/ExportModal/ExportModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalProps: { open: false },
      globalFilters: { open: false }
    };
  }

  openCloseExportModal = () => {
    this.setState = {
      modalProps: {
        oepn: !this.state.modalProps.open
      }
    };
  };

  render() {
    return (
      <div className="App">
        <button className="primary-button" onClick={this.openCloseExportModal}>
          Open Export Modal
        </button>
        <button className="primary-button" onClick={this.openCloseExportModal}>
          Open Export Modal
        </button>
        {/* <ExportModal modalProps={this.state.modalProps} /> */}
        <GlobalFilter
          enabaleMemberSearch
          enableDateSearch
          enableMonthRangeSearch
        />
      </div>
    );
  }
}

export default App;
