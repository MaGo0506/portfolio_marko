import ContactForm from "@/components/Contact/ContactForm";
import fonts from "@/app/fonts";

const Contact = () => {
    return ( 
        <div id="contact" className="lg:mb-72 mb-32 pt-20 container mx-auto">
             <div className="flex items-center gap-5 mb-8">
                <h1 className={`font-semibold text-nowrap text-2xl lg:text-4xl ${fonts.poppins.className}`}>Get In Touch</h1>
                <div className="line"/>
            </div>
            <ContactForm />
        </div>
     );
}
 
export default Contact;