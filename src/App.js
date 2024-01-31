import './App.css';
import CustomButton from './Components/CustomButton';
import CustomInput from './Components/CustomInput';
import Card from './Components/Card';
import Header from './Components/Header';

import { useState } from 'react';

function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);

  const [singleTask, setSingleTask] = useState('');
  const [singleDes, setSingleDes] = useState('');

  const UpdateTask = (id) => {
    setTasks(
      Tasks.map((t) => (t.id === id ? { ...t, complete: true } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id === id ? false : true)));
  };

  const addToCard = () => {
    const id = Tasks.length === 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
    };
    setTasks([...Tasks, taskDetail]);
  };

  const ClearInput = () => {
    setSingleTask('');
    setSingleDes('');
  };

  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };

  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };

  return (
    <div className='main'>
      <div className='inputSection'>
        <Header handleInput={handleInput} />
        {add === true ? (
          <>
            <CustomInput
              value={singleTask}
              placeHolder='Enter Task'
              name='Task'
              change={handleCustomTask}
            />
            <CustomInput
              value={singleDes}
              placeHolder='Enter Description'
              name='Description'
              change={handleCustomDes}
            />
            <div className='btnwrapper'>
              <CustomButton
                color='White'
                bg='#0c379c'
                name='Save Task'
                click={addToCard}
              />
              <CustomButton color='white' bg='rgb(214, 10, 10)' name='Delete' click={ClearInput} />
            </div>
          </>
        ) : null}
      </div>

      <div className='cardSection'>
        {Tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            delete={() => deleteTask(t.id)}
            update={() => UpdateTask(t.id)}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
