import "./style.css";
import Me from "./img/bg4.jpg";

const Home = () => {
  return (
    <div className="i">
        <div className="i-left" border="1">
          <div className="i-left-stuff">
            <h2 className="i-left-stuff1">Hello, We are</h2>
            <h1 className="i-left-name">Memory Palace</h1>
            <h3 className="i-desc">
              loreum ipsiumjnkvjdznnA
              <br />
              dscnkjsdc nkJCXN
              <br />
              djxcnijac nkjcn
              <br />
              hdbdi ajcnaks jdcnksjc ocasojc noasjcnosa osodo sdjn
            </h3>
            <div className="i-title">
              <div className="i-title-stuff">
                <div className="i-title-item">Memory</div>
                <div className="i-title-item">Music</div>
                <div className="i-title-item">Images</div>
                <div className="i-title-item">Videos</div>
                <div className="i-title-item">Notes</div>
              </div>
            </div>
          </div>
        </div>
      <div className="right">
        <div className="i-bg">

        </div>
        <img src={Me} alt="sherlock" className="i-img" />
      </div>
      <section className="mid">
        
      </section>
    </div>
  );
};

export default Home;
