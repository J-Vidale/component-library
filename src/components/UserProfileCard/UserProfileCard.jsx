import React from 'react';
import PropTypes from 'prop-types';

export function UserProfileCard({ user, showEmail, showRole, onEdit, children }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.name}’s avatar`}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
      )}
      <h2 className="text-xl font-semibold">{user.name}</h2>
      {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
      {showRole && <p className="text-sm text-gray-600">{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
}

UserProfileCard.propTypes = {
  user: PropTypes.shape({
    id:       PropTypes.string.isRequired,
    name:     PropTypes.string.isRequired,
    email:    PropTypes.string.isRequired,
    role:     PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }).isRequired,
  showEmail: PropTypes.bool,
  showRole:  PropTypes.bool,
  onEdit:    PropTypes.func,
  children:  PropTypes.node,
};

UserProfileCard.defaultProps = {
  showEmail: false,
  showRole:  false,
  onEdit:    null,
  children:  null,
};
