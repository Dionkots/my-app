import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Slider from '../components/Slider/Slider';
import '../styles/Home.css'



class Home extends Component {
    render(){
        return(
            <div class="Home">
                <Navbar className='Navbar'/>
                <Slider className='Slider'/>
                <div class="text-top-image">Κλείσε τις διακοπές σου!</div>
                <button class="button-top-image">ΚΡΑΤΗΣΤΕ ΤΩΡΑ!</button>
                <section className="Info">
                    <h2>DeniaStella Villas-Apartments</h2>
                 <hr></hr>
                    <p>
                    Το κατάλυμα μας σας υποδέχεται στην υπέροχη Σκάλα Ποταμιάς!

                    Διαθέτουμε δύο συγκροτήματα στα πιο βολικά σημεία της περιοχής , μόλις 30 μέτρα από την Χρυσή Ακτή.

                    Το συγκρότημα DeniaStella villas διαθέτει δύο δίχωρα διαμερίσματα , δύο studios , μία μεζονέτα δύο υπνοδωματίων και ένα οικογενειακό δωμάτιο.

                    Το συγκρότημα DeniaStella apartments διαθέτει δύο διαμερίσματα δύο υπνοδωματίων.

                    Όλα τα δωμάτια μας έχουν άνετο χώρο διαμονής , υψηλές προδιαγραφές και έχουν σχεδιαστεί για να καλύψουνε κάθε σας ανάγκη!
                    </p>
                    <h2>Rating & Awards</h2>
                    <hr></hr>  
                 </section>
                 <div className="Review-images">
                    <img alt='' className='column-images' src={process.env.PUBLIC_URL + '/social_media.png'}></img>
                    <img alt='' className='column-images'src={process.env.PUBLIC_URL + '/travelmyth.png'}></img>
                </div>
                <Footer className='Footer'/>
            </div>
        )
    }
}


export default Home;