import React from 'react';
import CastMember from './CastMember';

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