import React, { Component } from 'react';
import ShowList from './ShowList';

const api_key = process.env.REACT_APP_API_KEY

class CastList extends Component {
  constructor() {
    super()
    this.state = {
      castList: []
    }
  }

  componentDidMount() {
    const movieID = this.props.movieID;
    const castUrl = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${api_key}&language=en-US`;
    fetch(castUrl)
    .then(resp => resp.json())
    .then(data => this.setState({ castList: data.cast }))
    .catch(err => console.log("Failed to grab cast: ", err))
  }


  render() {
    const { castList } = this.state;
    const filteredCastList = castList.slice(0, this.props.tries + 1)

    return (
      <div>
        <ShowList castList={filteredCastList} />
      </div>
    );
  }
}

export default CastList;