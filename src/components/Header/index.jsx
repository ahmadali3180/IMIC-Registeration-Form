import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between mb-8 sticky top-0 bg-gray-800">
      <div className="flex gap-4 items-center p-2">
        <img
          src="/IMIC_logo.jpeg"
          alt="IMIC-logo"
          className="h-20 w-auto rounded-full"
        />
        <h1 className="font-bold text-white">
          IMIC Student's Registeration Form
        </h1>
      </div>
    </header>
  );
}

export default Header;
