import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import Link from 'next/link';

export const SignUpForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <Input
          id="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          id="password"
          title="Password"
          type="password"
          placeholder="Create a password"
          desc="Must be at least 8 characters."
          password
        />
      </div>
      <div className="h-8" />
      <div className="space-y-3">
        <Button type="submit" color="primary" full>
          Create account
        </Button>
        <Button color="secondary" full className="mt-4">
          Sign up with Google
        </Button>
      </div>
      <p className="text-center text-sm mt-6">
        <span className="opacity-50">Already have an account?</span>{' '}
        <Link href="/login" className="text-primary font-semibold">
          Login
        </Link>
      </p>
    </form>
  );
};
