import GeneratorFeature from "@/components/descript-ai/generator-feature";

export const metadata = {
  title: "DescriptAI | AI Marketing Generator",
  description: "Free tool to generate e-commerce product descriptions using AI.",
};

export default function Home() {
  return (
    <main className=" bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 border rounded-xl">
      <div className="max-w-6xl mx-auto">
        
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
