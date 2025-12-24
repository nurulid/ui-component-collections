import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GenerateInput } from '@/lib/prompts';
import { ResultData } from '@/components/descript-ai/result-display';
import { HistoryItem } from '@/components/descript-ai/history-list';
import { SAMPLE_DATA } from '@/lib/sample-data';

// tipe data untuk descript-ai store
interface DescriptAIStore {
  // STATE
  isLoading: boolean;
  error: string;
  currentResult: ResultData | null;
  history: HistoryItem[];

  // ACTIONS
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setCurrentResult: (result: ResultData | null) => void;
  addToHistory: (input: GenerateInput, result: ResultData) => void;
  selectHistoryItem: (item: HistoryItem) => void;
  clearHistory: () => void;
  loadSampleData: () => void;
}

// helper function untuk generate ID baru
const generateId = () => Date.now().toString();
// get sample data from SAMPLE_DATA
const sampleData = SAMPLE_DATA['descript-ai'] as unknown as HistoryItem[];

// create store dengan persist middleware (auto save ke localStorage)
export const useDescriptAIStore = create<DescriptAIStore>()(
  persist(
    (set, get) => ({
      // INITIAL STATE
      isLoading: false,
      error: '',
      currentResult: null,
      history: [],

      // ACTIONS IMPLEMENTATION
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      setCurrentResult: (result) => set({ currentResult: result }),

      addToHistory: (input, result) => {
        const newItem: HistoryItem = {
          id: generateId(),
          timestamp: Date.now(),
          input,
          result,
        };

        set((state) => {
          // STEP PENTING: clean history dari sample data
          // lalu filter history yang ada, remove item jika item itu berasal dari sampleData
          const realHistory = state.history.filter(
            (historyItem) =>
              !sampleData.some((sample) => sample.id === historyItem.id)
          );

          return {
            history: [newItem, ...realHistory], // gabungkan item baru dengan history yang sudah bersih
            currentResult: result,
          };
        });
      },

      // select history item untuk ditampilkan
      selectHistoryItem: (item) => {
        set({ currentResult: item.result });
      },

      clearHistory: () => {
        if (window.confirm('Are you sure you want to clear all history?')) {
          set({
            history: sampleData, // reset ke sample data
            currentResult: sampleData[0].result, // auto select first sample result
          });
        }
      },

      loadSampleData: () => {
        const { history, currentResult } = get();

        // load sample only if history is empty and no current result
        if (history.length === 0 && !currentResult) {
          if (sampleData.length > 0) {
            set({
              history: sampleData,
              currentResult: sampleData[0].result, // auto select the first sample result
            });
          }
        }
      },
    }),
    {
      // PERSIST CONFIGURATION
      name: 'descriptai-store', // keydi localStorage
      // hanya simpan history ke localStorage (loading & error gak perlu disimpan)
      partialize: (state) => ({
        history: state.history,
        currentResult: state.currentResult,
      }),
    }
  )
);

// selector functions untuk performance optimization
// this is optional, but good practice to avoid unnecessary re-renders
// ---
// Selector untuk mengambil history saja
export const useHistory = () => useDescriptAIStore((state) => state.history);
// Selector untuk mengambil currentResult saja
export const useCurrentResult = () =>
  useDescriptAIStore((state) => state.currentResult);
// Selector untuk mengambil isLoading saja
export const useIsLoading = () =>
  useDescriptAIStore((state) => state.isLoading);
// Selector untuk mengambil error saja
export const useError = () => useDescriptAIStore((state) => state.error);
