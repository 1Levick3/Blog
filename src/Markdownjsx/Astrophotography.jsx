
import fullmoon from "./full-moon.jpg";
import halfmoon from "./half-moon.jpg";
import jupiter2 from "./jupiter-2.jpg";
import jupitersaturnp from "./jupiter-saturn-conjunction-processed.jpg";
import jupitersaturn from "./jupiter-saturn-conjunction.jpg";
import jupiter from "./jupiter.jpg";
import ptolemy from "./m7-ptolemy.jpg";
import mars from "./mars.jpg";
import moonb from "./moon-bottom.jpg";
import moons from "./moon-side.jpg";
import moont from "./moon-top.jpg";
import pleiades from "./pleiades.jpg";
import quarterm from "./quarter-moon.jpg";
import saturn from "./saturn.jpg";
const Astrophotography=()=>{

    return(
        <div>
            <h5>31 December 2023</h5>
            <h1>Astrophotography</h1>
            <p>All these photos are taken using the camera Canon 400d + 300mm lens with no auto focus with long exposure(282*2.5 second exposures) and processed with deep sky stacker for crisp imaging.</p>
            <p><img src={fullmoon} alt="fullmoon" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Fullmoon</h5>
            </p>
            <p><img src={halfmoon} alt="halfmoon" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Halfmoon</h5>
            </p>
            <p><img src={quarterm} alt="quarterm" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>quartermoon</h5>
            </p>
            <p><img src={moonb} alt="moonb" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Moon(Bottom)</h5>
            </p>
            <p><img src={moons} alt="moons" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Moon(Side)</h5>
            </p>
            <p><img src={moont} alt="moont" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Moon(Top)</h5>
            </p>

            <p><img src={mars} alt="mars" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Mars</h5>
            </p>
            <p><img src={jupiter} alt="jupiter" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Jupiter (The prominent black dot is one of the 4 major moons of jupiter)</h5>
            </p>
            <p><img src={jupiter2} alt="jupiter2" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Jupiter(Other angle)</h5>
            </p>
            <p><img src={jupitersaturn} alt="jupitersaturn" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Jupiter Saturn conjunction</h5>
            </p>
            <p><img src={jupitersaturnp} alt="jupitersaturnp" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Jupiter Saturn conjunction processed</h5>
            </p>
            <p><img src={saturn} alt="saturn" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Saturn</h5>
            </p>
            <p><img src={ptolemy} alt="ptolemy" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Ptolemy M7 cluster</h5>
            </p>
            <p><img src={pleiades} alt="pleiades" style={{ width: '100%', borderRadius: '25px' }} />
            <h5>Pleiades star cluster</h5>
            </p>
        

            <p></p>

        </div>)
}
export default Astrophotography;