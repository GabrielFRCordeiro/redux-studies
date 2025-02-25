import { useSelector, useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { removeTask, toggleTask } from './redux/actions/taskActions';

function App() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask />
      <TaskList tasks={tasks} onRemove={handleRemoveTask} onToggle={handleToggleTask} />
    </div>
  );
}

export default App
