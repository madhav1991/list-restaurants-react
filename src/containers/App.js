import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchRestaurants} from '../actions/index'
import List from '../components/List'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      city:'',
      list: this.props.listOfRestaurants,
      filteredInput: '',
      filteredList:[]
    }
    this.findRestaurants= this.findRestaurants.bind(this)
    this.onChange= this.onChange.bind(this)
    this.renderDetails= this.renderDetails.bind(this)
    this.onFilter= this.onFilter.bind(this)
    this.filterRestaurants= this.filterRestaurants.bind(this)
  }

  onChange(e){
    this.setState({
      city:e.target.value
    })
  }

  onFilter(e){
    this.setState({
      filteredInput: e.target.value
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.listOfRestaurants !== prevState.listOfRestaurants) {
      return {
        list: nextProps.listOfRestaurants,
      };
    }
    return null;
  }

  findRestaurants() {
    const {dispatch} = this.props;
    dispatch(fetchRestaurants(this.state.city))
  }

  filterRestaurants(){
    const { list ,filteredInput} = this.state;
    const filteredList= list.filter(content => 
      content.name.includes(filteredInput) || content.address.includes(filteredInput) || content.name.includes(filteredInput)
    )
    this.setState({
      filteredList
    })
  }

  renderDetails() {
    const { list,filteredList } = this.state;

    return filteredList.length 
      ? filteredList.map((tag, index) => (
        <List
          address={tag.address}
          area={tag.area}
          name={tag.name}
          key={index}
        />
      ))
      : list.map((tag, index) => (
        <List
          address={tag.address}
          area={tag.area}
          name={tag.name}
          key={index}
        />
      ));
  }

  render(){
    return(
      <div className='parent-div'>
        <div>
          <input 
            className ='find-input' 
            htmlFor='restaurant-button'
            onChange={this.onChange}
          />
          <button 
            className='restaurant-button'
            id='restaurant-button'
            type="submit"
            onClick={this.findRestaurants} 
          >
            Find Restaurant
          </button>
        </div>
        <div>
          <input 
            className='filter-input' 
            htmlFor='filter-button'
            onChange={this.onFilter}
          />
          <button 
            className='filter-button'
            id='filter-button'
            type="submit" 
            onClick={this.filterRestaurants}
          >
            Filter Restaurants
          </button>
            {this.renderDetails()}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listOfRestaurants: PropTypes.any,
  isFetchingList: PropTypes.bool
}

App.defaultProps = {
  listOfRestaurants:[]
}

function mapStateToProps(state) {
  const {restaurants}= state
  const {listOfRestaurants, isFetchingList}= restaurants
  return {
    listOfRestaurants,
    isFetchingList
  }
}


export default connect(mapStateToProps)(App)
