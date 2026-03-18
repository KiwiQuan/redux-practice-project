# 🧠 Redux Toolkit Dashboard Project – TODO Plan

## 🟢 Phase 1: Project Setup (You’re almost done)

- [x] Create Vite + React project
- [x] Install Redux Toolkit + React Redux
- [x] Install Tailwind v4
- [x] Install shadcn/ui
- [x] Configure path alias (`@/`)

---

## 🟡 Phase 2: Core Architecture (IMPORTANT)

- [x] Create `src/app/store.js`
- [x] Wrap `<App />` with Redux `<Provider>`
- [x] Create `features/` folder
- [x] Decide first feature (ex: `users`)

### Folder structure goal:

```
src/
  app/
    store.js
  features/
    users/
      usersSlice.js
      Users.jsx
```

---

## 🔵 Phase 3: First Redux Slice (Practice core concepts)

- [x] Create `usersSlice.js`
- [x] Add:
  - [x] `initialState`
  - [x] basic reducers (add/remove user)

- [x] Export:
  - [x] actions
  - [x] reducer

- [x] Add slice to store

---

## 🟣 Phase 4: Connect Redux to UI

- [ ] Use `useSelector` to read state
- [ ] Use `useDispatch` to update state
- [ ] Display users in UI
- [ ] Add button (shadcn) to dispatch actions

---

## 🔴 Phase 5: Async Data (KEY PART 🔥)

- [ ] Create `createAsyncThunk` (fetch users API)
- [ ] Add `extraReducers`:
  - [ ] pending → loading = true
  - [ ] fulfilled → store data
  - [ ] rejected → error state

- [ ] Show:
  - [ ] loading spinner
  - [ ] error message

👉 This is the **most important Redux skill** ()

---

## 🟠 Phase 6: Build Dashboard UI

- [ ] Create layout:
  - [ ] Sidebar
  - [ ] Header
  - [ ] Main content area

- [ ] Use shadcn components:
  - [ ] Button
  - [ ] Card
  - [ ] Table

---

## 🟡 Phase 7: Display API Data

- [ ] Show users in a table
- [ ] Add:
  - [ ] loading state UI
  - [ ] empty state UI

- [ ] Add refresh button

---

## 🔵 Phase 8: Add More Features (scale like real app)

- [ ] Create new slices:
  - [ ] posts
  - [ ] analytics

- [ ] Each feature has:
  - [ ] its own slice
  - [ ] its own component

👉 This follows scalable dashboard patterns ()

---

## 🟣 Phase 9: UI Enhancements

- [ ] Add:
  - [ ] charts (optional)
  - [ ] filters/search
  - [ ] pagination

- [ ] Improve layout spacing + responsiveness

---

## 🔴 Phase 10: Polish & Best Practices

- [ ] Clean up code structure
- [ ] Split components (small reusable pieces)
- [ ] Add loading skeletons (shadcn)
- [ ] Add error boundaries (optional)

---

## 🟢 Phase 11: Bonus (Level Up 🚀)

- [ ] Add routing (React Router)
- [ ] Add dark mode
- [ ] Persist state (localStorage)
- [ ] Try RTK Query (advanced)

---

## 🧠 Final Goal

You should end up with:

- Global state (Redux Toolkit)
- Async API fetching (createAsyncThunk)
- Clean feature-based structure
- Styled UI (shadcn + Tailwind)
- Scalable architecture

---

## 🔥 Mental Model Reminder

```
UI → dispatch(action)
        ↓
   reducer updates state
        ↓
   UI re-renders
```

---

## ✅ MVP Definition (STOP HERE FIRST)

Before adding extras, make sure you can:

- [ ] Fetch API data
- [ ] Store it in Redux
- [ ] Display it in UI
- [ ] Show loading + error states

👉 If you can do this, you understand Redux Toolkit.
