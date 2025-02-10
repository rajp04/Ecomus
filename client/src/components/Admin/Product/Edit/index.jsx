// import { useContext, useState } from "react";
// import { MyContext } from "../..";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// function EditProduct() {
//     const { setOpenProfile } = useContext(MyContext);
//     const [error, setError] = useState();
//     const navigate = useNavigate();
//     const { state } = useLocation();
//     const url = import.meta.env.VITE_SERVER_URL

//     const [formData, setFormData] = useState({
//         name: state.name,
//         description: state.description,
//         category: state.category,
//         brand: state.brand,
//         sku: state.sku,
//         isActive: state.isActive,
//         images: [],
//         variants: [],
//         material: state.material,
//     });

//     const [variant, setVariant] = useState({
//         color: state.variants.map(item => item.color),
//         size: state.variants.map(item => item.size),
//         price: state.variants.map(item => parseInt(item.price, 10) || 0),
//         discount: state.variants.map(item => parseInt(item.discount, 10) || 0),
//         stock: state.variants.map(item => parseInt(item.stock, 10) || 0),
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleVariantChange = (index, field, value) => {
//         setVariant(prevState => ({
//             ...prevState,
//             [field]: prevState[field].map((item, i) =>
//                 i === index ? (["price", "discount", "stock"].includes(field) ? parseInt(value) || 0 : value) : item
//             )
//         }));
//     };

//     const handleImageChange = (e) => {
//         setFormData({ ...formData, images: Array.from(e.target.files) });
//     };

//     const addVariant = () => {
//         setFormData({
//             ...formData,
//             variants: [...formData.variants, variant],
//         });
//         setVariant({
//             color: "",
//             size: [],
//             price: "",
//             discount: "",
//             stock: "",
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();

//         for (const key in formData) {
//             if (key === "variants") {
//                 formData[key].forEach((v, index) => {
//                     for (const vKey in v) {
//                         formDataToSend.append(`variants[${index}][${vKey}]`, v[vKey]);
//                     }
//                 });
//             } else if (key === "images") {
//                 formData[key].forEach((image) => {
//                     formDataToSend.append("images", image);
//                 });
//             } else {
//                 formDataToSend.append(key, formData[key]);
//             }
//         }

//         try {
//             const token = sessionStorage.getItem('token');

//             const response = await axios.post(`${url}/product/update/${state._id}`, formDataToSend, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             const result = await response.json();

//             if (result?.success === 1) {
//                 navigate('/admin/product');
//             } else {
//                 setError(result?.message);
//             }
//         } catch (error) {
//             setError("Error updating product:", error);
//         }
//     };

//     return (
//         <div
//             className="pt-[98px] overflow-y-auto px-5 pb-5"
//             onClick={() => setOpenProfile(false)}
//         >
//             <h1 className="text-3xl font-semibold">Edit Product</h1>
//             <h1 className="text-red-500 font-medium">{error}</h1>
//             <form
//                 className="bg-white p-5 mt-5 rounded-md grid sm:grid-cols-2 grid-cols-1 gap-5"
//                 onSubmit={handleSubmit}
//             >
//                 {[
//                     "name", "description", "category", "brand", "sku", "material"
//                 ].map((field) => (
//                     <div key={field} className="col-span-1 space-y-2">
//                         <label
//                             htmlFor={field}
//                             className="font-semibold text-xl opacity-80"
//                         >
//                             {field.charAt(0).toUpperCase() + field.slice(1)}:
//                         </label>
//                         <input
//                             type="text"
//                             id={field}
//                             name={field}
//                             value={formData[field]}
//                             onChange={handleInputChange}
//                             className="outline-none border rounded-md w-full px-4 text-lg font-medium py-2"
//                             placeholder={`Enter ${field}`}
//                         />
//                     </div>
//                 ))}

//                 {/** Image Upload */}
//                 <div className="col-span-2 space-y-2">
//                     <h2 className="font-semibold text-xl opacity-80">Product Images:</h2>
//                     <input
//                         type="file"
//                         multiple
//                         onChange={handleImageChange}
//                         className="outline-none border rounded-md px-4 text-lg font-medium py-2 w-full"
//                     />
//                 </div>

//                 {/** Variants */}
//                 <div className="col-span-2 space-y-2">
//                     <h2 className="font-semibold text-xl opacity-80">Variants:</h2>
//                     <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
//                         {state.variants.map((_, index) => (
//                             <div key={index} className="mb-4">
//                                 {["color", "size", "price", "discount", "stock"].map(field => (
//                                     <input
//                                         key={field}
//                                         type={["price", "stock", "discount"].includes(field) ? "number" : "text"}
//                                         placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                                         name={field}
//                                         value={variant[field][index]}
//                                         onChange={(e) => handleVariantChange(index, field, e.target.value)}
//                                         className="outline-none border rounded-md px-4 text-lg font-medium py-2 mr-2"
//                                     />
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                     <button
//                         type="button"
//                         onClick={addVariant}
//                         className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
//                     >
//                         Add Variant
//                     </button>
//                 </div>

//                 {/** Submit Button */}
//                 <div className="col-span-2 flex justify-end">
//                     <button
//                         type="submit"
//                         className="px-6 py-3 bg-[#43435e] text-white rounded-md text-lg font-semibold"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default EditProduct;



import { useContext, useState } from "react";
import { MyContext } from "../..";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {
    const { setOpenProfile } = useContext(MyContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { state } = useLocation();
    const url = import.meta.env.VITE_SERVER_URL;

    const [formData, setFormData] = useState({
        name: state.name,
        description: state.description,
        category: state.category,
        brand: state.brand,
        sku: state.sku,
        isActive: state.isActive,
        images: [],
        variants: [...state.variants],
        material: state.material,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleVariantChange = (index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            variants: prev.variants.map((variant, i) =>
                i === index ? { ...variant, [field]: value } : variant
            ),
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            images: Array.from(e.target.files),
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formDataToSend = new FormData();

    //     for (const key in formData) {
    //         if (key === "variants") {
    //             formData[key].forEach((v, index) => {
    //                 for (const vKey in v) {
    //                     formDataToSend.append(`variants[${index}][${vKey}]`, v[vKey]);
    //                 }
    //             });
    //         } else if (key === "images") {
    //             formData[key].forEach((image) => {
    //                 formDataToSend.append("images", image);
    //             });
    //         } else {
    //             formDataToSend.append(key, formData[key]);
    //         }
    //     }

    //     try {
    //         const token = sessionStorage.getItem("token");

    //         const response = await axios.put(`${url}/product/update/${state._id}`, formDataToSend, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });

    //         console.log(response);


    //         if (response.data.success === 1) {
    //             navigate("/admin/product");
    //         } else {
    //             setError(response.data.message || "Failed to update product");
    //         }
    //     } catch (error) {
    //         setError(error.response?.data?.message || "Error updating product");
    //     }
    // };

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
            const token = sessionStorage.getItem("token");

            const response = await axios.put(`${url}/product/update/${state._id}`, formDataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success === 1) {
                navigate("/admin/product");
            } else {
                setError(response.data.message || "Failed to update product");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error updating product");
        }
    };

    return (
        <div
            className="pt-[98px] overflow-y-auto px-5 pb-5"
            onClick={() => setOpenProfile(false)}
        >
            <h1 className="text-3xl font-semibold">Edit Product</h1>
            {error && <h1 className="text-red-500 font-medium">{error}</h1>}
            <form
                className="bg-white p-5 mt-5 rounded-md grid sm:grid-cols-2 grid-cols-1 gap-5"
                onSubmit={handleSubmit}
            >
                {["name", "description", "category", "brand", "sku", "material"].map((field) => (
                    <div key={field} className="col-span-1 space-y-2">
                        <label htmlFor={field} className="font-semibold text-xl opacity-80">
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
                        {formData.variants.map((variant, index) => (
                            <div key={index} className="mb-4">
                                {["color", "size", "price", "discount", "stock"].map((field) => (
                                    <input
                                        key={field}
                                        type={["price", "stock", "discount"].includes(field) ? "number" : "text"}
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        name={field}
                                        value={variant[field]}
                                        onChange={(e) => handleVariantChange(index, field, e.target.value)}
                                        className="outline-none border rounded-md px-4 text-lg font-medium py-2 mr-2"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/** Submit Button */}
                <div className="col-span-2 flex justify-end">
                    <button type="submit" className="px-6 py-3 bg-[#43435e] text-white rounded-md text-lg font-semibold">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;