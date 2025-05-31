import React from 'react';
import styles from './styles.module.scss';

interface Task {
  id: number;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
  deadline: string; 
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks found</p>;

  return (
    <div className={styles.taskList}>
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h4 className={task.completed ? styles.completed : ''}>
              {task.title} ({task.xp} XP)
            </h4>
            <p>{task.description}</p>
            <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>

            {!task.completed && (
              <button onClick={() => onComplete(task.id)}>Complete</button>
            )}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
