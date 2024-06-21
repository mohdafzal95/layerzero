function Header() {
  return (
    <main className="flex  pt-8 h-screen text-gray-300  overflow-hidden">
      <div className="flex flex-col w-full">
        <div className="md:mt-0 md:h-[376px] 2xl:mx-auto  h-[720px] w-[1280px]"
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            
            className="object-cover md:w-full md:h-ful h-[80%] w-[100%]"
          >
            <source
                        className=" border-2"

              src="https://claim-layerzero.foundation-8v.xyz/LayerZero+-+Header+V05+-+chrome.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:py-4  flex flex-col justify-center items-center mx-auto lg:my-auto md:my-0 my-16">
          <h1 className="font-['Roboto_Mono'] text-xl md:text-4xl md:tracking-widest ">
            The $ZRO Airdrop has officially
          </h1>
          <h1 className="font-['Roboto_Mono'] text-xl md:text-4xl md:tracking-widest">
            started!
          </h1>
          <p className="text-lg md:text-2xl font-['Roboto_Mono'] my-4 md:tracking-widest ">
            Check your eligibility now
          </p>
          <button className="tracking-widest font-bold font-['Roboto_Mono'] text-lg border rounded-lg py-2.5 px-5 cursor text-black bg-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </main>
  );
}

export default Header;
