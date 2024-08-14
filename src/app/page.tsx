"use client"; 
import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const Home: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="w-full max-w-md">
        {isRegistering ? (
          <>
            <RegisterForm />
            <p className="text-center mt-4">
              Ya tengo una cuenta{' '}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-500 underline"
              >
                Inicia sesion aqui
              </button>
            </p>
          </>
        ) : (
          <>
            <LoginForm />
            <p className="text-center mt-4">
              No tienes una cuenta aun?{' '}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-500 underline"
              >
                Registrate aqui
              </button>
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
