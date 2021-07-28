import React from "react";

export default function Footer() {
    let footerStyle = {
        position: "fixed",
        bottom: "0",
        width: "100%",
    }
  return (
    <footer className="bg-light text-dark" style={footerStyle}>
        <p className="text-center footer-text">
            Copyright &copy; Raj Singh Parihar
        </p>
    </footer>
  );
}
