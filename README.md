# 99Tech Code Challenge - Frontend

This repository contains solutions for a set of frontend development tasks using **ReactJS, TypeScript, and modern frontend tools**.  
Challenge link: [99Tech Code Challenge](https://s5tech.notion.site/Code-Challenge-05cdb9e0d1ce432a843f763b5d5f7497?p=20bf71f8e9de4228b606f240c446b722&pm=s)

This repo contains solutions for three frontend tasks using **ReactJS**, **TypeScript**, and **Tailwind CSS**.

---

## Problem 1: Three Ways to Sum to N

- Interactive page to calculate the sum from `1` to `n` using three methods:
  1. **Iterative:** `for` loop.
  2. **Formula:** `n * (n + 1) / 2`.
  3. **Recursive:** sums via recursion.
- Displays **code snippet + result** for each method.
- Implemented with React functional components and `useState`.

---

## Problem 2: Fancy Form (Currency Swap)

- Responsive currency swap form with **interactive validation**.
- Uses token icons ([Switcheo token SVGs](https://github.com/Switcheo/token-icons)) and live prices ([JSON](https://interview.switcheo.com/prices.json)).
- Implemented with **React + Tailwind CSS**, mobile-friendly.
- Bonus: Compatible with **Vite**.

---

## Problem 3: Messy React (Wallet Component)

- Analyzed code for **inefficiencies / anti-patterns**:
  - Multiple `getPriority` calls.
  - Inline calculations in render.
  - Unsafe key selection.
  - Unused interfaces/props.
- Refactored for:
  - `useMemo` optimization.
  - Safe key and price handling.
  - Cleaner, type-safe, and performant rendering.
