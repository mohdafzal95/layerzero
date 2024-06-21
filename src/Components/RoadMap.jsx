import React, { useEffect } from "react";
import frog from "../assets/swordfrog.png";
import FallingMeteors from "./starts";
import AOS from "aos";
import "aos/dist/aos.css";

const phases = [
  {
    title: "PHASE 1",
    description: "Birth of the MOYE FROG",
    items: [
      {
        itemHeading: "Tokenomics and Token launching",
        itemDescription: ["Design and launch the tokenomics for MOYE FROG."],
      },
      {
        itemHeading: "Community Building",
        itemDescription: [
          "Establish and grow communities across various social media platforms and within the ecosystem.",
        ],
      },
      {
        itemHeading: "Marketing Strategies",
        itemDescription: [
          "Develop and implement comprehensive marketing strategies.",
        ],
      },
      {
        itemHeading: "Consultations and Planning",
        itemDescription: [
          "Conduct consultations and plan for activities following the Airdrop & Listing.",
        ],
      },
    ],
  },
  {
    title: "PHASE 2",
    description: " MOYE FROG Navigates the Cosmos",
    items: [
      {
        itemHeading: "Freesale Dapp and Smart Contract Development",
        itemDescription: [
          "Create the dapp for the free sale and develop the necessary smart contract.",
        ],
      },
      {
        itemHeading: "Telegram Bot for Airdrop Management",
        itemDescription: [
          " Develop a Telegram bot to manage the airdrop program.",
        ],
      },
      {
        itemHeading: "Airdrop Smart Contract Development",
        itemDescription: [" Develop the smart contract for the airdrop."],
      },
      {
        itemHeading: "Promotion and Marketing Budget",
        itemDescription: [
          "    Allocate 1000 SOL for promotion and marketing efforts.",
        ],
      },
      {
        itemHeading: " Community Giveaway",
        itemDescription: [
          "Organize a giveaway with a prize pool of approximately $50,000 for the community.",
        ],
      },
    ],
  },
  {
    title: "PHASE 3",
    description: "MOYE FROG Claims New Territories",
    items: [
      {
        itemHeading: "Successful Launch on Radiym",
        itemDescription: ["Execute a successful launch."],
      },
      {
        itemHeading: "Promotion Budget",
        itemDescription: [
          "Allocate 800 SOL for promoting the intial marketing.",
        ],
      },
      {
        itemHeading: "Collaborations and Promotions",
        itemDescription: [
          "Collaborate with bloggers and influencers, and promote through sponsored ads.",
        ],
      },
      {
        itemHeading: " Ecosystem Collaborations",
        itemDescription: [
          " Continue building collaborations within the ecosystem.",
        ],
      },
      {
        itemHeading: "Airdrop Program Launch",
        itemDescription: ["Launch the airdrop program."],
      },
    ],
  },

  {
    title: "PHASE 4",
    description: " MOYE FROG Ready for New Heights",
    items: [
      {
        itemHeading: "Completion of Airdrop Distribution",
        itemDescription: ["Successfully conclude the Airdrop."],
      },
      {
        itemHeading: "Exchange Listings",
        itemDescription: [
          "List MOYE FROG on CoinMarketCap (CMC) and CoinGecko.",
          "List MOYE FROG on Tier-1 CEXs",
        ],
      },
      {
        itemHeading: "Airdrop Completion",
        itemDescription: ["Successfully complete the airdrop."],
      },
      {
        itemHeading: " Community Giveaway and Competitions",
        itemDescription: [
          "Conduct community giveaways.",
          "Organize community competitions and reward participants.",
        ],
      },
      {
        itemHeading: "Final Milestone",
        itemDescription: ["Propel MOYE FROG to new heights - TO THE MOON!"],
      },
    ],
  },
];

function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="roadmap"
      className="bg-ocean-blue-900 text-white py-12 md:py-16 relative overflow-hidden"
    >
      <FallingMeteors />
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
          data-aos="fade-up"
        >
          Roadmap
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-6 md:space-y-8 w-full md:w-2/3 lg:w-3/4">
            {phases.map((phase, index) => (
              <div
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
                key={index}
                className="bg-ocean-blue-800 rounded-3xl p-4 md:p-6"
              >
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
                  <h3 className="text-xl md:text-2xl border py-2 md:py-3 px-4 rounded-full font-bold w-fit">
                    {phase.title}
                  </h3>
                  <h3 className="text-xl md:text-2xl border py-2 md:py-3 px-4 rounded-full font-bold w-fit">
                    {phase.description}
                  </h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  {phase.items.map((item, index) => (
                    <div key={index}>
                      <li>{item.itemHeading}</li>
                      {item.itemDescription.map((description, index) => (
                        <p className="ml-1" key={index}>{`* ${description}`}</p>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="animate-float flex justify-center md:justify-end items-end mt-8 md:mt-0 md:w-1/3 lg:w-1/4">
            <img
              src={frog}
              alt="Frog"
              className="w-full md:max-w-xs lg:max-w-sm"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-pink-500 blur-2xl w-64 h-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
