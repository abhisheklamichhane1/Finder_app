import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);

  return alert !== null && (
    <p className="flex items-center mb-4 space-x-2">
        <p className="flex-1 text-base font-semibold leading-7 text-red-500">
            <strong>{alert.msg}</strong>
        </p>
    </p>
  )
}

export default Alert