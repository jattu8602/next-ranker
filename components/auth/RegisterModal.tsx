import React from 'react';

export default function RegisterModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-4">Create Account</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">Close</button>
      </div>
    </div>
  );
}
