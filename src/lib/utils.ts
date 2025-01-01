import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * function `cn` dùng để kết hợp (concatenate) các className, đồng thời tự động
 * loại bỏ hoặc ghi đè các className xung đột nhờ thư viện tailwind-merge.
 * - `clsx`: nối các giá trị className một cách linh hoạt (bỏ qua null/undefined/false, v.v.)
 * - `twMerge`: hợp nhất và xử lý xung đột class theo quy tắc của Tailwind CSS
 */


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
