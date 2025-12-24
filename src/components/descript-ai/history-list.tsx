import { useMemo } from 'react'
import { ResultData } from './result-display'
import { GenerateInput } from '@/lib/prompts'
import HistoryItemComponent from './history-item'
import { SAMPLE_DATA } from '@/lib/sample-data'

export interface HistoryItem {
  id: string
  timestamp: number
  input: GenerateInput
  result: ResultData
}

interface HistoryListProps {
  history: HistoryItem[]
  currentResult: ResultData | null
  onSelect: (item: HistoryItem) => void
  onClear: () => void
}

export default function HistoryList({
  history,
  currentResult,
  onSelect,
  onClear,
}: HistoryListProps) {

  const sampleData = SAMPLE_DATA['descript-ai'];
  
  // LOGIKA DETEKSI SAMPLE:
  // cek apakah item pertama di history ID-nya ada di daftar SAMPLE_DATA?
  // pake useMemo biar gak hitung ulang terus tiap render (optional tapi good practice)
  const isSampleMode = useMemo(() => {
    if (history.length === 0) return false;
    
    // Cek: Apakah ada item di history yang ID-nya sama dengan salah satu ID di SAMPLE_DATA?
    return history.some(item => sampleData.some(sample => sample.id === item.id));
  }, [history, sampleData]);

  console.log('HistoryList rendered. Mode:', isSampleMode ? 'Sample Data' : 'User Data');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit sticky top-6 mb-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-slate-800">
            {isSampleMode ? 'Example Result' : 'Generated History'}
          </h3>
          <p className="text-xs text-slate-500">
            {isSampleMode
              ? 'Try generating content to see it here'
              : 'All history is saved locally in your browser'}
          </p>
        </div>

        {!isSampleMode && history.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-red-500 hover:text-red-700 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {!isSampleMode && history.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">
                No history yet.
            </div>
        )}

        {history.map((item) => {
          const isActive = currentResult 
            ? item.result.seoTitle === currentResult.seoTitle 
            : false

          return (
            <HistoryItemComponent
              key={item.id}
              item={item}
              isSelected={isActive}
              onClick={() => onSelect(item)}
            />
          )
        })}
      </div>

      {isSampleMode && (
        <div className="mt-4 pt-4 border-t border-dashed border-slate-200 text-center">
          <p className="text-xs text-slate-400 italic">
            👆 This is a sample data to show you how it looks.
          </p>
        </div>
      )}
    </div>
  )
}
