import './Main.css';
import ImageSlider from '../../components/imageslider/ImageSlider';
import Services from '../../components/services/Services';

const Main = () => {
    return (
        <div className="mainBody">
            <ImageSlider></ImageSlider>
            <div className="about">
                <h2>Why us</h2>
                <p>Our focus on the little things and quick, effective service set us apart from the competition. We also offer our clients the ability to access, edit, and delete information. We offer a one-stop shop for all of your vehicle-related needs. We guarantee the total security of both your data and automobiles.
                </p>
            </div> 
            <Services/> 
            <div className="references">
                <h2>References and Recognition</h2>
                <ul>
                    <li>Family owned business for 4 generations</li>
                    <li>5000 satisfied customers</li>
                    <li>over 50 devoted and diligent employees.</li>
                    <li>ranked amoung the top 10 </li>
                </ul>
            </div> 
            <div className="contact">
                <div className="div1">
                    <p>Contact: 90-9447368542 91-8963354546 <br/>Email: abc@gmail.com <a className='mailLink' href="mailto:pioustony44733@gmail.com">Click here</a></p>
                </div>
                <div className="div2">
                    <p className="address">221B Baker Street <br/>London <br/> 8964553</p>
                </div>             
            </div>     
        </div>
    );
}
 
export default Main;