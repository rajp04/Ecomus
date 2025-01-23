import { useContext } from "react";
import { MyContext } from "../..";


function AddProduct() {

    const { setOpenProfile } = useContext(MyContext);

    return (
        <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
            <h1 className="text-3xl font-semibold">Add Product</h1>
        </div>
    )
}

export default AddProduct