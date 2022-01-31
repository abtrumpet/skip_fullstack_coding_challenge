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

  describe "reset/1" do
    setup [:reset]

    test "clears values" do
      Fahrenheit.put_temp(Fahrenheit, 2)
      assert Fahrenheit.get_temps(Fahrenheit) == [2]
      Fahrenheit.reset(Fahrenheit)
      assert Fahrenheit.get_temps(Fahrenheit) == []
    end
    
    defp reset(_) do
      Fahrenheit.reset(Fahrenheit)
    end
  end

  describe "get_temps/1" do
    setup [:reset]

    test "returns init list of temperatures" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
    end

    test "returns list of temperatures" do
      Fahrenheit.put_temp(Fahrenheit, 1.0)
      Fahrenheit.put_temp(Fahrenheit, 2)
      assert Fahrenheit.get_temps(Fahrenheit) == [2, 1]
    end

    defp reset(_) do
      Fahrenheit.reset(Fahrenheit)
    end
  end

  describe "put_temp/2" do
    setup [:reset]

    test "inserts temp" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1)
      assert Fahrenheit.get_temps(Fahrenheit) == [1]
    end

    test "converts temp to int before insert" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1.0)
      assert Fahrenheit.get_temps(Fahrenheit) == [1]
    end

    test "does not duplicate temp" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1)
      Fahrenheit.put_temp(Fahrenheit, 1)
      assert Fahrenheit.get_temps(Fahrenheit) == [1]
    end

    test "does not duplicate temp when given float" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1)
      Fahrenheit.put_temp(Fahrenheit, 1.0)
      assert Fahrenheit.get_temps(Fahrenheit) == [1]
    end

    test "rounds temp down" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1.4)
      assert Fahrenheit.get_temps(Fahrenheit) == [1]
    end

    test "rounds temp up" do
      assert Fahrenheit.get_temps(Fahrenheit) == []
      Fahrenheit.put_temp(Fahrenheit, 1.8)
      assert Fahrenheit.get_temps(Fahrenheit) == [2]
    end

    defp reset(_) do
      Fahrenheit.reset(Fahrenheit)
    end
  end
end
