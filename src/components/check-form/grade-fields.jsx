/* eslint-disable react/prop-types */
import React from 'react';
import GradeField from './grade-field';

const GradeFields = (props) => {
  const {
    fields,
    selfGrade,
    detailIds,
    commentIds,
    commentFieldIds,
    toggleMore,
    toggleShow,
    toggleAdd,
  } = props;
  return (
    <div>
      {fields.map((field) => {
        return (
          <GradeField
            key={field.id}
            {...field}
            detailIds={detailIds}
            commentFieldIds={commentFieldIds}
            commentIds={commentIds}
            toggleMore={toggleMore}
            toggleAdd={toggleAdd}
            toggleShow={toggleShow}
            selfGrade={selfGrade}
          />
        );
      })}
    </div>
  );
};

export default GradeFields;
