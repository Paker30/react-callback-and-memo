# react-callback-and-memo

My simple collection of example to understand how `useCallback`, `useMemo` and `memo` work 🐞

## Description

In this scenario `Header` is re-rendered each time `App`'s `count` state changes, also `Header` has a property: `configuration`(which is an object) each time `Header` is re-rendered the message inside this hook

```jsx
useEffect(() => {
        console.log('Header useEffect: "configuration" has changed');
    }, [configuration]);
```

is going to be printed 🥲

Reason is `configuration` is an object so its reference will be different each time `Header` is re-rendered.

### Avoid `useEffect` triggering between re-renders

In order to avoid trigger `useEffect` between re-renders we need to keep the same references, in order to do it we memoize `configuration`

```jsx
const configuration = {
      id: '1',
      name: 'default configuration'
    };

const memoizedConfiguration = useMemo(() => ({...configuration}), []);
```

and instead of passing `configuration` we switch to `memoizedConfiguration`

```jsx
<Header configuration={memoizedConfiguration}/>
```
