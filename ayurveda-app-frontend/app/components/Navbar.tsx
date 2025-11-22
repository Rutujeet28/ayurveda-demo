export default function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/ingredient/ingredient1" },
    { label: "Ingredients", path: "/products/product1" },
    { label: "Login / Sign Up", path: "/ingredient/ingredient1" },
  ];

  return (
    <nav
      className="w-full px-8 py-3 flex items-center justify-between shadow-lg backdrop-blur-sm sticky top-0 z-50"
      style={{ backgroundColor: "rgba(204, 255, 255, 0.9)" }} // semi-transparent light cyan
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
        Ayurveda
      </h1>

      {/* Links */}
      <div className="flex gap-4 text-lg">
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.path}
            className="
              px-5 py-2 rounded-lg font-medium text-white 
              bg-gradient-to-br from-blue-400 to-teal-400
              hover:from-blue-500 hover:to-teal-500
              transition-all duration-300 shadow-md
              hover:shadow-lg
            "
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
