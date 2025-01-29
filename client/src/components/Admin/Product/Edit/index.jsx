// import { useContext, useState } from "react";
// import { MyContext } from "../..";
// import { useNavigate } from "react-router-dom";


// function EditProduct() {

//     const { setOpenProfile } = useContext(MyContext);
//     const navigate = useNavigate()
//     const [error, setError] = useState();

//     return (
//         <div className="pt-[98px] overflow-y-auto px-5 pb-5" onClick={() => setOpenProfile(false)}>
//             <h1 className="text-3xl font-semibold">Edit Product</h1>
//             <h1 className="text-red-500 font-semibold"></h1>
//         </div>
//     )
// }

// export default EditProduct

import { useContext, useState, useEffect } from "react";
import { MyContext } from "../..";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    const { setOpenProfile } = useContext(MyContext);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        brand: "",
        sku: "",
        isActive: false,
        images: [],
        variants: [],
        material: "",
    });

    const [variant, setVariant] = useState({
        color: "",
        size: [],
        price: "",
        discount: "",
        stock: "",
    });

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:7001/api/product/${id}`);
                const result = await response.json();
                console.log(result);
                
                if (result.success) {
                    setFormData(result.data);
                } else {
                    setError("Failed to fetch product details.");
                }
            } catch (error) {
                setError("Error fetching product details.", error);
            }
        }

        fetchProduct();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVariantChange = (e) => {
        const { name, value } = e.target;
        if (name === "size") {
            setVariant({ ...variant, size: value.split(",").map((v) => v.trim()) });
        } else {
            setVariant({ ...variant, [name]: value });
        }
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const addVariant = () => {
        setFormData({
            ...formData,
            variants: [...formData.variants, variant],
        });
        setVariant({
            color: "",
            size: [],
            price: "",
            discount: "",
            stock: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        for (const key in formData) {
            if (key === "variants") {
                formData[key].forEach((v, index) => {
                    for (const vKey in v) {
                        formDataToSend.append(`variants[${index}][${vKey}]`, v[vKey]);
                    }
                });
            } else if (key === "images") {
                formData[key].forEach((image) => {
                    formDataToSend.append("images", image);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch(`http://localhost:7001/api/product/update/${id}`, {
                method: "PUT",
                body: formDataToSend,
            });

            const result = await response.json();

            if (result?.success === 1) {
                navigate('/admin/product');
            } else {
                setError(result?.message);
            }
        } catch (error) {
            setError("Error updating product:", error);
        }
    };

    return (
        <div
            className="pt-[98px] overflow-y-auto px-5 pb-5"
            onClick={() => setOpenProfile(false)}
        >
            <h1 className="text-3xl font-semibold">Edit Product</h1>
            <h1 className="text-red-500 font-medium">{error}</h1>
            <form
                className="bg-white p-5 mt-5 rounded-md grid sm:grid-cols-2 grid-cols-1 gap-5"
                onSubmit={handleSubmit}
            >
                {[
                    "name", "description", "category", "brand", "sku", "material"
                ].map((field) => (
                    <div key={field} className="col-span-1 space-y-2">
                        <label
                            htmlFor={field}
                            className="font-semibold text-xl opacity-80"
                        >
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <input
                            type="text"
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                            className="outline-none border rounded-md w-full px-4 text-lg font-medium py-2"
                            placeholder={`Enter ${field}`}
                        />
                    </div>
                ))}

                {/** Image Upload */}
                <div className="col-span-2 space-y-2">
                    <h2 className="font-semibold text-xl opacity-80">Product Images:</h2>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="outline-none border rounded-md px-4 text-lg font-medium py-2 w-full"
                    />
                </div>

                {/** Variants */}
                <div className="col-span-2 space-y-2">
                    <h2 className="font-semibold text-xl opacity-80">Variants:</h2>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                        {[
                            "color", "size", "price", "discount", "stock"
                        ].map((field) => (
                            <input
                                key={field}
                                type={
                                    ["price", "stock", "discount"].includes(field)
                                        ? "number"
                                        : "text"
                                }
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                name={field}
                                value={field === "size" ? variant[field].join(",") : variant[field]}
                                onChange={handleVariantChange}
                                className="outline-none border rounded-md px-4 text-lg font-medium py-2"
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addVariant}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                        Add Variant
                    </button>
                </div>

                {/** Submit Button */}
                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#43435e] text-white rounded-md text-lg font-semibold"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;