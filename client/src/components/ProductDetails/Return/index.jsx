import { TbWashGentle } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashTumbleOff } from "react-icons/tb";
import { TbIroning2 } from "react-icons/tb";

function Return() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center text-3xl opacity-80 space-x-1">
        <TbWashGentle />
        <TbBleachOff />
        <TbWashTumbleOff />
        <TbIroning2 />
      </div>
      <h1 className="text-center opacity-60">LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt</h1>
    </div>
  )
}

export default Return