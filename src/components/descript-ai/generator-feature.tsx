'use client';

import { useState } from 'react';
import { GenerateInput } from '@/lib/prompts';
import GeneratorForm from './generator-form';
import ResultDisplay from './result-display';

export default function GeneratorFeature() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async (formData: GenerateInput) => {
    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Terjadi kesalahan');
      }

      setResult(json.data);
    } catch (err) {
      setError('Failed to generate content. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <GeneratorForm isLoading={isLoading} onSubmit={handleGenerate} />

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 animate-in fade-in">
          {error}
        </div>
      )}

      {result && <ResultDisplay data={result} />}
    </div>
  );
}
