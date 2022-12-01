# 🖍 uberschrift

**Magically accessible and SEO friendly headings (`h1` — `h6`)**

## ⚛️ react

### usage

```ts
import { Hx, HxBoundary } from "@uberschrift/react";
```

### example

```tsx
<Hx>Outside of the top level: this will be an h1</Hx>

<HxBoundary>
  <Hx>Within the top level: this will be an h2</Hx>

  <HxBoundary>
    <Hx>Within the 2nd level: this will be an h3</Hx>

    <HxBoundary>
      <Hx>Within the 3rd level: this will be an h4</Hx>
    </HxBoundary>

    <Hx>Again within the 2nd level: this will be an h3</Hx>
  </HxBoundary>
</HxBoundary>
```

renders as:

```html
<h1>Outside of the top level: this will be an h1</h1>
<h2>Within the top level: this will be an h2</h2>
<h3>Within the 2nd level: this will be an h3</h3>
<h4>Within the 3rd level: this will be an h4</h4>
<h3>Again within the 2nd level: this will be an h3</h3>
```
