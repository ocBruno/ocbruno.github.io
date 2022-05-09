import React, { useEffect } from "react";
import "./PageLayout.css";
type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  useEffect(() => {
    let dots = 0;

    setInterval(() => {
      if (dots === 0) {
        dots++;
      } else {
        dots = 0;
      }
      document.title = "Contact Me " + "|".repeat(dots);
    }, 1000);
  }, []);

  return (
    <main>
      {/* <Navbar /> */}
      {children}
    </main>
  );
}

export default PageLayout;
