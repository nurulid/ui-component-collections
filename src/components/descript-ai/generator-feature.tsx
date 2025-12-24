'use client';

import { useEffect } from 'react';
import { GenerateInput } from '@/lib/prompts';
import GeneratorForm from './generator-form';
import ResultDisplay from './result-display';
import HistoryList, { HistoryItem } from './history-list';
import {
  useDescriptAIStore,
  useHistory,
  useCurrentResult,
  useIsLoading,
  useError,
} from '@/store/descript-ai-store';

export default function GeneratorFeature() {
  const history = useHistory();
  const currentResult = useCurrentResult();
  const isLoading = useIsLoading();
  const error = useError();

  const {
    setLoading,
    setError,
    setCurrentResult,
    addToHistory,
    selectHistoryItem,
    clearHistory,
    loadSampleData,
  } = useDescriptAIStore();

  // EFFECT: Load sample data saat pertama kali render
  useEffect(() => {
    loadSampleData();
  }, [loadSampleData]);

  const handleGenerate = async (formData: GenerateInput) => {
    setLoading(true);
    setError('');
    setCurrentResult(null);

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

      // set result add to history via store action
      addToHistory(formData, json.data);
      window.scrollTo({ top: 10, behavior: 'smooth' });
    } catch (err) {
      setError('Failed to generate content. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // view history item
  const handleSelectHistory = (item: HistoryItem) => {
    selectHistoryItem(item);
    window.scrollTo({ top: 100, behavior: 'smooth' });
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

        {/* karena saat loading data yang dikirim adalah null, tambhkan tipe datanya null */}
        {(isLoading || currentResult) && <ResultDisplay data={currentResult} />}
      </div>

      <div className="lg:col-span-1">
        <HistoryList
          currentResult={currentResult}
          history={history}
          onSelect={handleSelectHistory}
          onClear={clearHistory}
        />
      </div>
    </div>
  );
}
