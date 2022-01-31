import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getFTemps,
  getCTemps,
  getKTemps,
} from "./store/selectors/temps";

import {
  fetchTemps,
  addTemp,
} from "./store/actions";

import {
  setError
} from "./store/actions";

function Table() {
  const dispatch = useDispatch();
  const fTemps = useSelector(getFTemps);
  const cTemps = useSelector(getCTemps);
  const kTemps = useSelector(getKTemps);

  useEffect(() => {
    dispatch(fetchTemps());
  }, []);

  const [temp, setTemp] = useState(null);

  const onSubmit = () => {
    console.log(temp, +temp);
    if (isNaN(+temp)) {
      dispatch(setError({error: "Temperature must be a number."}));
      return;
    }

    dispatch(addTemp({temp: +temp}));
  }

  const temps = fTemps.zipAll(cTemps, kTemps);
  return (
    <div className="flex flex-col w-9/12 m-auto bg-sky-500/75 h-screen">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fahrenheit</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Celsius</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelvin</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {temps.map((t) => (
                  <tr key={t}>
                    {t.map((_t) => (
                      <td key={_t} className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm text-gray-500">
                              {_t}
                            </div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <label className="relative block items-center text-center m-auto mt-10">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-25 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center items-center" placeholder="Add a temp..." type="text" name="search" value={temp} onChange={(e) => setTemp(e?.target?.value)}/>
            </label>
            <button onClick={onSubmit}>Enter Temp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;
