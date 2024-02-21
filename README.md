# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


---

Modular CMS PoC project based on a mixture of ideas from HTMX and Rock RMS.

There are three ways that dynamic "blocks" or "modules" can be uploaded to a page via CMS (in no particular order):
1. Load in the block data via JSON.
    - This requires the most dynamicism from the server because every block must be able to be represented
    with the JSON.
    - The data for blocks would have to be stored somewhere
        - Probably in the database as well, or in file system
    - This can be problematic when you want the blocks to communicate with the database.
        - Populate data with models from API response.
        - Populate functions/actions with API endpoint URLs(?)
            - This could become very convulated after a while
        - Blocks might end up looking very very similar to one another.
        - You can pass this information through to the client and they parse it to create HTML
            - Or you can have the server parse through this data before letting it go to the client.
                - This would probably make it more like HTMX, but thats okay.

2. Load in the blocks through dynamic imports.
    - This requires either the server components to be exposed to the client directly(through a CDN perhaps), or for the server to fetch components dynamically and consume memory.
    - This method can consume a lot of memory on the server if there are a lot of blocks on the page.
        - It also means that each block is sorta the same generic which is convenient.
        - The dynamics of it mean you can't tell what is being imported in compile time.
            - It would only be done during runtime; however, you'd know from your API because it'll prompt
             the server with the blocks to pull.

3. Load in the blocks through HTML partial endpoints
    - This requires the server components to be exposed as HTML partials that the client can request.
    - You can create the endpoint at runtime and that's the same as not knowing it ahead of time, but you'll only be loading in the block you want.
    - This is technically slow because you're doing fetch requests for every block on the page and you can't batch them.
