defmodule Pop.Servers.FahrenheitTest do
  use ExUnit.Case, async: true
  alias Pop.Servers.Fahrenheit

  describe "init/1" do
    test "returns empty list" do
      assert Fahrenheit.init(nil) == {
        :ok,
        []
      }
    end
  end

  describe "get_temps/1" do
    test "returns init list of temperatures" do
      {:ok, server} = Fahrenheit.start_link(nil) 
      assert Fahrenheit.get_temps(server) == []
    end

    test "returns list of temperatures" do
      {:ok, server} = Fahrenheit.start_link(nil)
      Fahrenheit.put_temp(server, 1.0)
      Fahrenheit.put_temp(server, 2)
      assert Fahrenheit.get_temps(server) == [2, 1]
    end
  end

  describe "put_temp/2" do
    test "inserts temp" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1)
      assert Fahrenheit.get_temps(server) == [1]
    end

    test "converts temp to int before insert" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1.0)
      assert Fahrenheit.get_temps(server) == [1]
    end

    test "does not duplicate temp" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1)
      Fahrenheit.put_temp(server, 1)
      assert Fahrenheit.get_temps(server) == [1]
    end

    test "does not duplicate temp when given float" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1)
      Fahrenheit.put_temp(server, 1.0)
      assert Fahrenheit.get_temps(server) == [1]
    end

    test "rounds temp down" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1.4)
      assert Fahrenheit.get_temps(server) == [1]
    end

    test "rounds temp up" do
      {:ok, server} = Fahrenheit.start_link(nil)
      assert Fahrenheit.get_temps(server) == []
      Fahrenheit.put_temp(server, 1.8)
      assert Fahrenheit.get_temps(server) == [2]
    end
  end
end
