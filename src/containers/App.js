import React, {Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField,requestRobots } from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())

  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearch, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
      <h1>Loading</h1> :
    (
      <div className = "tc" >
      <h1 className = "header tc f1" > Robot Buddies < /h1>
      <Searchbox searchChange = {onSearch}/>
      < Scroll >
      <ErrorBoundary>
      <CardList robots = {filterRobots} />
      </ErrorBoundary>
      </Scroll>
      </div>
    );
  }setSearchField
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
