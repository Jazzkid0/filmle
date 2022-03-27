import React from 'react';
import CastMember from './CastMember';

const api_key = process.env.REACT_APP_API_KEY

const CastList = ({ castList }) => {
  return (
    <div>
      <h2>Cast List</h2>
      {castList.map((castMember, i) => {
        return (
          <CastMember key={i} number={i} name={castList[i].name} />
        );
      })}
    </div>
  );
}

export default CastList;