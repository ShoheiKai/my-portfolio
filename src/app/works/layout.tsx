export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        <header className="text-[4rem] h-60 bg-white flex relative">
          <h1 className="left-[4rem] bottom-[2rem] absolute">Portfolio Page</h1>
        </header>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}