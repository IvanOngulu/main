
import React from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-surface">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md m-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500">Sign in to continue to Verde</p>
        <form className="space-y-6">
          <Input id="email" type="email" label="Email Address" placeholder="you@example.com" required />
          <Input id="password" type="password" label="Password" placeholder="••••••••" required />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-green-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-green-600">Forgot your password?</a>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
            Not a member? <a href="#" className="font-medium text-primary hover:text-green-600">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
