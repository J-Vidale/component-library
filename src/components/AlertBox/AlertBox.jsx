import React from 'react';
import PropTypes from 'prop-types';

export function AlertBox({ type, message, onClose, children }) {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error:   'bg-red-100 border-red-500   text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info:    'bg-blue-100 border-blue-500  text-blue-700',
  };

  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

AlertBox.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

AlertBox.defaultProps = {
  onClose: null,
  children: null,
};
