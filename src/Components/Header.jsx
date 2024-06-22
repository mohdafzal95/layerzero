import bgVideo from "../assets/layerzero.mp4";
function Header() {
  return (
    <main className="flex  md:pt-8 h-screen text-gray-300  overflow-hidden w-full bg-black overflow-y-auto">
      <div className="flex flex-col w-full ">
        <div className="md:mt-0 2xl:mx-auto    w-[900px] md:w-[1280px] ">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="object-cover md:w-full md:h-ful h-[100%] w-[100%]"
          >
            <source className="" src={bgVideo} type="video/webm" />
            <source
              src="https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/2024-05/LayerZero+-+Header+Animation+-+V02.webm"
              type="video/webm"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:py-4  flex flex-col justify-center items-center mx-auto my-auto">
          <h1 className="font-['Roboto_Mono'] text-4xl  tracking-wider md:tracking-widest mx-12 text-center">
            The $ZRO Airdrop has officially started!
          </h1>
          <p className="text-xl md:text-2xl font-['Roboto_Mono'] my-4 md:tracking-widest ">
            Check your eligibility now
          </p>
          <button className="connectButton tracking-wide md:tracking-widest font-bold font-['Roboto_Mono'] text-lg border rounded-lg py-2.5 px-5 cursor text-black bg-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </main>
  );
}

export default Header;

// https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/2024-05/LayerZero+-+Header+Animation+-+V02.mp4
