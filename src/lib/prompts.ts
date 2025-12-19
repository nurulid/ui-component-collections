export interface GenerateInput {
  productName: string;
  category: string;
  features: string;
  tone: string;
}

export const SYSTEM_PROMPT = `
  You are an E-commerce copywriting expert and SEO specialist.
  Your task is to create marketing content that drives sales.
  
  IMPORTANT: Output MUST be in valid JSON format with the following structure:
  {
    "seoTitle": "SEO Title (max 60 chars)",
    "description": "Persuasive description (100-150 words)",
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
  }
`;

export function constructUserPrompt(data: GenerateInput): string {
  return `
    Create marketing content for the following product:
    - Product Name: ${data.productName}
    - Category: ${data.category}
    - Features: ${data.features}
    - Tone: ${data.tone}
    
    Use natural English.
  `;
}
