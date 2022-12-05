import React from 'react';

const FormMentee = (props) => {
  const { label, onChange, id, ...inputprops } = props;
  return (
    <div className=" FormMentee ">
      <label>{label}</label>
      <input {...inputprops} onChange={onChange} />
    </div>
  );
};

export default FormMentee;
