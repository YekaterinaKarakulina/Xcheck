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
    changedInputIds,
    toggleMore,
    toggleShow,
    toggleAdd,
    handleInputChange,
    hideCommentArea,
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
            changedInputIds={changedInputIds}
            toggleMore={toggleMore}
            toggleAdd={toggleAdd}
            toggleShow={toggleShow}
            handleInputChange={handleInputChange}
            hideCommentArea={hideCommentArea}
            selfGrade={selfGrade}
          />
        );
      })}
    </div>
  );
};

export default GradeFields;
