# Block-CMS

The goal of this repository was to create a CMS of sorts where the `Blocks` are components and you can place them in different sections across different layouts.

A `Page` would have a single `Layout`.
A `Page` could have 0 or many  `Blocks`
A `Block` has a `Zone` which determines where it's located on the `Layout`.

I chose to use HTMX for this because it allowed me to return partial components from the backend.
This dynamicism meant that as long as there exists an endpoint with the component, the client can fetch it with HTMX.

## Improvements
There are improvements that would be great to have:
- Layouts being defined in the database
- Zones being defined in the database
- Caching HTMX requests for blocks
- The ability to create Blocks in the UI

## Motiviation
The inspiration for this project was [Rock RMS](https://github.com/SparkDevNetwork/Rock).
Rock RMS is similar to Planning Center for churches, but it is hosted on Github for people to use somewhat freely.
Rock RMS is built with ASP.NET and is currently converting older Web Forms blocks into Vue components that get rendered client-side.

This project is able to render its block components server-side (or client-side if you wish) because Astro is a JavaScript/Typescript framework.
I'm using Node as the server adapter, but you could choose Deno or Bun if you prefer. 
The advantage is that you get SSR over CSR.
