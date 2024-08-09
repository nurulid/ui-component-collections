"use client"

import React, { useState } from 'react';

interface Step {
  title: string;
  content: React.ReactNode;
}

interface StepperFormProps {
  steps: Step[];
}

const StepperForm: React.FC<StepperFormProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="stepper-form">
      <div className="stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? 'active' : ''} ${
              index < currentStep ? 'completed' : ''
            }`}
          >
            {step.title}
          </div>
        ))}
      </div>
      <div className="step-content">{steps[currentStep].content}</div>
      <div className="step-navigation">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default StepperForm;