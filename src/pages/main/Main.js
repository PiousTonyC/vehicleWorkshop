import './Main.css';
import ImageSlider from '../../components/imageslider/ImageSlider';
import Services from '../../components/services/Services';

const Main = () => {
    return (
        <div className="mainBody">
            <ImageSlider></ImageSlider>
            <div className="about">
                <h2>Why us</h2>
                <p>It's our attention to small details ,fast and efficient service that makes as stand out from the rest.We also provide our customers services to view, update, delete details. We provide a one-stop destination for all your services for your vehicle.
                We ensure complete safety of vehicles as well as your data.
                </p>
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