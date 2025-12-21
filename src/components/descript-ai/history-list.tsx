import { ResultData } from './result-display';
import { GenerateInput } from '@/lib/prompts';

// tipe data untuk History Item
export interface HistoryItem {
  id: string;
  timestamp: number;
  input: GenerateInput;
  result: ResultData;
}

interface HistoryListProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onClear: () => void;
}

/**
 * Displays a list of generated history items with the ability to select and clear them.
 * 
 * @component
 * @param {HistoryListProps} props - The component props
 * @param {Array} props.history - Array of history items to display
 * @param {Function} props.onSelect - Callback function invoked when a history item is clicked
 * @param {Function} props.onClear - Callback function invoked when the "Clear All" button is clicked
 * @returns {React.ReactElement} A card component displaying the history list or an empty state message
 * 
 * @remarks
 * - If no history items exist, displays an empty state message
 * - History items are stored locally in the browser
 * - The list is scrollable with a maximum height of 600px
 * - Each item displays the product name, SEO title preview, and timestamp
 */
export default function HistoryList({
  history,
  onSelect,
  onClear,
}: HistoryListProps) {
  if (history.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center h-fit">
        <p className="text-slate-500 text-sm">No history yet.</p>
      </div>
    );
  }

  console.log('Rendering HistoryList with items:', history);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit sticky top-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-slate-800">Generated history</h3>
          <p className="text-xs text-slate-500">
            All history is saved locally in your browser
          </p>
        </div>
        <button
          onClick={onClear}
          className="text-xs text-red-500 hover:text-red-700 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className="p-3 rounded-lg border border-slate-100 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-blue-600 truncate max-w-[150px]">
                {item.input.productName}
              </span>
              <span className="text-[10px] text-slate-400">
                {new Date(item.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              {item.result.seoTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
