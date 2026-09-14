Build a highly visual, experimental coffee shop website called **ROAST & RITUAL**.

The website should function as both:

1. A visually impressive creative frontend portfolio project.
2. A realistic coffee ordering prototype with a functional client-side cart.

The website should have **no backend**. Product data can be stored locally and cart functionality can use React state.

The overall experience should feel closer to an **award-winning creative website** than a conventional café website.

---

# 1. BRAND CONCEPT

## Brand

**ROAST & RITUAL**

## Brand idea

Coffee is not simply a drink.

It is a ritual.

The brand should feel:

- contemporary
- artistic
- confident
- slightly experimental
- premium without feeling corporate
- warm without becoming predictable
- editorial rather than “traditional café”

The visual identity should communicate the idea of **slowing down, paying attention and enjoying the ritual of coffee**.

Avoid generic coffee-shop branding.

---

# 2. LOGO & VISUAL IDENTITY

Create a memorable visual identity for ROAST & RITUAL.

### Wordmark

Use:

**ROAST & RITUAL**

Create an elegant but distinctive wordmark.

### Symbol

Create a simple standalone brand symbol inspired by:

- a coffee cup
- a coffee bean
- a circular ritual
- repetition / cycles

Combine these ideas into a simple abstract mark.

The symbol should be recognizable without the wordmark.

Do not use a generic coffee cup icon.

The symbol should work as:

- favicon
- navigation logo
- loading animation
- cart icon treatment
- footer mark
- mobile brand mark

If appropriate, create the symbol using SVG/CSS so it remains crisp at every size.

---

# 3. COLOR SYSTEM

Use this exact core palette.

### Primary colors

**Espresso**  
`#241510`

Deep roasted brown.

Use for major dark backgrounds and visual sections.

**Coffee**  
`#4A2C20`

Rich coffee brown.

Use for secondary surfaces, buttons and supporting elements.

**Cream**  
`#F4EBDD`

Warm paper-like background.

This should be the primary light background.

**Caramel**  
`#B8753D`

Warm roasted caramel.

Use for CTAs, highlights and interactive details.

**Foam**  
`#E5D1B5`

Soft latte tone.

Use for secondary backgrounds, cards and subtle visual layering.

**Ink**  
`#171311`

Near-black.

Use primarily for typography and high-contrast elements.

### Editorial accent

**Muted Chartreuse**  
`#C6D36A`

Use this very selectively.

This is the unexpected contemporary accent that prevents the brand from becoming another brown coffee website.

Do not flood the interface with chartreuse.

Use it for:

- selected states
- small labels
- special product details
- occasional decorative elements
- interactive highlights

---

# 4. COLOR BEHAVIOR

The overall brand palette should remain consistent, but individual coffee products can influence their surrounding visual treatment.

For example:

### Espresso

Deep espresso + cream + caramel

### Cappuccino

Cream + foam + coffee brown

### Mocha

Dark coffee + caramel

### Cold Brew

Near-black + cream

### Iced Latte

Cream + foam + subtle caramel

### Specialty seasonal coffee

Cream + selective chartreuse or another restrained product-specific accent

The product should never feel disconnected from the brand.

The coffee remains the visual hero.

---

# 5. TYPOGRAPHY

Use a strong editorial typography system.

Pair:

### Display font

A distinctive expressive serif.

Use it for:

- hero headlines
- coffee names
- large editorial statements
- section titles

### UI font

A clean modern sans-serif.

Use it for:

- navigation
- buttons
- prices
- descriptions
- product metadata
- cart interface

Use typography dramatically.

Some headlines can be extremely large.

Use small uppercase labels and editorial metadata around large typography.

Avoid generic SaaS typography.

---

# 6. HERO

The hero should immediately communicate the brand.

Navigation:

**ROAST & RITUAL**

MENU  
STORY  
ORDER

Hero content:

Large editorial headline:

**Coffee worth slowing down for.**

Supporting copy:

A concise statement about coffee as a ritual.

Primary CTA:

