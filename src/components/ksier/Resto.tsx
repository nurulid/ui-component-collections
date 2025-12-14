"use client";

import React, { useState } from "react";

import { Menus } from "./Menus";
import { SelectedMenu } from "./SelectedMenu";
import { Receipt } from "./Receipt";
import { Total } from "./Total";
import { MenuItem } from "@/lib/types";

export const Resto = () => {
  const [selectedFoodItems, setSelectedFoodItems] = useState<MenuItem[]>([]);
  const [selectedDrinkItems, setSelectedDrinkItems] = useState<MenuItem[]>([]);
  const [orderedItems, setOrderedItems] = useState<MenuItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handleSelectFoodItem = (item: MenuItem) => {
    if (selectedFoodItems.some((selected) => selected.name === item.name)) {
      setSelectedFoodItems(
        selectedFoodItems.filter((i) => i.name !== item.name)
      );
    } else {
      setSelectedFoodItems([...selectedFoodItems, item]);
    }
  };

  const handleSelectDrinkItem = (item: MenuItem) => {
    if (selectedDrinkItems.some((selected) => selected.name === item.name)) {
      setSelectedDrinkItems(
        selectedDrinkItems.filter((i) => i.name !== item.name)
      );
    } else {
      setSelectedDrinkItems([...selectedDrinkItems, item]);
    }
  };

  const handleCancel = () => {
    setSelectedFoodItems([]);
    setSelectedDrinkItems([]);
    setOrderedItems([]);
    setPaymentMethod("");
  };

  const handleOrder = () => {
    setOrderedItems([...selectedFoodItems, ...selectedDrinkItems]);
    // handleCancel(); // Optionally clear selections after ordering
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  // Function to calculate the total price
  const calculateTotalPrice = (items: MenuItem[]) => {
    return items.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  // Calculate totals for food and drinks
  const totalFoodPrice = calculateTotalPrice(selectedFoodItems);
  const totalDrinkPrice = calculateTotalPrice(selectedDrinkItems);

  // Calculate the grand total
  const grandTotal = totalFoodPrice + totalDrinkPrice;
  const foodLength = selectedFoodItems.length;
  const drinkLength = selectedDrinkItems.length;

  return (
    <div className="flex gap-3 w-full">
      <Receipt
        orderedMenu={orderedItems}
        total={grandTotal}
        paymentMethod={paymentMethod}
        foodLength={foodLength}
        drinkLength={drinkLength}
      />
      <Menus
        onFoodItemSelect={handleSelectFoodItem}
        onDrinkItemSelect={handleSelectDrinkItem}
        selectedFoods={selectedFoodItems}
        selectedDrinks={selectedDrinkItems}
      />
      <div className="space-y-4">
        <Total
          total={grandTotal ?? 0}
          onOrder={handleOrder}
          onPaymentMethodChange={handlePaymentMethodChange}
          paymentMethod={paymentMethod}
          foodLength={foodLength}
          drinkLength={drinkLength}
          onCancel={handleCancel}
        />
        <SelectedMenu
          selectedFoods={selectedFoodItems}
          selectedDrinks={selectedDrinkItems}
          onCancel={handleCancel}
          orderedMenu={orderedItems}
        />
      </div>
    </div>
  );
};
