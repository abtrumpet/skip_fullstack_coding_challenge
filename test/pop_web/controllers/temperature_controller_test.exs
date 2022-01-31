defmodule PopWeb.Controllers.TemperatureControllerTest do
  use PopWeb.ConnCase, async: true
  alias Pop.Servers.Fahrenheit

  describe "index" do
    setup [:reset]

    test "returns stuff", %{conn: conn} do
      Fahrenheit.put_temp(Fahrenheit, 35)
      Fahrenheit.put_temp(Fahrenheit, 149.8)

      resp =
        conn
        |> get("/api/temperature")
        |> json_response(200)

      assert resp == %{"temps" => [150, 35]}
    end

    defp reset(_) do
      Fahrenheit.reset(Fahrenheit)
    end
  end

  describe "create" do
    setup [:reset]

    test "creates temp", %{conn: conn} do
      resp =
        conn
        |> post("/api/temperature", %{"temp" => 37})
        |> json_response(200)

      assert Fahrenheit.get_temps(Fahrenheit) == [37]
    end
  end
end
