import React from "react";

function Header() {
  return (
    <header className="mb-8 sticky top-0">
      <div className="flex gap-4 items-center p-2  bg-gray-800">
        <img
          src="/IMIC_logo.jpeg"
          alt="IMIC-logo"
          className="h-20 w-auto rounded-full"
        />
        <h1 className="text-xl font-bold text-white">
          IMIC Student's Registeration Form
        </h1>
      </div>
    </header>
  );
}

export default Header;
