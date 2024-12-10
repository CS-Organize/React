import {useState} from 'react';

const heavyWork = () => {
  console.log('heavyWork is called');
  return ['승원', '인규'];
};

export default function Names() {
  const [names, setNames] = useState(heavyWork);
  const [value, setValue] = useState('');

  const addNames = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNames((prev) => {
      console.log('prev state: ' + prev);
      return [...prev, value];
    });
    setValue('');
  };

  return (
    <div>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>추가</button>
      </form>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
}
