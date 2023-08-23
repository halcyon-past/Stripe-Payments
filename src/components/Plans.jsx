import "./Plans.css"
import {useState} from "react"
import { auth } from "../firebase"

function Plans() {
    const [active, setActive] = useState("mobile");
    const [plan, setPlan] = useState("monthly");

  return (
    <div className="Plans">
        <button className="logout" onClick={() => {console.log("signout");auth.signOut()}}>Logout</button>
        <div className="container">
            <h1>Choose the right plan for you</h1>
            <div className="grid">
                <div className="slider">
                    <div className="slide">
                        <div onClick={()=>{setPlan("monthly")}} className={`option ${plan=="monthly" ? 'active' : ''}`}>Monthly</div>
                        <div onClick={()=>{setPlan("yearly")}} className={`option ${plan=="yearly" ? 'active' : ''}`}>Yearly</div>
                    </div>
                </div>
                <div onClick={()=>{setActive("mobile")}} className={`mobile ${active=="mobile" ? 'active' : ''}`}>Mobile</div>
                <div onClick={()=>{setActive("basic")}} className={`basic ${active=="basic" ? 'active' : ''}`}>Basic</div>
                <div onClick={()=>{setActive("standard")}} className={`standard ${active=="standard" ? 'active' : ''}`}>Standard</div>
                <div onClick={()=>{setActive("premium")}} className={`premium ${active=="premium" ? 'active' : ''}`}>Premium</div>
                <div className="type">Monthly Price</div>
                <div className={`price ${active=="mobile" ? 'active' : ''}`}>{`₹ ${plan=="monthly" ? '100' : '1000'}`}</div>
                <div className={`price ${active=="basic" ? 'active' : ''}`}>{`₹ ${plan=="monthly" ? '200' : '2000'}`}</div>
                <div className={`price ${active=="standard" ? 'active' : ''}`}>{`₹ ${plan=="monthly" ? '500' : '5000'}`}</div>
                <div className={`price ${active=="premium" ? 'active' : ''}`}>{`₹ ${plan=="monthly" ? '500' : '5000'}`}</div>
                <div className="type">Video Quality</div>
                <div className={`quality ${active=="mobile" ? 'active' : ''}`}>Good</div>
                <div className={`quality ${active=="basic" ? 'active' : ''}`}>Good</div>
                <div className={`quality ${active=="standard" ? 'active' : ''}`}>Better</div>
                <div className={`quality ${active=="premium" ? 'active' : ''}`}>Best</div>
                <div className="type">Resolution</div>
                <div className={`resolution ${active=="mobile" ? 'active' : ''}`}>480p</div>
                <div className={`resolution ${active=="basic" ? 'active' : ''}`}>480p</div>
                <div className={`resolution ${active=="standard" ? 'active' : ''}`}>1080p</div>
                <div className={`resolution ${active=="premium" ? 'active' : ''}`}>4k+HDR</div>
                <div className="types">Devices you can use to watch</div>
                <div className={`devices ${active=="mobile" ? 'active' : ''}`}>
                    <ul>
                        <li>Phone</li>
                        <li>Tablet</li>
                    </ul>
                </div>
                <div className={`devices ${active=="basic" ? 'active' : ''}`}>
                    <ul>
                        <li>Phone</li>
                        <li>Tablet</li>
                        <li>Computer</li>
                        <li>TV</li>
                    </ul>
                </div>
                <div className={`devices ${active=="standard" ? 'active' : ''}`}>
                    <ul>
                        <li>Phone</li>
                        <li>Tablet</li>
                        <li>Computer</li>
                        <li>TV</li>
                    </ul>
                </div>
                <div className={`devices ${active=="premium" ? 'active' : ''}`}>
                    <ul>
                        <li>Phone</li>
                        <li>Tablet</li>
                        <li>Computer</li>
                        <li>TV</li>
                    </ul>
                </div>
            </div>
            <button className="next">Next</button>
        </div>
    </div>
  )
}

export default Plans