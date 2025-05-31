import React, { useState } from 'react';
import styles from './styles.module.scss';

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [xp, setXp] = useState<number | ''>('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (typeof xp !== 'number' || xp <= 0 || xp > 1000) {
      setError('XP must be a number between 1 and 1000');
      return;
    }

    if (!deadline) {
      setError('Please provide a deadline');
      return;
    }

    if (!token) {
      setError('User not authenticated');
      return;
    }

    const isoDeadline = new Date(deadline).toISOString().split('.')[0];

    try {
      const res = await fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, xp, deadline: isoDeadline }),
      });

      if (res.ok) {
        setTitle('');
        setDescription('');
        setXp('');
        setDeadline('');
        onTaskCreated();
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to create task');
      }
    } catch {
      setError('Network error. Please try again.');
    }
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className={styles.taskFormInput}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.taskFormTextarea}
      />
      <input
        type="number"
        placeholder="XP (1-1000)"
        value={xp}
        onChange={(e) => {
          const val = e.target.value;
          setXp(val === '' ? '' : Number(val));
        }}

        className={styles.taskFormInput}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        className={styles.taskFormInput}
      />
      <button type="submit" className={styles.taskFormButton}>
        Add Task
      </button>
      {error && <p className={styles.taskFormError}>{error}</p>}
    </form>
  );
};

export default TaskForm;
