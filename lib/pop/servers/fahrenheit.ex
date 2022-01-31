defmodule Pop.Servers.Fahrenheit do
  use GenServer

  @impl true
  def init(_) do
    {:ok, []}
  end

  @impl true
  def handle_call(:get_temps, _from, temps) do
    {:reply, temps, temps}
  end

  @impl true
  def handle_cast({:put_temp, temp}, temps) do
    if Enum.member?(temps, Kernel.round(temp)) do
      {:noreply, temps}
    else
      {:noreply, [Kernel.round(temp) | temps]}
    end
  end

  @impl true
` def handle_cast({:reset}, _temps) do
    {:noreply, []}
  end

  def start_link(_opts) do
    GenServer.start_link(__MODULE__, init(nil), name: __MODULE__)
  end

  def get_temps(server \\ __MODULE__) do
    GenServer.call(server, :get_temps)
  end

  def put_temp(server \\ __MODULE__, temp) do
    GenServer.cast(server, {:put_temp, temp})
  end

  def reset(server \\ __MODULE__) do
    GenServer.cast(server, {:reset})
  end

end
