import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Anime Watchlist</h1>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2>Discover Your Next Favorite Anime</h2>
          <p>
            Explore the world of anime and keep track of what you've watched.
          </p>
          <Link to="/view">
            <button className="button">Browse Anime</button>
          </Link>
        </section>
        <section className="carousel">
          <h3>Featured Anime</h3>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            <div>
              <img
                src="https://th.bing.com/th/id/R.c7476091a421e76d7bf9225435ed61df?rik=Lje0dBECpG490g&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40600000%2fDate-A-Live-date-a-live-40671613-2270-1600.jpg&ehk=FwTqikeM7KUnJ%2f6V%2bwMy5yvwaHrv36NzgjuhyJMI5wc%3d&risl=&pid=ImgRaw&r=0"
                alt="Anime 1"
              />
              <p className="legend">Date A Live</p>
            </div>
            <div>
              <img
                src="https://i0.wp.com/doublesama.com/wp-content/uploads/2019/04/That-Time-I-Got-Reincarnated-as-a-Slime-cover.jpg?resize=640%2C960"
                alt="Anime 2"
              />
              <p className="legend">That Time I Got Reincarnated as a Slime</p>
            </div>
            <div>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/053/355/200/large/ray-olivay-chisato.jpg?1662012731"
                alt="Anime 3"
              />
              <p className="legend">Lycoris Recoil</p>
            </div>
          </Carousel>
        </section>
        <section className="popular-anime">
          <h3>Popular Anime</h3>
          <div className="anime-list">
            <div className="anime-item">
              <img
                src="https://theawesomeone.com/wp-content/uploads/2021/10/Tsukimichi-Moonlit-Fantasy-Season-2-Images-2.jpg"
                alt="Anime 1"
              />
              <p>Tsukimichi Moonlit Fantasy</p>
            </div>
            <div className="anime-item">
              <img
                src="https://th.bing.com/th/id/OIP.vjBjlMK2H0VPQCeyWoy9OwHaNK?rs=1&pid=ImgDetMain"
                alt="Anime 2"
              />
              <p>So I'm a Spider, So What?</p>
            </div>
            <div className="anime-item">
              <img
                src="https://s1.zerochan.net/Liko.600.3907025.jpg"
                alt="Anime 3"
              />
              <p>Pokemon</p>
            </div>
            <div className="anime-item">
              <img
                src="https://wallpapercave.com/wp/wp5868455.jpg"
                alt="Anime 4"
              />
              <p>We Never Learn</p>
            </div>
          </div>
        </section>
        <section className="latest-news">
          <h3>Latest News</h3>
          <div className="news-list">
            <div className="news-item">
              <h4>Kaiju No 8</h4>
              <p>
                Kaiju No. 8's anime is getting bigger than ever as it rounds out
                its final episodes, and the series is already teasing a new
                project announcement coming very soon!
              </p>
            </div>
            <div className="news-item">
              <h4>Pokemon</h4>
              <p>
                The Pokémon Company group announced a new Pokémon animated
                series that will follow a never-before-seen storyline and
                characters — including dual protagonists named Liko and Roy in
                the Japanese version of the series — as they set off on
                action-packed adventures across the Pokémon world.
              </p>
            </div>
            <div className="news-item">
              <h4>Unnamed Memory</h4>
              <p>
                Kadokawa unveiled a new promotional video for the television
                anime of Kuji Furumiya 's Unnamed Memory light novel series on
                Friday.
              </p>
            </div>
          </div>
        </section>
        <section className="about">
          <h3>About Us</h3>
          <p>
            We are passionate about anime and want to help you keep track of
            your favorites and discover new ones.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Anime Watchlist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
