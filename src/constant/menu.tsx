import { SwapForm } from "../pages/problem2/SwapForm";
import SumToN from "../pages/problem1/SumToN";
import MessyReactDemo from "../pages/problem3";

export const MENU_ITEMS = [
  { id: "test-1", label: "Problem 1: Sum to n", component: <SumToN /> },
  { id: "test-2", label: "Problem 2: Fancy Form", component: <SwapForm /> },
  {
    id: "test-3",
    label: "Problem 3: Messy React",
    component: <MessyReactDemo />,
  },
];
