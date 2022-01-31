defmodule PopWeb.Controllers.TemperatureController do
  use PopWeb, :controller
  alias Pop.Servers.Fahrenheit

  def index(conn, _) do
    conn
    |> json(%{
      temps: Fahrenheit.get_temps(Fahrenheit)
    })
  end

  def create(conn, %{"temp" => temp}) do
    Fahrenheit.put_temp(Fahrenheit, temp)
    
    conn
    |> json(%{
      temps: Fahrenheit.get_temps(Fahrenheit)
    })
  end
end
