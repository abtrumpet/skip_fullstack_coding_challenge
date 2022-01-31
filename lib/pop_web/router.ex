defmodule PopWeb.Router do
  use PopWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PopWeb do
    pipe_through :api
    get("/temperature", Controllers.TemperatureController, :index)
    post("/temperature", Controllers.TemperatureController, :create)
  end

  scope "/", PopWeb do
    pipe_through(:browser)

    get("/*path", PageController, :index)
  end
end
