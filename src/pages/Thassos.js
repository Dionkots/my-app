import React from "react";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from '../components/Slider2/Slider2';
import Footer from "../components/Footer/Footer";

class Thassos extends Component {
    render(){
        
        return(
            
            <div class="Thassos">
            <Navbar />
            <Slider className='Slider2'/>
            <section className="Info">
                    <h2>DeniaStella Villas-Apartments</h2>
                    <hr></hr>
                    <p>
                        
                     Η νήσος Θάσος βρίσκεται στη βόρεια Ελλάδα, αντίκρυ από τις ακτές της Ανατολικής Μακεδονίας.


                     Μια απόσταση 18 ναυτικών μιλίων τη χωρίζει από την Καβάλα και μόλις 6 μίλια από την Κεραμωτή και το Αεροδρόμιο της Καβάλας.


                     Το νησί είναι κατάφυτο με ελιές, πεύκα, πλατάνια, έλατα, φλαμουριές, κέδρα, κρανιές και άλλα ήμερα και άγρια δένδρα να καλύπτουν τους μικρούς κάμπους μέχρι τις κορφές των βουνών.


                     Οι δραστηριότητες που ευνοούνται στη Θάσο περιλαμβάνουν το θαλάσσιο σκι, το ψάρεμα, την πεζοπορία, την ορειβασία, το κυνήγι, καθώς και την παρατήρηση πουλιών.


                     Ένα τμήμα του νησιού έχει χαρακτηριστεί ως ιδιαίτερης αξίας για τα άγρια πουλιά και είναι από τις πρώτες πανελλαδικά περιοχές που έχουν μπει σε καθεστώς παρακολούθησης από εθελοντές των παραπάνω οργανώσεων.

 
                     </p>
                     </section>
                     
                <Footer className='Footer'/>
            </div>
        
        )
       
    }
}

export default Thassos;