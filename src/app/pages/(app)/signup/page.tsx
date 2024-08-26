
"use client";
import { Button, Container, PasswordInput, Space, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SigninSchema } from '../../../validation/signupSchema';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const demoProps = {
    m: 'center',
    mt: "lg",
    bg: "#9bc2ff",
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(SigninSchema),
  });  

  console.log("🚀 ~ Page ~ form:", form.values)
  console.log("🚀 ~ Page ~ error:", form.errors)
  const handleSubmit = async ({email, password, confirmPassword}: any) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password, confirmPassword})
      });
      
      if (response.ok) {
        router.push("/signin/page");
      } else {
        const errorData = await response.json();
        console.error("Signup error:", errorData.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size="xs" {...demoProps}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="Your email"
          {...form.getInputProps('email')}
        />
        <Space h={5} />
        <PasswordInput
          label="Password"
          {...form.getInputProps('password')}
        />
        <Space h={5} />
        <PasswordInput
          label="Confirm Password"
          placeholder='*******'
          {...form.getInputProps("confirmPassword")}
        />
        <Space h={5} />
        <Button radius={'lg'} size='md' type="submit" loading={isLoading}>Sign up</Button>
        <Space h={5} />
      </form>
    </Container>
  );
};

export default Page;

// import { signinSchema } from '@/app/validation/signinSchema';
// import { Button, Container, Input, PasswordInput, Space, Stack, TextInput } from '@mantine/core'
// import { useForm, zodResolver } from '@mantine/form';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'


// const page = () => {
//   const [isLoading, setIsloading] = useState(false);
//   const router = useRouter()
//     const demoProps = {
//         m: 'center',
//         mt:"lg",
//         bg: "#9bc2ff",
//       }
//      const form =async({email,password,confirmPassword}:any)=>{
//       try{
//         setIsloading(true);
//         const response=await fetch("../../api/(routes)/siginupRoute/route",{
//           body:JSON.stringify({email,password,confirmPassword}),
//           method:"POST",
//           headers:{"content-Type":"application/json",}
//         })
//         console.log(response);
//         if (response.ok) {
//           router.push("../signin/page");
//         }
//       }
//       catch(error:any){
//         error("error")
//       }finally {
//         setIsloading(false);
//       }
//      }
//     const form = useForm({
//       mode: 'uncontrolled',
//       initialValues: {
//         name: '',
//         email: '',
//         confirmPassword:"",
//       },
//       validate: zodResolver(signinSchema),
//     });
    
//     form.validate();
//     form.errors;
    
//   return (
//     <>
    
       
//             <Container size="xs" {...demoProps}>

                    
//     <TextInput label="email" placeholder="Your name"  key={form.key('email')}
//         {...form.getInputProps('email')} 
//          />
//     <Space h={5} />
//     <PasswordInput
//         label="password"
//         defaultValue="*******"
//         key={form.key('password')}
//         {...form.getInputProps('password')}
       
//   />
//    <Space h={5} />
//   <PasswordInput
//         label="confirm password"
//         defaultValue="******" 
//         placeholder='*******'     
//         key={form.key("confirmPassword")}
//         {...form.getInputProps("confirmPassword")}
//   />
//   <Space h={5} />
//   <Button radius={'lg'}size='md'>Sign up</Button>
//   <Space h={5} />
//   </Container>
  
    
//     </>
//   )
// }

// export default page