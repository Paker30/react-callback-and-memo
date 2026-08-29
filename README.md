# react-callback-and-memo

My simple collection of example to understand how `useCallback`, `useMemo` and `memo` work 🐞

## Start project

Install modules

```bash
pnpm install
```

Start dev server

```bash
pnpm run dev
```

## Branch order

1. component-rerender-base
2. component-no-rerendered
3. component-rerender-object-property
4. component-rerendered-object-property-useMemo
5. component-rerendered-due-to-children
6. component-no-rerended-with-children
7. closure

## Scenario: closure

In this branch I want to provide some examples of "stale closure" problem I can use to understand the issue.

### useCallback

```js
 const printConfiguration = useCallback(()  => {
        console.log('Current configuration:', configuration);
    }, []);
```

Like in `useEffect` hook, dependency array is empty so `printConfiguration` won't be updated when state changes which means `configuration` will remains the same, it doesn't matter `configuration` is updated, `printConfiguration` will print `undefined`.

### Refs

As in `useCallback` example, because dependency array is empty, it doesn't matter how `configuration` changes, it prints `undefined`.
