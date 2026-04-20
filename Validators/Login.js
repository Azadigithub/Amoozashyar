import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "وارد کردن نام کاربری الزامی است.",
    })
    .min(1, "وارد کردن نام کاربری الزامی است.")
    .max(20, "نام کاربری باید حداکثر شامل 20 حرف باشد.")
    //40115041054488
    .min(14, " نام کاربری صحیح نیست."),
  // .regex()

  password: z
    .string({
      required_error: "وارد کردن رمز عبور الزامی است.",
    })
    .min(1, "وارد کردن رمز عبور الزامی است.")
    // 1278000114
    .min(10, "رمز عبور صحیح نیست.")
    .regex(/[0-9]/, "  رمز عبور فقط میتواند شامل ارقام باشد"),
  // .regex(/[a-z]/,"رمز عبور  باید  شامل یک حرف کوچک باشد.")
  // .regex(/[A-Z]/, " نام کاربری یا رمز عبور صحیح نمی باشد!")
  // .regex()
});

// export const signinschema = z
//   .object({
//     username: z
//       .string({ invalid_type_error: "نام کاربری باید متن باشد." })
//       .min(1, "وارد کردن نام کاربری الزامی است.")
//       .max(20, "نام کاربری باید حداکثر شامل 20 حرف باشد."),

//     password: z
//       .string({
//         required_error: "وارد کردن رمز عبور الزامی است.",
//         invalid_type_error: "رمز عبور باید متن باشد.",
//       })
//       .min(8, "رمز عبور باید حداقل شامل 8 حرف باشد.")
//       .max(30, "رمز عبور باید حداکثر شامل 30 حرف باشد.")
//       .regex(/[A-Z]/, "رمز عبور باید شامل یک حرف بزرگ باشد.")
//       .regex(/[0-9]/, "رمز عبور باید شامل ارقام باشد."),

//     repeatpassword: z.string({
//       required_error: "تکرار رمز عبور الزامی است.",
//       invalid_type_error: "تکرار رمز عبور باید متن باشد.",
//     }),

//     email: z
//       .string({ invalid_type_error: "ایمیل باید متن باشد." })
//       // .email("فرمت ایمیل صحیح نیست"),
//   })
//   .refine((data) => data.password === data.repeatpassword, {
//     message: "رمز عبور و تکرار آن باید یکسان باشند",
//     path: ["repeatpassword"],
//   });
