import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/ImageSlides.js";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Your Recipe Exchange, Reimagined!</h1>
            <p>Discover, share, and explore a world of flavors with SavorySwap </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Swap recipes, connect with fellow foodies, and bring your cooking game to the next level. 
            Whether you&apos;re perfecting a family recipe or looking for inspiration, 
            SavorySwap is your go-to hub for tasty discoveries and a vibrant foodie community.
          </p>
          <p>
            SavorySwap is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why SavorySWap?</h2>
          <p>
            SavorySwap is your ultimate platform for discovering, sharing, 
            and enjoying amazing recipes from around the world. 
            Whether you&apos;re a seasoned chef or a passionate home cook, 
            SavorySwap connects you with a vibrant community of food enthusiasts.
          </p>
          <p>
            Explore trending dishes, share your culinary creations, 
            and engage with food lovers who share your passion for cooking. 
            With SavorySwap, every recipe is an opportunity to connect, create, and savor.
          </p>
        </section>
      </main>
    </>
  );
}
