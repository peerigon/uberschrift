# `<Hx>🧢 uberschrift</Hx>`

**Magic heading levels for React**

---

[![npm version badge](https://img.shields.io/npm/v/uberschrift?style=flat-square)](https://npmjs.com/package/uberschrift)<br />
[![dependency badge](https://img.shields.io/librariesio/release/npm/uberschrift?style=flat-square)](https://libraries.io/npm/uberschrift)<br />
[![Issue badge](https://img.shields.io/github/issues/peerigon/uberschrift?style=flat-square)](https://github.com/peerigon/uberschrift/issues)<br />
[![CI badge](https://github.com/peerigon/uberschrift/actions/workflows/ci.yml/badge.svg)](https://github.com/peerigon/uberschrift/actions/workflows/pull_request.yml)

---

## [📖 Full Documentation](https://example.com)

## 🛠️ Usage

```sh
npm install uberschrift
```

`page.tsx`:

```tsx
import { Hx, HxBoundary } from "uberschrift";

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

---

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
