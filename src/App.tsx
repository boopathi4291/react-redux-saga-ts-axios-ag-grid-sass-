import * as React from 'react';
import './styles/App.css';

import MainComponent from './components/main.component';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { getAllRecords, updateRecord } from './actions/actions';


class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { myData: this.props.myData }
  }



  public render() {

    return (
      <div className="App">
        <MainComponent myProps={this.props} />
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   return {

//   };
// };

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getAllRecords, updateRecord }, dispatch)
};

export default connect(null, mapDispatchToProps)(App);

