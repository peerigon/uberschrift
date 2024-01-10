# 🧢 uberschrift

Magic heading levels for React:

```tsx
<HxBoundary>
	<Hx>I want to be an h2</Hx>

	<HxBoundary>
		<Hx>I will be an h3</Hx>
	</HxBoundary>
</HxBoundary>
```

🪄 ✨

```html
<h2>I want to be an h2</h2>
<h3>I will be an h3</h3>
```

## 🤸 Motivation

### 👀 Why chosing the right heading level (h1, h2, …) matters

Grouping text sections underneath headings adds a logical hierarchy to the contents of a page, contributing to both accessibility and search engine optimization (SEO). Heading elements, ranging from `<h1>` to `<h6>`, represent different levels of importance and organization.

Properly nesting these elements ensures that screen readers and other assistive technologies can interpret and convey the content's structure to users with visual impairments, enhancing accessibility. Additionally, search engines rely on heading tags to understand the content hierarchy and relevance, influencing how they index and rank the page.

**Consistent and well-ordered heading levels not only improve the overall readability of the document for both users and search engines but also contribute to a more efficient and user-friendly browsing experience.**

Here's an example of a DOM structure with incorrect heading order:

```
<h1>This is the page's main heading</h1>

<h2>This is also fine</h2>

<h4>⚠️ UH-OH! This should have been preceded by an h3!</h4>
```

### 🤷 Why is dealing with heading levels difficult?

In React projects, component encapsulation often makes chosing the right heading level within these components hard. They are often nested in an unforeseeable way, so the heading you chose to be an `<h3>` could now be used outside of the boundary of an `<h2>`, messing up the order.

### 🧢 What does uberschrift do?

uberschrift provides you with two components: one we call `<Hx>` (as in "heading level x") that you should use for your headings; and one `<HxBoundary>` that you use to structure your document. Within these boundaries, `<Hx>` always choses the correct heading level. If you need to structure your document one level deeper, you wrap your component in a new `<HxBoundary>`.

[We're borrowing this idea from Tenon-UI](https://www.tenon-ui.info/headings) ❤️.

## Usage

```sh
npm install @uberschrift
```

### Example

`page.tsx`:

```tsx
import { Hx, HxBoundary } from "@uberschrift";

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

## FAQ

### How does it handle heading elements nested below the 6th level?

The [HTML Spec](https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) only allows h1 through h6 as elements and for most documents this should be more than enough.

That being said: if you find yourself nesting deeper, you can make that possible by leveraging WAI-ARIA attributes, e.g.: `<div role="heading" aria-level="7">…</h7>`. Uberschrift does that for you.

If you want to style these elements, you can do it like this:

```css
[aria-level="7"] {
	font-weight: bold;
}
```

### How does it work under the hood?

It's a simple case of [React Context](https://react.dev/learn/passing-data-deeply-with-context): `HxBoundary` is merely a nestable context provider, that increments the heading level.
