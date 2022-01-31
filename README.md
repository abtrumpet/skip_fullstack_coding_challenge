# Pop

## To start my version:
You need `asdf-vm` installed on your machine to guarantee you're using the correct versions of Elixir / Erlang / NodeJS.

Once asdf is installed, run the following commands:

From top-level dir:
`asdf install`

From `/assets/` dir:
`yarn run build`

To run, run `mix phx.server`


Go to `localhost:4000` and you should see the React app. The API is at `localhost:4000/api/temperature`.

To test:
(backend) From top-level project folder: `mix test`
(frontend) From `/assets` folder: `yarn test`

This is a coding exercise to test your understanding of two parts of our current tech stack. These parts are React and Elixir/Phoenix. In the Javascript code, React, ReactRedux, ReactRouter have already been included. For CSS, we use [`TailwindCSS`](https://tailwindcss.com/), so we'd appreciate it if you attempted to use [`TailwindCSS`](https://tailwindcss.com/) for your styling. You do not have to use Redux or ReactRouter, but can if you want. For server code only Phoenix and Phoenix.HTML have been added.

## To get the Phoenix server started

- Install dependencies with `mix deps.get`
- Change to the assets directory
- Install Node.js dependencies with `yarn`
- `cd ..` to the root of the Elixir app
- Start Phoenix endpoint with `mix phx.server`

## There are two parts of this task.

1. Build an endpoint that returns a list of fahrenheit temperatures. There is already a prepared controller at ./lib/pop_web/controllers/temperature.ex.
2. Use React to display the fahrenheit temperatures along with the corresponding celsius and kelvin representations in a table. There is a **Conversion** component placeholder in assets/js/conversion.js.

## Tests

- Elixir tests will be run with `mix test`
- React tests will be run with `yarn run jest` from the `assets` directory

Once you've started the server with `mix phx.server` then you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Learn more

- Official website: https://www.phoenixframework.org/
- Guides: https://hexdocs.pm/phoenix/overview.html
- Docs: https://hexdocs.pm/phoenix
- Forum: https://elixirforum.com/c/phoenix-forum
- Source: https://github.com/phoenixframework/phoenix
