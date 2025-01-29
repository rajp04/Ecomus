import { useContext } from "react";
import { MyContext } from "../..";
import { useLocation } from "react-router-dom";


function ViewProduct() {

    const { setOpenProfile } = useContext(MyContext);
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)
        }>
            <h1 className="text-3xl font-semibold">View Product</h1>
            <div className="bg-white p-5 rounded-md mt-5 grid grid-cols-2 gap-5">
                <div className="space-y-3 col-span-1">
                    <img src={state.images[0]} alt="" className="rounded-2xl" />
                    <div className="space-x-2 flex overflow-x-auto scroll-hidden">
                        {state.images.map((item, index) => (
                            <img src={item} key={index} alt="" className="rounded-md h-28 w-28 border border-gray-300" />
                        ))}
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <h1 className="font-semibold text-2xl">{state.name}</h1>
                    <h1 className="opacity-80">{state.description}</h1>
                    <h1 className="">Category:- {state.category}</h1>
                    <h1 className="">Brand:- {state.brand}</h1>
                    <div className="flex items-center space-x-3">
                        <h1 className="text-red-500 text-3xl">{state.variants[0].price - state.variants[0].discount}</h1>
                        <del className="opacity-70">{state.variants[0].price}</del>
                        <p className="bg-orange-500 px-4 py-1 rounded-full text-white">{(state.variants[0].discount / state.variants[0].price) * 100}% OFF</p>
                    </div>
                    <h1 className="font-semibold text-xl ">Color:-</h1>
                    <h1 className={`bg-[${state.variants[1].color}] h-7 w-7 border rounded-full p-2`}></h1>
                    <h1 className="font-semibold text-xl ">Size:-</h1>
                    <h1 className=''>{state.variants[0].size}</h1>
                    <h1 className="font-semibold text-xl ">SKU:- {state.sku}</h1>
                    <h1 className="font-semibold text-xl ">Material:- {state.material}</h1>
                    <h1 className="font-semibold text-xl ">Stock:- {state.variants[0].stock}</h1>
                </div>
            </div>
        </div >
    )
}

export default ViewProduct