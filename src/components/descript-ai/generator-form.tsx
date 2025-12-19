"use client";

import { useState } from "react";
import { CATEGORIES, TONES } from "@/lib/constants";
import { GenerateInput } from "@/lib/prompts";

interface GeneratorFormProps {
  isLoading: boolean;
  onSubmit: (data: GenerateInput) => void;
}

export default function GeneratorForm({ isLoading, onSubmit }: GeneratorFormProps) {
  const [formData, setFormData] = useState<GenerateInput>({
    productName: "",
    category: CATEGORIES[0],
    features: "",
    tone: TONES[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      
      {/* product name */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700">Product Name</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
          placeholder="e.g., Turbo X Running Shoes"
          value={formData.productName}
          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
        />
      </div>

      {/* grid for category & tone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Category</label>
          <select
            className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Tone of Voice</label>
          <select
            className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
            value={formData.tone}
            onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
          >
            {TONES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* features */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700">Key Features / Keywords</label>
        <textarea
          required
          rows={3}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
          placeholder="e.g., Lightweight material, waterproof, memory foam sole..."
          value={formData.features}
          onChange={(e) => setFormData({ ...formData, features: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Generating Content..." : "Generate Copy 🚀"}
      </button>
    </form>
  );
}
