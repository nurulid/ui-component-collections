import { useIsLoading } from '@/store/descript-ai-store';

export interface ResultData {
  seoTitle: string;
  description: string;
  tags: string[];
}

// karena saat loading data yang dikirim adalah null, tambhkan tipe datanya null
export default function ResultDisplay({ data }: { data: ResultData | null }) {
  const isLoading = useIsLoading();

  if (isLoading) {
    return (
      <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 animate-pulse">
        <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-4">
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
        </div>
      </div>
    );
  } else if (!data) {
    return null;
  }

  return (
    <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-xl font-bold mb-4 text-slate-800">
        Generated Results ✨
      </h2>

      <div className="space-y-4">
        {/* SEO title */}
        <div>
          <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-wider">
            SEO Title
          </span>
          <h3 className="text-lg font-medium text-gray-900 mt-1">
            {data.seoTitle}
          </h3>
        </div>

        {/* description */}
        <div>
          <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-wider">
            Product Description
          </span>
          <p className="text-gray-700 mt-1 leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* tags */}
        <div>
          <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-wider">
            Hashtags
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
