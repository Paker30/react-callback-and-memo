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


### Avoiding re-renders when `count` state changes

In order to avoid `Header` to re-render each time `count` changes its value we need to memoize `Header`

```jsx
const MemoizeHeader = React.memo(Header);
```

and use it instead of `Header`

```jsx
<MemoizeHeader configuration={memoizedConfiguration}/>
```

>[!Note]
>Everything works because `Header`'s object property is also memoized, if you don't memoize it, you'll be back to starting point: `Header` is re-rendered and `useEffect` is triggered

### Breaking Header ☠️

We wanted to have a better message at our header so we've added a children, it looks harmless but... lets check browser console: re-render message is back 🤦
