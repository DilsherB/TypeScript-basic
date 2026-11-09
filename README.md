# TypeScript Capstone & Mastery Journey 🚀

A comprehensive portfolio of TypeScript patterns, enterprise data structures, defensive programming techniques, and functional CRUD services built during my transition into advanced web development and asynchronous API integration.

---

## 📌 Core Concepts & Architecture
* **Types vs. Interfaces:** Structuring custom domain models versus defining object shapes and union types (`MyTaskPriority`, `Task`, `Product`).
* **Utility Types:** Leveraging `Omit<T, K>` for safe entity creation and `Partial<T>` for dynamic updates.
* **Array Manipulations & Safety:** Utilizing `.find()`, `.findIndex()`, `.filter()`, and `.splice()` with strict index guards.
* **Defensive Programming:** Preventing runtime crashes using optional chaining (`?.`), nullish coalescing (`??`), and boundary checks for missing IDs (`-1` index validation).
* **Inventory & Financial Patterns:** Implementing delta-based relative updates (`stockChange`) instead of blind absolute property overwrites to maintain precise running balances.

---

## 🛠️ Problems, Edge Cases & Solutions

<details>
<summary><b>Problem 1: The `-1` Index Bug in <code>deleteTaskById</code></b></summary>

### The Problem
When using `.findIndex()` to locate an item by ID, if the ID does not exist in the array, it returns `-1`. Passing `-1` directly into `.splice(-1, 1)` causes JavaScript/TypeScript to treat `-1` as an offset from the *end* of the array—accidentally deleting your **very last task** instead of failing safely.

### The Solution
Implement a strict boundary check (`if (indexToDelete === -1)`) before executing `.splice()`, returning a structured response or handling the missing ID explicitly.

```
typescript
function deleteTaskById(
  tasks: Task[],
  id: number
): { deletedTask: Task[]; tasks: Task[]; indexToDelete: number } {
  const indexToDelete = tasks.findIndex((task) => task.id === id);

  return indexToDelete === -1
    ? { deletedTask: [], tasks, indexToDelete: id } // Safe fallback returning user's searched ID
    : { deletedTask: tasks.splice(indexToDelete, 1), tasks, indexToDelete };
}
```
</details>
<details>
<summary><b>Problem 2: Using <code>Partial<T></code> with <code>Object.assign(target, patch)</code></b></summary>

### The Problem
Using `Partial<T>` with `Object.assign(target, patch)` performs an absolute assignment (completely overwriting the old value with the new one). In inventory or financial accounting systems, running balances require relative updates (adding or subtracting a quantity delta, e.g., selling 10 items or restocking 50 items) rather than blindly replacing the balance.

### The Solution
Design a hybrid domain patch interface (`InventoryPatch`) that updates descriptive text fields absolutely while handling numeric quantities as relative deltas (`stockChange`).
```
interface InventoryPatch {
  name?: string;
  category?: string;
  stockChange?: number; // Positive to add, negative to reduce
}

function updateInventoryItem(
  products: Product[],
  productId: number,
  patch: InventoryPatch
): ApiResponse<Product undefined |> {
  const productToUpdate = products.find((product) => product.id === productId);

  if (!productToUpdate) {
    return { success: false, message: "Product not found", data: undefined };
  }

  if (patch.name !== undefined) productToUpdate.name = patch.name;
  if (patch.category !== undefined) productToUpdate.category = patch.category;
  if (patch.stockChange !== undefined) productToUpdate.stock += patch.stockChange;

  return { success: true, message: "Stock updated successfully", data: productToUpdate };
}
```
</details>