**EXPLORE THE MENU**

Secondary CTA:

**ORDER A COFFEE**

### Hero composition

Place a large isolated realistic coffee product prominently in the hero.

The product should feel almost like an editorial object floating within the composition.

Use:

- realistic lighting
- soft shadow
- subtle steam
- floating particles
- abstract circular forms
- coffee-inspired textures
- restrained decorative elements

Do not turn the hero into visual clutter.

---

# 7. HERO MOTION

Motion is a major part of the experience.

Use **Framer Motion**.

The hero should feel cinematic.

On initial load:

1. Brand mark appears.
2. Navigation settles into position.
3. Headline reveals progressively.
4. Supporting copy follows.
5. Coffee product enters with a deliberate movement.
6. Decorative elements settle subtly.

Avoid generic fade-in-everything animations.

Motion should have physical character.

### Cursor interaction

On desktop, allow the coffee product to respond subtly to cursor movement.

Use restrained:

- rotation
- translation
- scale

The product should feel slightly physical.

---

# 8. INTERACTIVE COFFEE SHOWCASE

This should be the centerpiece of the website.

Create a large interactive section where a coffee product occupies the center of the viewport.

Display:

Coffee image

Coffee name

Short description

Tasting notes

Price

CTA

Example:

**ESPRESSO**

Bold. Dark. Concentrated.

Rich crema, dark chocolate and roasted almond.

`₦3,500`

**ORDER THIS COFFEE**

Surround the central coffee with subtle navigation elements or product indicators.

Users should be able to move between coffees.

---

# 9. COFFEE TRANSITIONS

When the user selects another coffee:

Do not simply replace the image.

Create a visual transition.

The current product should:

- move away
- scale
- rotate slightly
- fade

The new product should:

- enter from a different direction
- scale into position
- settle naturally

At the same time:

- coffee name changes
- description changes
- tasting notes change
- price changes
- background treatment changes
- product accent changes

Use:

`AnimatePresence`

and Framer Motion layout animations.

The transition should feel like changing scenes in an editorial coffee film.

---

# 10. COFFEE PRODUCTS

Create realistic product data for:

1. Espresso
2. Americano
3. Cappuccino
4. Latte
5. Flat White
6. Mocha
7. Cold Brew
8. Caramel Macchiato
9. Iced Latte

Every coffee should have:

- name
- category
- description
- ingredients
- tasting notes
- strength
- temperature
- available sizes
- price
- image
- featured status

Use realistic Nigerian pricing.

---

# 11. COFFEE IMAGERY

Coffee images must be:

- realistic
- high quality
- editorial
- clearly visible
- isolated from their original background
- suitable for transparent/background-free presentation

Prioritize:

- realistic crema
- milk foam texture
- ceramic/glass details
- believable lighting
- realistic shadows
- rich coffee texture

Avoid:

- cartoon illustrations
- generic stock-photo compositions
- low-quality AI-looking coffee
- rectangular product photos dominating the UI

The coffee should behave visually like a product object.

---

# 12. MENU

Create an interactive menu section.

Categories:

**ALL**

**HOT**

**ICED**

**ESPRESSO**

**SPECIALTY**

Display coffee products as a visually interesting editorial grid.

Each product should contain:

- isolated coffee image
- coffee name
- description
- tasting notes
- price
- temperature indicator
- Add to Order button

Use animated filtering.

When the user changes categories, products should transition smoothly using Framer Motion.

Use staggered entrance animations.

Do not abruptly remove and add cards.

---

# 13. PRODUCT DETAIL EXPERIENCE

Clicking a coffee should open a rich product detail view.

This can be:

- modal
- expanding card
- side panel
- full-screen transition

Choose whichever creates the strongest visual experience.

Display:

Large coffee image

Coffee name

Description

Ingredients

Tasting notes

Strength

Size

Temperature

Quantity

Price

Add to Order

Example:

**LATTE**

Espresso softened with silky steamed milk.

Tasting notes:

