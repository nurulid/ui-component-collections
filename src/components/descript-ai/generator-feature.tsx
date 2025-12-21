'use client';

import { useState, useEffect } from 'react';
import { GenerateInput } from '@/lib/prompts';
import GeneratorForm from './generator-form';
import ResultDisplay, { ResultData } from './result-display';
import HistoryList, { HistoryItem } from './history-list';

export default function GeneratorFeature() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 1. load history dari LocalStorage saat pertama kali load
  useEffect(() => {
    const savedHistory = localStorage.getItem('descriptai-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // 2. save to LocalStorage
  const saveToHistory = (inputData: GenerateInput, resultData: ResultData) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(), // simple ID based on timestamp
      timestamp: Date.now(),
      input: inputData,
      result: resultData
    };

    const updatedHistory = [newItem, ...history]; // add new item to top
    setHistory(updatedHistory);
    localStorage.setItem('descriptai-history', JSON.stringify(updatedHistory));
  };

  // 3. clear history
  const clearHistory = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      setHistory([]);
      localStorage.removeItem('descriptai-history');
    }
  };

  // handle form generate submission
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
      
      // save to history after successful generate
      saveToHistory(formData, json.data);

    } catch (err) {
      setError('Failed to generate content. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // view history item
  const handleSelectHistory = (item: HistoryItem) => {
    setResult(item.result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <GeneratorForm isLoading={isLoading} onSubmit={handleGenerate} />

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 animate-in fade-in">
            {error}
          </div>
        )}

        {result && <ResultDisplay data={result} />}
      </div>

      <div className="lg:col-span-1">
        <HistoryList 
          history={history} 
          onSelect={handleSelectHistory} 
          onClear={clearHistory}
        />
      </div>
    </div>
  );
}
