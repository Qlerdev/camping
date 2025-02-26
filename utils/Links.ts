//การกำหนด type ใน TypeScript จะต้องตามด้วย : เช่น

//ถ้าตัวแปรที่ให้กำหนดมีมากเกินให้ใช้
type NavLinks = {
    href: String;
    label: String;
  };
  
export  const links: NavLinks[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/favorites",
      label: "Favorites",
    },
    {
      href: "/camps",
      label: "Camp",
    },
  ];