MILK CHOCOLATE  
CARAMEL  
HAZELNUT

Strength:

●●○○○

Size:

Small  
Medium  
Large

Temperature:

Hot  
Iced

Make customization feel like interacting with a product, not completing a form.

---

# 14. CART

Create a functional client-side cart.

Users should be able to:

- add products
- remove products
- change quantity
- select size
- select temperature
- see subtotal
- see total
- clear cart

Use an animated cart drawer.

When a product is added:

- animate the cart icon
- update the cart count
- show a subtle product confirmation
- optionally show a small product preview

The cart should visually belong to the brand.

Do not create actual payment processing.

The final checkout button can show a demo confirmation state.

Example:

**ORDER RECEIVED**

Your coffee ritual has been queued.

This is a frontend prototype, so no real order should be submitted.

---

# 15. BRAND STORY

Create a short editorial section around the concept:

**Coffee is a pause.**

Explain that ROAST & RITUAL sees coffee as something worth experiencing rather than rushing through.

Keep the copy concise.

Use:

- oversized typography
- subtle coffee textures
- large negative space
- editorial layout
- restrained animation

Do not create a long About page.

---

# 16. VISUAL DETAILS

Use subtle textures inspired by:

- coffee grounds
- paper
- roasting
- ceramic
- steam
- coffee rings
- cream
- wood

Possible visual elements:

- faint grain
- thin editorial lines
- circular forms
- oversized numbers
- small uppercase labels
- subtle gradients
- coffee-ring shapes
- organic forms

Use these sparingly.

The interface should feel **designed**, not decorated.

---

# 17. MOTION SYSTEM

Use Framer Motion throughout the website.

### Micro interactions

Buttons:

- subtle scale
- hover movement
- press state

Product cards:

- image movement
- slight rotation
- subtle depth

Navigation:

- animated hover indicators

### Section transitions

Use:

- fade
- slide
- scale
- stagger
- parallax

### Product motion

Hot coffee:

Subtle animated steam.

Coffee beans:

Occasional slow floating movement.

Coffee product:

Subtle rotation and cursor response.

Shadows:

Move slightly with the product where appropriate.

### Scroll

Use smooth scrolling.

If appropriate, use **Lenis** for smooth scrolling.

Scroll should control:

- typography movement
- product scale
- image movement
- section transitions
- subtle parallax

Do not overuse parallax.

Motion must support hierarchy.

---

# 18. CUSTOM CURSOR

Create a subtle custom cursor experience on desktop.

The cursor can respond to:

- buttons
- coffee products
- interactive areas

For example, when hovering over a coffee:

**VIEW**

can appear beside the cursor.

Keep it subtle.

Do not compromise usability.

Disable or simplify custom cursor behavior on touch devices.

---

# 19. RESPONSIVE DESIGN

The website must be fully responsive.

## Desktop

Use:

- large editorial layouts
- large coffee imagery
- asymmetric compositions
- strong typography
- sophisticated motion

## Tablet

Recompose layouts rather than simply scaling them.

## Mobile

Do not simply shrink the desktop design.

Create intentional mobile compositions.

Use:

- stacked layouts
- horizontal coffee selectors
- large but readable typography
- thumb-friendly controls
- optimized product images
- mobile cart access
- simplified motion where necessary

The mobile website should still feel like ROAST & RITUAL.

---

# 20. ACCESSIBILITY

Use:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible buttons
- descriptive alt text
- sufficient contrast
- reduced-motion support
- appropriate ARIA labels

Respect:

`prefers-reduced-motion`

When reduced motion is enabled, replace complex transitions with simple opacity and position changes.

---

# 21. TECHNICAL STACK

Use:

**React**

**Vite**

**Framer Motion**

**CSS / CSS Modules**

**Lucide React** where icons are necessary.

Optionally use:

**Lenis** for smooth scrolling.

Use React state for cart functionality.

No:

- backend
- database
- authentication
- payment integration
- CMS
- unnecessary APIs

Keep dependencies minimal.

