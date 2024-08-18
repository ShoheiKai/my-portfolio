export type Work = {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
    href: string; // リンク先
  };
  
  const data: Work[] = [
    {
      id: "1",
      title: "KAI's Portfolio",
      imageSrc: "/img/work_1.png",
      description: "私のポートフォリオサイトです。",
      href: "/"
    },
    
  ];
  
  export default data;