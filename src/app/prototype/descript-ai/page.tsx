import GeneratorFeature from "@/components/descript-ai/generator-feature";

export const metadata = {
  title: "AI Marketing Generator | Create Copywriting Instantly",
  description: "Free tool to generate e-commerce product descriptions using AI.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            DescriptAI - AI Marketing Generator 🤖
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Create instant & SEO friendly product descriptions for your sales.
          </p>
        </div>

        <GeneratorFeature />

      </div>
    </main>
  );
}