---

# 22. COMPONENT ARCHITECTURE

Create reusable components.

Suggested structure:

```text
src/
  components/
    Navbar
    Hero
    CoffeeShowcase
    CoffeeSelector
    CoffeeCard
    CoffeeDetail
    Menu
    CategoryFilter
    CartDrawer
    CartItem
    BrandStory
    Footer
    CustomCursor

  data/
    coffees.js

  hooks/
    useCart.js

  styles/
    global.css
```

Keep product data separate from UI components.

Avoid duplicating product markup.

Build reusable components that can support additional coffees later.

---

# 23. PERFORMANCE

Despite the visual complexity, keep the website performant.

Optimize:

- image sizes
- lazy loading
- animation frequency
- unnecessary re-renders
- DOM complexity

Do not continuously animate large numbers of elements.

Prefer transform and opacity animations.

Avoid expensive animations that cause layout shifts.

---

# 24. NAVIGATION

Desktop navigation:

**ROAST & RITUAL**

MENU  
STORY  
ORDER

The navigation should remain minimal.

As the user scrolls, it can transition from transparent/overlay navigation to a more solid navigation treatment.

Mobile should use a clean menu interaction.

---

# 25. LOADING EXPERIENCE

Create a short branded loading state.

Use the ROAST & RITUAL symbol.

Potential animation:

The circular symbol gradually completes like a brewing cycle.

Then transition into the hero.

Keep loading short.

Do not make users wait unnecessarily.

---

# 26. FOOTER

Create a strong visual ending.

Include:

ROAST & RITUAL logo

**Coffee worth slowing down for.**

MENU

STORY

ORDER

Opening hours

Location

Instagram

Contact

Use the brand symbol as part of the closing composition.

The footer should feel like the final frame of the experience.

---

# 27. WHAT NOT TO BUILD

Do not create:

- generic restaurant UI
- generic SaaS cards
- excessive rounded cards
- stock coffee illustrations
- excessive brown gradients
- random animations
- fake statistics
- fake testimonials
- unnecessary login
- loyalty program
- reservations
- blog
- backend
- database
- payment system

Do not add features just to make the website appear larger.

---

# 28. DESIGN PRINCIPLES

Prioritize:

**ART DIRECTION**

**TYPOGRAPHY**

**COFFEE PHOTOGRAPHY**

**MOTION**

**PRODUCT INTERACTION**

**ORDERING FLOW**

**RESPONSIVE COMPOSITION**

The visual identity, photography, typography and motion should feel like one coherent system.

The user should understand the website within seconds.

The user should be able to discover a coffee quickly.

The user should be able to customize it easily.

The user should be able to add it to their order without friction.

The experimental visuals should enhance the experience rather than interfere with it.

---

# 29. FINAL QUALITY BAR

Before declaring the project complete, review it from three perspectives.

### BRAND DESIGNER

Does ROAST & RITUAL have a recognizable identity?

Is the logo memorable?

Does the palette feel distinctive?

Does the typography feel intentional?

Do the coffee images feel premium?

Does the website avoid looking like a generic coffee template?

### PRODUCT DESIGNER

Can a first-time visitor understand the experience immediately?

Can they discover coffee?

Can they explore products?

Can they customize a coffee?

Can they add it to an order?

Does the motion help the experience?

### CREATIVE FRONTEND DEVELOPER

Are the animations smooth?

Are components reusable?

Is React state handled cleanly?

Is the code maintainable?

Is the site responsive?

Does the mobile experience feel intentionally designed?

Does it perform well?

Does the reduced-motion experience still work?

---

# FINAL CREATIVE DIRECTION

The finished website should feel like:

**A coffee brand imagined by an editorial art director, designed by a product designer, and built by a creative frontend developer.**

It should be visually bold enough to stand out in a design portfolio while remaining functional enough to demonstrate real frontend product thinking.

Do not optimize for the number of features.

Optimize for:

**Memorable brand → beautiful coffee → meaningful motion → effortless ordering.**