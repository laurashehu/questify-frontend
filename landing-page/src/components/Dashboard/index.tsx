import React, { useEffect, useState } from 'react';
import TopBar from 'components/TopBar';
import UserStats from 'components/UserStats';
import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';
import ProgressBar from 'components/ProgressBar';
import PunishmentList from 'components/PunishmentList';
import duneBg from 'resources/Dashboard/bg.png';


interface UserProfile {
  username: string;
  level: number;
  xp: number;
  dailyXp: number;
  badges: string[]; 
}

interface Task {
  id: number;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
  deadline: string; 
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const token = localStorage.getItem('token');

  const fetchProfile = async () => {
    if (!token) return;
    const res = await fetch('http://localhost:8080/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data);
    }
  };

const fetchTasks = async () => {
  if (!token) return;
  const res = await fetch('http://localhost:8080/tasks/today', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    const data = await res.json();
    setTasks(data);
  }
};

const handleCompleteTask = async (taskId: number) => {
  if (!token) return;
  const res = await fetch(`http://localhost:8080/tasks/${taskId}/complete`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    fetchTasks();
  } else {
    alert('Failed to complete task');
  }
};

const handleDeleteTask = async (taskId: number) => {
  if (!token) return;
  const res = await fetch(`http://localhost:8080/tasks/${taskId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    fetchTasks();
  } else {
    alert('Failed to delete task');
  }
};



  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (user) fetchTasks();
  }, [user]);

  

return (
  <div
    className="dashboard"
    style={{
      backgroundImage: `url(${duneBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
      minHeight: '100vh',
      color: '#eee',
    }}
  >
    {user && <TopBar username={user.username} level={user.level} />}
    <main className="content">
      {user && <UserStats xp={user.xp} dailyXp={user.dailyXp} level={user.level} />}
      {user && <ProgressBar currentXp={user.dailyXp} dailyXpCap={5000} />}
      
      <div style={{ background: '#1c1c1c', padding: '1rem', marginTop: '1rem',marginLeft: '7rem',marginRight: '7rem', border: '1px solid #333', borderRadius: '8px' }}>
        <TaskForm onTaskCreated={fetchTasks} />
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <PunishmentList />
      </div>
      
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </main>
  </div>
);


};



export default Dashboard;
