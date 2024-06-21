import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlinkingStarsBackground from "./BlinkingStarsBackground";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingMeteors from "./starts";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const BlogPost = () => {
  const { slug } = useParams();
  const [open, setOpen] = useState(null);

  // Sample blog post data
  const blogPosts = [
    // ... previous blog posts
    {
      slug: "steps-to-claim-your-moye-token",
      title: "AIRDROP GUIDE: STEPS TO CLAIM YOUR $MOYE TOKENS",
      author: "Moye",
      date: "April 20, 2023",
      time: "4:45 PM",
      image: blog1,
      content: `
        <h1 class="font-bold text-lg" data-aos="fade-right">How to Participate in the $MOYE Meme Coin Airdrop Program</h1>
        <p data-aos="fade-right">Are you ready to join the next viral sensation in the world of cryptocurrency? $MOYE is here, inspired by the rich and hilarious tapestry of Indian viral memes and comedy. Whether you're a seasoned crypto enthusiast or a newcomer looking to join the fun, our airdrop program offers an exciting opportunity to get your hands on some $MOYE tokens. This guide will take you through the steps to participate in the $MOYE airdrop program.</p>
        <br>
        <h1 class="font-bold text-lg" data-aos="fade-left">What is $MOYE?</h1>
        <p data-aos="fade-left">$MOYE is a new meme coin based on popular Indian memes and comedy. The project aims to bring laughter and financial opportunities to the crypto community. By leveraging the power of viral content and the ever-growing meme culture, $MOYE seeks to create a unique and engaging experience for its holders.</p>
        <br>
        <h1 class="font-bold text-lg" data-aos="fade-right">How to Participate in the $MOYE Airdrop</h1>
         <p data-aos="fade-right>Follow these simple steps to participate in the $MOYE airdrop and claim your free tokens. The process involves engaging with our social media channels and joining our community.</p>  
         <div data-aos="fade-right">
           <h2 class="font-extrabold">Step 1: Follow $MOYE on Twitter</h2>
           <div class="pl-4">
             <p>1. Visit the $MOYE Twitter page: Open your Twitter app or go to twitter.com and search for the official $MOYE Twitter handle.</p>
             <p>2. Follow $MOYE: Click the "Follow" button to stay updated with the latest news, updates, and memes from the $MOYE team.</p>
           </div>
         </div>
         <div data-aos="fade-right">
            <p>Step 2: Like and Retweet the Airdrop Announcement</p>
            <div class="pl-4">
              <p>1. Find the Airdrop Announcement Tweet: Scroll through the $MOYE Twitter feed to find the official airdrop announcement tweet.</p>
              <p>2. Like the Tweet: Click the heart icon to like the tweet. This helps spread the word and show your support for the project.</p>
              <p>3. Retweet the Tweet: Click the retweet icon and select "Retweet" to share the airdrop announcement with your followers. This is a crucial step to qualify for the airdrop.</p>       
            </div>
         </div>
         <div data-aos="fade-right">
           <p>Step 3: Join the $MOYE Telegram Channel</p>
           <div class="pl-4">
              <p>1. Download Telegram: If you don't have Telegram installed on your device, download it from the App Store (iOS) or Google Play Store (Android).</p>
               <p>2. Create a Telegram Account: Sign up and create your Telegram account.</p>
               <p>3. Join the $MOYE Telegram Channel: Search for the official $MOYE Telegram channel or click on the link provided in the Twitter bio or airdrop announcement tweet. Once you find the channel, click "Join" to become a member of the $MOYE community.</p>
           </div>
         </div>
         <div data-aos="fade-right">
           <p>Step 4: Fill Out the Airdrop Form</p>
           <div class="pl-4">
              <p>1. Stay Active in the Community: Engage with the $MOYE community on Twitter and Telegram. Participate in discussions, share memes, and stay informed about the project’s progress.</p>
              <p>2. Airdrop Distribution: The $MOYE team will announce the distribution date of the airdrop tokens. Keep an eye on the announcements to know when you will receive your $MOYE tokens in your wallet.</p>
           </div>
         </div>
         
         `,
    },

    {
      slug: "moye-the-beginning",
      title: "Indian Frog | $MOYE — THE BEGINNING",
      author: "Moye",
      date: "June 5, 2023",
      time: "4:45 PM",
      image: blog2,
      content: `
        <h1 data-aos="fade-right" class="font-bold text-lg">Indian Frog | $MOYE — THE BEGINNING</h1>
        <p data-aos="fade-right">In the vibrant world of cryptocurrency, a new meme coin has emerged, capturing the hearts and imaginations of enthusiasts around the globe. $MOYE, inspired by an endearing Indian frog named Moye, is not just another digital asset—it's a celebration of community, culture, and entertainment. This article delves into the origins of $MOYE, its unique appeal, and the exciting journey it promises.</p>
        <br>
        <h1 data-aos="fade-left"class="font-bold text-lg">Understanding $MOYE</h1>
        <p data-aos="fade-left">Moye is an Indian frog who first gained fame through viral memes. His expressive face and quirky antics resonated with people, making him a beloved figure in the meme world. This popularity laid the foundation for the creation of $MOYE, a cryptocurrency that embodies the spirit of humor and community associated with Moye</p>
           <br>
        <h1 data-aos="fade-right"class="font-bold text-lg">What is $MOYE?</h1>
        <p data-aos="fade-right">$MOYE is a decentralized meme coin built on the Solana Chain. Unlike traditional cryptocurrencies, which focus solely on financial transactions, $MOYE aims to create a vibrant community united by humor and shared interests. By leveraging the power of memes, $MOYE not only offers financial opportunities but also fosters a sense of belonging and fun.</p>      
           <br>
         <h1 data-aos="fade-left" class="font-bold text-lg">From Meme to Meme Coin</h1>
         <p data-aos="fade-left">Inspired by Moye Moye's viral success and the growing popularity of meme coins like Dogecoin and Shiba Inu, a group of passionate crypto enthusiasts and meme lovers decided to create $MOYE. The idea was simple yet powerful: combine the universal appeal of memes with the innovative potential of blockchain technology. Thus, $MOYE was born, bringing with it the spirit of fun and community embodied by Moye Moye.</p>
            <br>
          <h1 data-aos="fade-right" class="font-bold text-lg">Key Features of $MOYE  </h1>
          <p data-aos="fade-right">1. Community-Driven: $MOYE is governed by its community, with decisions about its future made through democratic voting processes. This ensures that every holder has a voice in the project's direction.</p>
          <p data-aos="fade-right">2. Deflationary Mechanism: To increase the value of $MOYE over time, a portion of each transaction is burned, reducing the total supply and creating scarcity.</p>
          <p data-aos="fade-right">3. Reward System: Holders of $MOYE are rewarded with additional tokens simply by holding them in their wallets, thanks to an automatic redistribution mechanism.</p>
          <p data-aos="fade-right">4. Charity and Social Impact: $MOYE aims to make a positive impact by supporting various charitable causes, particularly those related to environmental conservation and amphibian protection.</p>
          <br>
          <h1 data-aos="fade-left" class="font-bold text-lg">The Journey Begins: How to Get Involved</h1>
          <p data-aos="fade-left">The launch of $MOYE marks the beginning of an exciting journey. Here's how you can get involved and be a part of this innovative project:</p>
          <h2 data-aos="fade-left">1. Acquiring $MOYE</h2>
          <p data-aos="fade-left">To acquire $MOYE tokens, you need to follow these simple steps:<p>
            <div class="pl-4" data-aos="fade-left">
              <p>1. Set Up a Wallet: Create a wallet that supports Solana Chain, such as Phantom Wallet.</p>
             <p>2. Buy SOL: Purchase Solana from a cryptocurrency exchange like Binance or Coinbase.</p>         
             <p>3. Swap SOl for $MOYE: Use a decentralized exchange (DEX) like Jupiter to swap your Sol for $MOYE tokens.</p>
            </div>
           <h2 data-aos="fade-left">2. Joining the Community</h2>
          <p data-aos="fade-left">To stay updated with the latest news and be an active part of the $MOYE community, follow these steps:<p>
          <div class="pl-4" data-aos="fade-left">
            <p>1. Follow on Social Media: Follow the official $MOYE Twitter account and join the $MOYE Telegram channel. This will keep you informed about updates, events, and community activities.</p>
            <p>2. Engage and Participate: Like, retweet, and comment on posts. Participate in discussions and share your thoughts with fellow $MOYE enthusiasts.</p>
          </div>
          <h2 data-aos="fade-left">3. Participate in Airdrops and Giveaways</h2>
          <p data-aos="fade-left">$MOYE frequently organizes airdrops and giveaways to reward its community members. To participate, make sure to:</p>
           <div class="pl-4" data-aos="fade-left">
            <p>1. Follow Instructions: Carefully follow the instructions provided in the airdrop or giveaway announcements.</p>
            <p>2. Complete Tasks: Engage in tasks such as liking and retweeting specific posts, joining Telegram groups, and filling out registration forms.</p>
          </div>
          <br>
          <h1 data-aos="fade-right" class="font-bold text-lg">The Vision of $MOYE</h1>
          <p data-aos="fade-right">The vision of $MOYE extends beyond being just a meme coin. The project aims to create a robust ecosystem where entertainment, community engagement, and financial growth go hand in hand. By leveraging the power of memes, $MOYE seeks to build a global community united by humor and shared interests.</p>
          <p data-aos="fade-right">Future Plans</p>
          <p data-aos="fade-right">1. NFT Integration: The $MOYE team plans to launch a series of NFTs featuring unique and collectible Moye Moye artwork. These NFTs will provide additional value and engagement opportunities for the community.</p>
          <p data-aos="fade-right">2. Gaming and Metaverse: There are plans to explore partnerships with gaming and metaverse platforms to create interactive experiences featuring Moye Moye, enhancing the coin's utility and appeal.</p>
          <p data-aos="fade-right" >3. Charitable Initiatives: Continuing its commitment to social impact, $MOYE will regularly support charitable causes, particularly those focused on environmental conservation and amphibian protection.</p>
          <br>
          <h1 data-aos="fade-left" class="font-bold text-lg">Conclusion</h1>
          <p data-aos="fade-left">$MOYE is more than just a meme coin; it's a movement that brings together humor, community, and financial opportunity. Inspired by the beloved Indian frog Moye, this cryptocurrency aims to create a vibrant ecosystem where entertainment and engagement go hand in hand with financial growth. As $MOYE embarks on its journey, it promises a future filled with exciting milestones, unique experiences, and a strong, united community</p>
          <p data-aos="fade-left">Join the $MOYE movement today and be part of a revolutionary journey that combines the best of memes, crypto, and community spirit. Together, we can take Moye from a viral meme to a global phenomenon, making $MOYE the next big name in the world of cryptocurrency.</p>
         `,
    },

    {
      slug: "the-era-of-thematic-cryptocurrencies",
      title: "Unleashing Novelty: The Era of Thematic Cryptocurrencies",
      author: "Moye",
      date: "June 10, 2023",
      time: "4:45 PM",
      image: blog3,
      content: `
        <h1 data-aos="fade-right" class="font-bold text-lg">Unleashing Novelty: The Era of Thematic Cryptocurrencies</h1>
        <p data-aos="fade-right">In the ever-evolving landscape of cryptocurrencies, a new player has emerged, poised to disrupt the market with its unique approach and cultural resonance. Enter $MOYE, a meme-inspired project that has captured the imagination of the Indian online community and beyond. With its catchy name and playful concept, $MOYE is not just another digital currency; it's a cultural phenomenon in the making</p>
        <br>
       <h1 data-aos="fade-left"class="font-bold text-lg">Tokenomics</h1>
       <p data-aos="fade-left">$MOYE boasts a carefully crafted tokenomics structure designed to ensure stability and sustainability while fueling growth and innovation. Here's a breakdown of its token allocation:</p>
        <h2 data-aos="fade-left">How to Participate in the $MOYE Airdrop</h2>
         <p data-aos="fade-left">Follow these simple steps to participate in the $MOYE airdrop and claim your free tokens. The process involves engaging with our social media channels and joining our community.</p>      
         <div class="pl-4" data-aos="fade-left">
           <li>Airdrop: 10%</li>
            <li>Treasury: 10%</li>
            <li>Staking: 37.5%</li>
            <li>Liquidity: 20.25%</li>
            <li>Marketing: 10%</li>
            <li>Community: 12.25%</li>
         </div>
         <br>
         <h1 data-aos="fade-right" class="font-bold text-lg">Key Points</h1>
         <p data-aos="fade-right">$MOYE's journey begins with its aridrop to community. The project's transparent and community-driven approach has garnered significant attention, with a growing number of enthusiasts eagerly awaiting their chance to join the $MOYE movement.</p>         
         <p data-aos="fade-right">Looking ahead, $MOYE has exciting plans for expansion and adoption, with upcoming listings on prominent exchanges like MEXC and LBank. These listings are not just milestones for the project but also significant steps towards increasing accessibility and liquidity, ultimately cementing $MOYE's position in the cryptocurrency market.</p>
         <br>
         <h1 data-aos="fade-left" class="font-bold text-lg">Conclusion</h1>
         <p data-aos="fade-left">As thematic cryptocurrencies continue to gain traction, $MOYE stands out as a shining example of innovation and creativity in the space. Its meme-inspired concept, coupled with a robust tokenomics model and strategic partnerships, positions it for success in the ever-evolving digital economy. Whether you're a seasoned crypto investor or a meme enthusiast looking to ride the wave of cultural relevance, $MOYE offers something for everyone. Get ready to embrace the novelty and join the $MOYE revolution today!</p>

         `,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000 });
  }, []);

  const faqs = [
    {
      question: "What is the total supply of $MOYE tokens?",
      answer:
        " The total supply of $MOYE tokens will be announced on the official website and social media channels.",
    },
    {
      question: "How many $MOYE tokens will be distributed in the airdrop?",
      answer:
        " The exact number of tokens allocated for the airdrop will be specified in the announcement tweet and on the airdrop form.",
    },
    {
      question:
        "Can I participate in the airdrop if I don't have a Twitter or Telegram account?",
      answer:
        " No, participation in the airdrop requires you to follow $MOYE on Twitter, like and retweet the announcement, and join the Telegram channel.",
    },
    {
      question: " Is there a deadline for participating in the airdrop?",
      answer:
        " Yes, the deadline for participating in the airdrop will be mentioned in the official announcement. Make sure to complete all the steps before the deadline to qualify.",
    },
    {
      question: "When will I receive my $MOYE tokens?",
      answer:
        "The distribution date will be announced after the airdrop registration period ends. Keep an eye on the official channels for updates.",
    },
    {
      question: "Are there any fees to participate in the airdrop?",
      answer:
        "No, participating in the $MOYE airdrop is completely free. Beware of any scams asking for payment or personal information.",
    },
  ];

  const currentBlogPost = blogPosts.find((post) => post.slug === slug);

  if (!currentBlogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-auto bg-ocean-blue-900">
      <FallingMeteors></FallingMeteors>
      <Navbar />
      <div className="container pt-40 mx-auto py-8 px-4 sm:px-6 lg:px-8 z-10">
        <div className=" z-10 absolute">
          <BlinkingStarsBackground />
        </div>
        <h1 className="text-4xl text-white font-bold mb-4">
          {currentBlogPost.title}
        </h1>
        <div className="flex items-center mb-4">
          <p className="text-gray-600 text-sm mr-4">{currentBlogPost.author}</p>
          <p className="text-gray-600 text-sm">
            {currentBlogPost.date} - {currentBlogPost.time}
          </p>
        </div>
        {/* <img
          data-aos="zoom-in-up"
          src={currentBlogPost.image}
          alt={currentBlogPost.title}
          className="w-full  mb-4 rounded-3xl border-2"
        /> */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 mx-auto">
          <img
            data-aos="zoom-in-up"
            src={currentBlogPost.image}
            alt={currentBlogPost.title}
            className="w-full mb-4 rounded-3xl border-2 object-cover"
          />
        </div>

        <div className=" z-10 absolute">
          <BlinkingStarsBackground />
        </div>
        <div
          className=" text-white"
          dangerouslySetInnerHTML={{ __html: currentBlogPost.content }}
        />
      </div>
      <div data-aos="fade-up" className="flex justify-center text-white">
        <div className="w-full md:w-2/3 px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            <div className=" object-cover  absolute">
              <BlinkingStarsBackground />
            </div>
            {faqs.map((faq, index) => (
              <div key={index} className="w-full py-4">
                <h3
                  className="flex justify-between items-center border border-white rounded-full px-3 py-4 md:py-6 text-base md:text-lg font-medium cursor-pointer"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 text-sm md:text-base ${
                      open === index ? "rotate-90" : ""
                    }`}
                  >
                    &#9654;
                  </span>
                </h3>
                {open === index && (
                  <div className="mt-4 px-3">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
