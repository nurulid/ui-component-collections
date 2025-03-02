import React from "react";
import { CheckCircle2 } from "lucide-react";

import { Section } from "./Section";
import { formatThousandSeparator } from "@/lib/utils";
import { MenuItem } from "@/lib/types";

export const SelectedMenu = ({
  selectedFoods,
  selectedDrinks,
  onCancel,
}: {
  selectedFoods: MenuItem[];
  selectedDrinks: MenuItem[];
  onCancel: () => void;
}) => {
  return (
    <>
      <Section
        title="Selected menu"
        icon={CheckCircle2}
        className="min-w-[270px] px-0"
      >
        <div className="flex flex-col gap-4">
          <div className="h-[39dvh] overflow-auto space-y-4">
            <div>
              <h3 className="font-semibold">Foods</h3>
              {selectedFoods.length > 0 ? (
                <ul>
                  {selectedFoods.map((food, index) => (
                    <li
                      key={index}
                      className="py-2 not-last:border-b border-gray-100"
                    >
                      {food.name}
                      <div className="flex items-center justify-between text-xs opacity-50">
                        <span>1x</span>
                        <span>Rp. {formatThousandSeparator(food.price)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="opacity-50">No foods selected</p>
              )}
            </div>
            <div>
              <h3 className="font-semibold">Drinks</h3>
              {selectedDrinks.length > 0 ? (
                <ul>
                  {selectedDrinks.map((drink, index) => (
                    <li
                      key={index}
                      className="py-2 not-last:border-b border-gray-100"
                    >
                      {drink.name}
                      <div className="flex items-center justify-between text-xs opacity-50">
                        <span>1x</span>
                        <span>Rp. {formatThousandSeparator(drink.price)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="opacity-50">No drinks selected</p>
              )}
            </div>
          </div>
          {selectedFoods.length > 0 || selectedDrinks.length > 0 ? (
            <button
              onClick={onCancel}
              className="w-full border border-black bg-black text-white mt-auto btn"
            >
              Cancel
            </button>
          ) : null}
        </div>
      </Section>
    </>
  );
};
