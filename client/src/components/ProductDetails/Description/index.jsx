import { LuDot } from "react-icons/lu";
import { TbWashTemperature3 } from "react-icons/tb";
import { TbIroning1 } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashDrycleanOff } from "react-icons/tb";
import { TbWashTumbleDry } from "react-icons/tb";

function Description() {
    return (
        <div>
            <p>Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.</p>
            <div className="flex md:flex-row flex-col items-start pt-10 lg:space-x-20 md:space-x-10">
                <ul>
                    <h1 className="font-medium text-xl pb-3">Features</h1>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Front button placket</li>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Adjustable sleeve tabs</li>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Babaton embroidered crest at placket and hem</li>
                    </div>


                    <h1 className="font-medium text-xl pt-7 pb-5">Materials Care</h1>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Care: Hand wash</li>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <LuDot className="text-3xl" />
                        <li>Imported</li>
                    </div>
                </ul>
                <div className="md:pt-0 pt-7">
                    <h1 className="font-medium text-xl pb-5">Materials Care</h1>
                    <div className="flex items-center space-x-4 mb-3">
                        <TbWashTemperature3 className="border rounded-full border-black p-1 text-3xl text-gray-700"/>
                        <h1 className="opacity-50">Machine wash max. 30ºC. Short spin.</h1>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <TbIroning1 className="border rounded-full border-black p-1 text-3xl text-gray-700"/>
                        <h1 className="opacity-50">Iron maximum 110ºC.</h1>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <TbBleachOff className="border rounded-full border-black p-1 text-3xl text-gray-700"/>
                        <h1 className="opacity-50">Do not bleach/bleach.</h1>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <TbWashDrycleanOff className="border rounded-full border-black p-1 text-3xl text-gray-700"/>
                        <h1 className="opacity-50">Do not dry clean.</h1>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <TbWashTumbleDry className="border rounded-full border-black p-1 text-3xl text-gray-700"/>
                        <h1 className="opacity-50">Tumble dry, medium hear.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description