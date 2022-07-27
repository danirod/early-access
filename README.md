# early.makigas.es

This is the web application that powers [early.makigas.es](https://early.makigas.es). This is an index that shows the currently available content on early access, that can be seen before it is available on YouTube.

The content will still be free, but people who support the project will get access earlier, even though this may mean that they get access to something not fully baked, that may have sometimes editing errors or that might change.

## Technical aspects

makigas-early is a SvelteKit web application. Despite being a single page, it is important that this website is rendered server-side for SEO purposes, and SvelteKit does this for free. Additionally, in order to avoid fighting with CORS, at the moment it is more useful to do things via endpoints rather than allowing fetch() to contact the internet.

makigas-early consumes data from the makigas.es website in order to track which videos have been marked as "draft". The data presented in early.makigas.es comes from this endpoint.

## How to develop

Requirements:

- NodeJS 18.
- npm.

Run `npm i` and use `npm run dev` to launch the development server.

## How to test

Run `npm run test` to test with Playwright.

## How to build

Since this is going to run inside a Docker container, I am using the Node adapter. Run `npm run build` to compile the application. To launch the application use `node build/index` or simply `node build`.

Use `docker build` to test the container. The container should expose the port 3000, use `-p 3000:3000` to access it from the outside.

## Contributing

PRs to fix bugs are welcome. Or just point them out as an issue and I'll have them fixed whenever I can.

For new features or dramatical changes, please send an issue beforehand so that I can propose whether I agree or not. While this project is developed on the open, I am still its owner and I get to choose how I want the site to behave.

## License

GNU GPL 3.0. I know this is viral, that is the point.
