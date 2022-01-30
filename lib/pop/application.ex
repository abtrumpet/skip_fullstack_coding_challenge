defmodule Pop.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application
  alias Pop.Servers.Fahrenheit

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      PopWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Pop.PubSub},
      # Start the Endpoint (http/https)
      PopWeb.Endpoint,
      # Start a worker by calling: Pop.Worker.start_link(arg)
      # {Pop.Worker, arg}
      Fahrenheit 
      # Our "Fahrenheit" server
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Pop.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    PopWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
