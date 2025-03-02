"use client";

import React from "react";
import { CheckCircle2, Utensils } from "lucide-react";

import { Section } from "./Section";
import { formatThousandSeparator } from "@/lib/utils";
import { MenuItem } from "@/lib/types";

export const Menus = ({
  onFoodItemSelect,
  onDrinkItemSelect,
  selectedFoods,
  selectedDrinks,
}: {
  onFoodItemSelect: (item: MenuItem) => void;
  onDrinkItemSelect: (item: MenuItem) => void;
  selectedFoods: MenuItem[];
  selectedDrinks: MenuItem[];
}) => {
  const menus = [
    {
      name: "Soto",
      price: "15000",
      type: "food",
    },
    {
      name: "Mie ayam pangsit",
      price: "13000",
      type: "food",
    },
    {
      name: "Miso",
      price: "17000",
      type: "food",
    },
    {
      name: "Ketoprak",
      price: "13000",
      type: "food",
    },
    {
      name: "Nasi pecel + ayam goreng",
      price: "25000",
      type: "food",
    },
    {
      name: "Pecel ayam",
      price: "22000",
      type: "food",
    },
    {
      name: "Pecel lele",
      price: "20000",
      type: "food",
    },
    {
      name: "Orange",
      price: "5000",
      type: "drink",
    },
    {
      name: "Mineral water",
      price: "3500",
      type: "drink",
    },
    {
      name: "Ice tea",
      price: "7000",
      type: "drink",
    },
    {
      name: "Ice lemon tea",
      price: "8000",
      type: "drink",
    },
    {
      name: "Kelapa muda",
      price: "10000",
      type: "drink",
    },
  ];

  return (
    <Section
      title="Menus"
      icon={Utensils}
      className="flex-1 min-w-[450px] py-0"
    >
      <div className="space-y-4">
        <h3 className="font-semibold">Foods</h3>
        <ul className="grid grid-cols-2 gap-3">
          {menus
            .filter((menu) => menu.type === "food")
            .map((food, i) => {
              return (
                <li
                  key={i}
                  className={[
                    "p-2 border cursor-pointer flex flex-col justify-between gap-2",
                    selectedFoods.some(
                      (selected) => selected.name === food.name
                    )
                      ? "border-yellow-200 bg-yellow-50/20"
                      : "border-dashed",
                  ].join(" ")}
                  onClick={() => onFoodItemSelect(food)}
                >
                  <span className="flex justify-between">
                    <span className="flex-1 leading-[1.2]">{food.name}</span>
                    {selectedFoods.some(
                      (selected) => selected.name === food.name
                    ) ? (
                      <CheckCircle2 size={18} className="text-yellow-500" />
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="opacity-50 text-xs">
                    Rp. {formatThousandSeparator(food.price)}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="h-8" />
      <div className="space-y-4">
        <h3 className="font-semibold">Drinks</h3>
        <ul className="grid grid-cols-2 gap-3">
          {menus
            .filter((menu) => menu.type === "drink")
            .map((drink, i) => {
              return (
                <li
                  key={i}
                  className={[
                    "p-2 border cursor-pointer flex flex-col justify-between gap-2",
                    selectedDrinks.some(
                      (selected) => selected.name === drink.name
                    )
                      ? "border-yellow-200 bg-yellow-50/20"
                      : "border-dashed",
                  ].join(" ")}
                  onClick={() => onDrinkItemSelect(drink)}
                >
                  <span className="flex justify-between">
                    <span className="flex-1 leading-[1.2]">{drink.name}</span>
                    {selectedDrinks.some(
                      (selected) => selected.name === drink.name
                    ) ? (
                      <CheckCircle2 size={18} className="text-yellow-500" />
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="opacity-50 text-xs">
                    Rp. {formatThousandSeparator(drink.price)}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="h-8" />
    </Section>
  );
};
