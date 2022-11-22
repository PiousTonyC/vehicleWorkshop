import './Main.css';
import ImageSlider from '../../components/imageslider/ImageSlider';
import Services from '../../components/services/Services';

const Main = () => {
    return (
        <div className="mainBody">
            <ImageSlider></ImageSlider>
            <div className="about">
                <h2>Why us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nihil voluptates iure. Unde magnam laboriosam, nisi neque ea totam, suscipit facere iusto corrupti explicabo illo vitae, laborum dignissimos? Excepturi, corporis!</p>
            </div> 
            <Services/> 
            <div className="references">
                <h2>References and Recognition</h2>
                <ul>
                    <li>abcd</li>
                    <li>efg</li>
                    <li>hijk</li>
                    <li>lmnop</li>
                </ul>
            </div> 
            <div className="contact">
                <div className="div1">
                    <p>Contact: 90-9447368542 91-8963354546 <br/>Email: abc@gmail.com <a href="mailto:pioustony44733@gmail.com">Click here</a></p>
                </div>
                <div className="div2">
                    <p className="address">221B Baker Street <br/>London <br/> 8964553</p>
                </div>             
            </div>     
        </div>
    );
}
 
export default Main;