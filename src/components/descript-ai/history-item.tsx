import { HistoryItem as HistoryItemType } from './history-list';

interface HistoryItemProps {
  item: HistoryItemType;
  isSelected?: boolean;
  onClick: (item: HistoryItemType) => void;
}

export default function HistoryItem({ item, isSelected, onClick }: HistoryItemProps) {
  return (
    <div
      onClick={() => onClick(item)}
      className={[
        'p-3 rounded-lg border border-slate-100 hover:border-fuchsia-300 hover:bg-fuchsia-50 cursor-pointer transition-all group space-y-4',
        isSelected ? 'border-fuchsia-500 bg-fuchsia-50' : '',
      ].join(' ')}
    >
      <div>
        <h3 className="font-semibold text-fuchsia-600 line-clamp-2">
          {item.result.seoTitle}
        </h3>
        <span className="text-xs text-slate-400">
          {new Date(item.timestamp).toDateString()}
        </span>
      </div>

      <div className="text-xs text-slate-600 p-2 bg-slate-50 rounded-md border-4 border-dashed border-slate-100 space-y-1">
        <p className="block">
          <span className="opacity-70">Product name:</span> {item.input.productName}
        </p>
        <p className="block">
          <span className="opacity-70">Category:</span> {item.input.category}
        </p>
        <p className="block">
          <span className="opacity-70">Tone:</span> {item.input.tone}
        </p>
      </div>
    </div>
  );
}
