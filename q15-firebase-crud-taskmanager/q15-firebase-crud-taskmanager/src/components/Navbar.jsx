import React from 'react';

const Navbar = ({ summary }) => {
  const renderCard = (status) => (
    <div className="status-card" title={summary[status].map(task => task.name).join(', ') || 'No tasks'}>
      {status.toUpperCase()}: {summary[status].length}
    </div>
  );

  return (
    <div className="navbar">
      {['completed', 'ongoing', 'not-started'].map(status => renderCard(status))}
    </div>
  );
};

export default Navbar;
