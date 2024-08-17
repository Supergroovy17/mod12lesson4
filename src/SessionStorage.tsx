
import React from 'react'

interface SessionStorageManagerProps {
  tokenKey: string;
}

function SessionStorageManager({ tokenKey }: SessionStorageManagerProps) {

  const saveToken = (token: string) => {
    try {
      sessionStorage.setItem(tokenKey, token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  const getToken = () => {
    try {
      return sessionStorage.getItem(tokenKey);
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };

  const removeToken = () => {
    try {
      sessionStorage.removeItem(tokenKey);
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  return (
    <div>
      <button onClick={() => saveToken('exampleToken')}>Save Token</button>
      <button onClick={() => console.log('Token:', getToken())}>Get Token</button>
      <button onClick={removeToken}>Remove Token</button>
    </div>
  );
}

export default SessionStorageManager;

// Task 1: Create a React Component Named SessionStorageManager

// Develop a React functional component named SessionStorageManager using TypeScript.
// Implement functions within the component to securely save and retrieve JWT tokens from session storage.
// Utilize session storage for storing JWT tokens securely during the user's session.
// Ensure that TypeScript typings are implemented to enforce type safety and enhance code readability.
// Task 2: Implement Functions for Saving and Retrieving JWT Tokens

// Within the SessionStorageManager component, implement functions to securely save and retrieve JWT tokens from session storage.
// Ensure that the functions handle edge cases and provide error handling mechanisms.
// Use the provided JWT authentication API to obtain JWT tokens during user login.