
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="You can learn and start minting your NFT"
        description="Trade and store NFTS, exchange & earn your fav crypto. Join over 15 million people using our Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Beautiful User Interface"
        description="Experience our beautiful user Interface. Intuitive and sleek design that is user friendly for users."
        mockupImg={assets.homeCards}
        reverse
      />


      <Features />


      <SectionWrapper 
        title="Responsive"
        description="Our NFT website is built to be responive with users' devices. You can access our web app via any devices."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Connect"
        description="You can show your art to the word. Using our website, you can display your art to the world in minutes."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made in {" "}
        <span className="bold">2022 </span>
        </p>
      </div>
    </>
  );
}

export default App;
