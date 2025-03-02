import React from "react";
import { ReceiptText } from "lucide-react";

import { Section } from "./Section";
import { formatThousandSeparator } from "@/lib/utils";
import { MenuItem } from "@/lib/types";

export const Receipt = ({
  orderedMenu,
  total,
  paymentMethod,
  foodLength,
  drinkLength,
}: {
  orderedMenu: MenuItem[];
  total: number | string;
  paymentMethod?: string;
  foodLength: number;
  drinkLength: number;
}) => {
  return (
    <Section title="Receipt" icon={ReceiptText} className="min-w-[280px] p-0">
      <div className="line border h-3 rounded-full bg-gray-200 p-1">
        <div className="receipt font-inconsolata">
          {orderedMenu.length > 0 ? (
            <>
              <div className="receipt-content bg-white w-full min-h-[80px] shadow-xs border-[0.5px] border-gray-200 border-t-0 relative">
                <div className="p-4 pb-6 space-y-2 border-t-2 border-gray-200 border-dashed">
                  <div className="text-sm opacity-50">
                    <h3>Order ID: 0001</h3>
                    <p>Date: {new Date().toLocaleDateString()}</p>
                  </div>
                  <ul>
                    {orderedMenu.map((menu, index) => (
                      <li
                        key={index}
                        className="py-2 not-last:border-b border-gray-100"
                      >
                        {menu.name}
                        <div className="flex items-center justify-between text-xs opacity-50">
                          <span>1x</span>
                          <span>Rp. {formatThousandSeparator(menu.price)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-dashed border-gray-300">
                    <p className="opacity-50 text-sm">
                      {foodLength} foods, {drinkLength} drinks
                    </p>
                    <p className="text-xl font-semibold">
                      Total: <span>Rp. {formatThousandSeparator(total)}</span>
                    </p>
                    <p className="opacity-50 text-sm">
                      Payment menthod:{" "}
                      <span className="font-semibold">{paymentMethod}</span>
                    </p>
                  </div>
                </div>
                <div className="z-10 absolute -bottom-[6px] left-0 right-0 space-x-1 px-1 w-auto flex  justify-center">
                  {Array.from({ length: 17 }).map((i, index) => {
                    return (
                      <span
                        key={index.toString()}
                        className="inline-block size-3 rounded-full bg-white shadow-inner tutup relative"
                      ></span>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="receipt-content-s bg-white w-full h-[80px] shadow-xs border-[0.5px] border-gray-200 border-t-0 relative">
              <div className="flex items-center justify-center h-full border-t-2 border-gray-200 border-dashed">
                <span className="opacity-50">Waiting for a new order</span>
              </div>
              <div className="z-10 absolute -bottom-[6px] left-0 right-0 space-x-1 px-1 w-auto flex  justify-center">
                {Array.from({ length: 17 }).map((i, index) => {
                  return (
                    <span
                      key={index.toString()}
                      className="inline-block size-3 rounded-full bg-white shadow-inner tutup relative"
                    ></span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
