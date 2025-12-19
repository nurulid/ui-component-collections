export interface GenerateInput {
  productName: string;
  category: string;
  features: string;
  tone: string;
}

export const SYSTEM_PROMPT = `
  You are an expert E-commerce copywriter fluent in both English and Indonesian.
  
  IMPORTANT: 
  1. Analyze the language used in the user's input (specifically the 'Features' field).
  2. If the input is in Indonesian, the Output MUST be in Indonesian.
  3. If the input is in English, the Output MUST be in English.
  
  Output Format (JSON only):
  {
    "seoTitle": "SEO Title (max 60 chars)",
    "description": "Persuasive product description (100-150 words)",
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
  }
`;

export function constructUserPrompt(data: GenerateInput): string {
  return `
    Create marketing content for:
    - Product Name: ${data.productName}
    - Category: ${data.category}
    - Features: ${data.features}
    - Tone: ${data.tone}
    
    REMINDER: Detect the language of the 'Features' above. Write the response in that SAME language.
  `;
}
