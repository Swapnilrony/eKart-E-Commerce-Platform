import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'




const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = async(e)=>{
        e.preventDefault()
        console.log(formData);
        try {
          setLoading(true)
            const res = await axios.post(`http://localhost:8000/api/v1/user/register`, formData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(res.data.success){
                navigate('/verify')
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }finally{
          setLoading(false)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-pink-100'>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Enter given details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submitHandler}>
                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div className='grid gap-2'>
                                    <Label htmlFor="firstName">first Name</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="John"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='grid gap-2'>
                                    <Label htmlFor="lastName">last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='grid gap-2 col-span-2'>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <div className='relative'>
                                    <Input
                                        id="password"
                                        name="password"
                                        placeholder="create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type={showPassword ? 'text' : 'password'}
                                        required />
                                    {
                                        showPassword ? <EyeOff onClick={() => setShowPassword(false)} className='w-5 h-5 text-gray-700 absolute right-5 bottom-2' /> :
                                            <Eye onClick={() => setShowPassword(true)} className='w-5 h-5 text-gray-700 absolute right-5 bottom-2' />
                                    }
                                </div>

                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button onClick={submitHandler} type="submit" className="w-full cursor-pointer bg-black hover:bg-gray-700">
                       {loading? <><Loader2 className=" h-4 w-4 animate-spin mr-2"/>Please wait</>:'Signup'}
                    </Button>
                    <p className='text-gray-700 text-sm'>
                        Already have an account? <Link to={'/login'} className='hover:underline cursor-pointer text-pink-800'>Login</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Signup


// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Eye, EyeOff } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import axios from "axios";

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/user/register",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // backend should return { success: true, message: "...", user: ... }
//       if (res.data && res.data.success) {
//         toast.success(res.data.message || "Registered successfully");
//         navigate("/verify");
//       } else {
//         toast.error(res.data?.message || "Registration failed");
//       }
//     } catch (error) {
//       // guard for network errors or no response
//       const msg =
//         error?.response?.data?.message || error?.message || "Something went wrong";
//       toast.error(msg);
//       console.error("Signup error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-pink-100">
//       <Card className="w-full max-w-sm">
//         <CardHeader>
//           <CardTitle>Create your account</CardTitle>
//           <CardDescription>Enter given details below to create your account</CardDescription>
//         </CardHeader>

//         <CardContent>
//           {/* Keep the submit button inside the form (or use form's onSubmit) */}
//           <form onSubmit={submitHandler}>
//             <div className="flex flex-col gap-3">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="firstName">First Name</Label>
//                   <Input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     placeholder="John"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="grid gap-2">
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     placeholder="Doe"
//                     required
//                     value={formData.lastName} // fixed
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="grid gap-2 col-span-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="m@example.com"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="grid gap-2">
//                 <div className="flex items-center">
//                   <Label htmlFor="password">Password</Label>
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     name="password"
//                     placeholder="create a password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     type={showPassword ? "text" : "password"}
//                     required
//                   />
//                   {showPassword ? (
//                     <EyeOff
//                       onClick={() => setShowPassword(false)}
//                       className="w-5 h-5 text-gray-700 absolute right-5 bottom-2 cursor-pointer"
//                     />
//                   ) : (
//                     <Eye
//                       onClick={() => setShowPassword(true)}
//                       className="w-5 h-5 text-gray-700 absolute right-5 bottom-2 cursor-pointer"
//                     />
//                   )}
//                 </div>
//               </div>

//               <div className="mt-4 flex flex-col gap-2">
//                 <Button
//                   type="submit"
//                   className="w-full cursor-pointer bg-black hover:bg-gray-700"
//                   disabled={loading}
//                 >
//                   {loading ? "Signing up..." : "Signup"}
//                 </Button>
//                 <p className="text-gray-700 text-sm">
//                   Already have an account?{" "}
//                   <Link to={"/login"} className="hover:underline cursor-pointer text-pink-800">
//                     Login
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;
