defmodule PopWeb.Controllers.TemperatureController do
  use PopWeb, :controller
  alias Pop.Servers.Fahrenheit

  def index(conn, _) do
    Fahrenheit.put_temp(Fahrenheit, 35)
    Fahrenheit.put_temp(Fahrenheit, 451.34)
    conn
    |> json(%{
      temps: Fahrenheit.get_temps(Fahrenheit)
    })
  end
end
