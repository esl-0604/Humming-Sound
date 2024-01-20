import { createContext } from "react";

export interface StepType {
  step: "Product" | "Date" | "Done";
}

export const ReservationContext = createContext<any>(null);
