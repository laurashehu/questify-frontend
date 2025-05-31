import React, { useEffect, useState } from 'react';

interface Punishment {
  id: number;
  description: string;
  assignedAt: string;
  acknowledged: boolean;
}

const PunishmentList: React.FC = () => {
  const [punishments, setPunishments] = useState<Punishment[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;

    fetch('http://localhost:8080/user-punishments', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch punishments');
        return res.json();
      })
      .then(data => setPunishments(data))
      .catch(console.error);
  }, [token]);

  if (punishments.length === 0) return <p>No punishments assigned.</p>;

  return (
    <div style={{ marginTop: '1rem', color: 'white' }}>
      <h3>Your Punishments</h3>
      <ul>
        {punishments.map(p => (
          <li key={p.id}>
            <strong>{p.description}</strong> — assigned at {new Date(p.assignedAt).toLocaleString()}
            {p.acknowledged ? ' (Acknowledged)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PunishmentList;
