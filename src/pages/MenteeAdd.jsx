import { useState } from 'react';
import DatePicker from 'react-datepicker';
import FormMentee from '../components/FormMentee';

const MenteeAdd = () => {
  const [values, setValues] = useState({
    name: '',
    address: '',
    homeaddress: '',
    email: '',
    gender: '',
    telegram: '',
    phone: '',
    username: '',
    phone: '',
    status: '',
    type: '',
    major: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      label: 'name',
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'address',
    },
    {
      id: 3,
      name: 'homeAddress',
      type: 'text',
      placeholder: 'Home address',
      label: 'home address',
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      label: 'email',
    },
    {
      id: 5,
      name: 'gender',
      type: 'text',
      placeholder: 'Gender',
      label: 'gender',
    },
    {
      id: 6,
      name: 'telegram',
      type: 'text',
      placeholder: 'telegram',
      label: 'telegram',
    },
    {
      id: 7,
      name: 'phone',
      type: 'number',
      placeholder: 'Phone',
      label: 'phone',
    },

    {
      id: 8,
      name: 'name',
      type: 'text',
      placeholder: 'name',
      label: 'name',
    },
    {
      id: 9,
      name: 'phone',
      type: 'number',
      placeholder: 'Phone',
      label: 'phone',
    },
    {
      id: 10,
      name: 'status',
      type: 'text',
      placeholder: 'Status',
      label: 'status',
    },
    {
      id: 11,
      name: 'type',
      type: 'text',
      placeholder: 'Type',
      label: 'type',
    },
    {
      id: 12,
      name: 'major',
      type: 'text',
      placeholder: 'Major',
      label: 'major',
    },
    {
      id: 13,
      name: 'graduate',
      type: 'text',
      placeholder: 'Graduate',
      label: 'graduate',
    },
  ];

  //const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="addMentee">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormMentee key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default MenteeAdd;
