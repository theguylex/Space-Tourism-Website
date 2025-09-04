import Header from '../components/Header';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="hero">
        <div className="hero-text">
          <h5 className="subheading">So you want to travel to</h5>
          <h1>Space</h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button className="explore">Explore</button>
      </main>
    </div>
  );
}

export default Home;