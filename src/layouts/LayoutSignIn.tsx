import HeaderCoin from "@/components/index/HeaderCoin";
import FooterCopyright from "@/components/index/FooterCopyright";

function LayoutSignIn({ children }: any) {
  return (
    <>
      <header>
        <HeaderCoin />
      </header>
      {children}
      <FooterCopyright />
    </>
  );
}

export default LayoutSignIn;
