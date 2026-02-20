
import Link from "next/link";

export default function Button({
    children,
    href = "#",
    variant = "primary",
    icon,
    className = "",
}) {
    const base =
        "flex items-center  gap-4 text-sm font-medium rounded-lg transition-all duration-300";

    const variants = {
        primary:
            "bg-black text-white py-[11px] px-4 hover:opacity-90",
        secondary:
            "bg-white border border-gray-300 text-black py-2 px-4 hover:bg-gray-200",
        outline:
            "border border-gray-300 text-black px-4 py-2 hover:bg-gray-300 font-semibold text-sm",
        light:
            "bg-white/90 text-black px-6 h-10 hover:bg-gray-200",

        ghost:
            "border text-white px-6 h-10 hover:text-black hover:bg-white/10",
        link:
            "text-sm text-black font-medium hover:underline underline-offset-4 p-4",
        text: "text-blue-700 px-0 py-0 bg-transparent gap-0",
    };

    return (
        <Link
            href={href}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
            {icon && icon}
        </Link>
    );
}