# README

## Project Structure

The project structure is setup by having a singular application page, with each different section being its own component/element.
This makes the routing very straightforward and easy to understand, and additionally enabled a more modular develop process.

## Major Components

The major components are all located in the /components directory. As you can see each section of the website, the different pages, is separated into its own Typscript element file. This means that the final App file simply compiles these elements and makes development and debugging very straightforward and digestible.
Additionally, there are several elements within these pages that are abstracted into their own component file to avoid needing to rewrite the same code over and over.

## Frameworks Used

The primary frameworks/langugaes used in the prototype are as follows:

- React (Vite)
- Typescript
- Tailwind CSS

## Getting Started

1. Go into the `/better_craigslist` directory
2. Run `npm install`
3. Run `npm run dev`
