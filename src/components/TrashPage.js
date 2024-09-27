import React from 'react';
import EmailItem from './EmailItem';

const trashEmails = [
  { id: 1, subject: "Old Promotions", sender: "ads@mockgmail.com", body: "Check out our latest offers." },
];

const TrashPage = () => {
  return (
    <div>
      <h2>Trash</h2>
      {trashEmails.length > 0 ? (
        trashEmails.map(email => (
          <EmailItem key={email.id} email={email} />
        ))
      ) : (
        <p>No emails in trash.</p>
      )}
    </div>
  );
};

export default TrashPage;
