import { useState } from 'react'
import { GenerateInput } from '@/lib/prompts'
import { CATEGORIES, TONES } from '@/lib/constants'

export const useDescriptAIForm = () => {
  const [formData, setFormData] = useState<GenerateInput>({
    productName: '',
    category: CATEGORIES[0],
    features: '',
    tone: TONES[0],
  })

  const updateFormData = (updates: Partial<GenerateInput>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const resetForm = () => {
    setFormData({
      productName: '',
      category: CATEGORIES[0],
      features: '',
      tone: TONES[0],
    })
  }

  return {
    formData,
    updateFormData,
    resetForm,
    setFormData // Untuk backward compatibility
  }
}
