import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';

export const htmlPricingTable = `<div className="space-y-2 max-w-2xl mx-auto">
    <div className="grid grid-cols-3 gap-4 px-2">
      <p />
      <h3 className="text-center font-medium text-lg">Monthly</h3>
      <h3 className="text-center font-medium text-lg">Yearly</h3>
    </div>

    <ul className="space-y-2">
      <li className="grid grid-cols-3 gap-5 items-center p-2">
        <h3 className="text-xl font-semibold pl-4">Basic</h3>
        <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
          <span className="opacity-50">$</span> 39
        </button>
        <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
          <span className="opacity-50">$</span> 358
        </button>
      </li>
      
      <li className="grid grid-cols-3 gap-5 items-center p-2">
        <h3 className="text-xl font-semibold pl-4">Standard</h3>
        <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
          <span className="opacity-50">$</span> 99
        </button>
        <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
          <span className="opacity-50">$</span> 958
        </button>
      </li>

      <li className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl">
        <div className="grid grid-cols-3 gap-5 items-center p-2 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold pl-4">Premium</h3>
          <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
            <span className="opacity-50">$</span> 199
          </button>
          <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
            <span className="opacity-50">$</span> 1758
          </button>
        </div>
      </li>
    </ul>

    <div className="h-1" />
    <div className="grid grid-cols-3 gap-5">
      <div />
      <div className="col-span-2">
        <button
          className="w-full text-lg h-14 rounded-xl !bg-black hover:!bg-black/85 transition-all text-white"
        >
          Continue
        </button>
      </div>
    </div>
  </div>`;

export const reactPricingTable = `const PriceButton = ({ price }: { price: number }) => (
  <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
    <span className="opacity-50">$</span> {price}
  </button>
);

const PricingPlan = ({
  title,
  monthlyPrice,
  yearlyPrice,
  isHighlight = false,
}: {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isHighlight?: boolean;
}) => {
  const containerClasses = clsx('grid grid-cols-3 gap-5 items-center p-2', {
    'bg-white rounded-xl shadow': isHighlight,
  });

  const wrapperClasses = clsx({
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl':
      isHighlight,
  });

  const content = (
    <div className={containerClasses}>
      <h3 className="text-xl font-semibold pl-4">{title}</h3>
      <PriceButton price={monthlyPrice} />
      <PriceButton price={yearlyPrice} />
    </div>
  );

  return <li className={wrapperClasses}>{content}</li>;
};

export const PricingTable = () => {
  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 px-2">
        <p />
        <h3 className="text-center font-medium text-lg">Monthly</h3>
        <h3 className="text-center font-medium text-lg">Yearly</h3>
      </div>

      <ul className="space-y-2">
        <PricingPlan title="Basic" monthlyPrice={39} yearlyPrice={358} />
        <PricingPlan title="Standard" monthlyPrice={99} yearlyPrice={958} />
        <PricingPlan title="Premium" monthlyPrice={199} yearlyPrice={1758} />
      </ul>

      <div className="h-1" />
      <div className="grid grid-cols-3 gap-5">
        <div />
        <div className="col-span-2">
          <Button
            color="primary"
            className="w-full text-lg h-14 rounded-xl !bg-black hover:!bg-black/90 transition-all"
          >
            <Link href="#">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};`;

const PriceButton = ({ price }: { price: number }) => (
  <button className="text-center border p-3 rounded-xl text-lg hover:border-black transition-all">
    <span className="opacity-50">$</span> {price}
  </button>
);

const PricingPlan = ({
  title,
  monthlyPrice,
  yearlyPrice,
  isHighlight = false,
}: {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isHighlight?: boolean;
}) => {
  const containerClasses = clsx('grid grid-cols-3 gap-5 items-center p-2', {
    'bg-white rounded-xl shadow': isHighlight,
  });

  const wrapperClasses = clsx({
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl':
      isHighlight,
  });

  const content = (
    <div className={containerClasses}>
      <h3 className="text-xl font-semibold pl-4">{title}</h3>
      <PriceButton price={monthlyPrice} />
      <PriceButton price={yearlyPrice} />
    </div>
  );

  return <li className={wrapperClasses}>{content}</li>;
};

export const PricingTable = () => {
  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 px-2">
        <p />
        <h3 className="text-center font-medium text-lg">Monthly</h3>
        <h3 className="text-center font-medium text-lg">Yearly</h3>
      </div>

      <ul className="space-y-2">
        <PricingPlan title="Basic" monthlyPrice={39} yearlyPrice={358} />
        <PricingPlan title="Standard" monthlyPrice={99} yearlyPrice={958} />
        <PricingPlan
          title="Premium"
          monthlyPrice={199}
          yearlyPrice={1758}
          isHighlight
        />
      </ul>

      <div className="h-1" />
      <div className="grid grid-cols-3 gap-5">
        <div />
        <div className="col-span-2">
          <Button
            color="primary"
            className="w-full text-lg h-14 rounded-xl !bg-black hover:!bg-black/85 transition-all"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
