import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
    return ( 
        <div id="contact" className="mb-80">
             <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-4xl">Get In Touch</h1>
                <div className="line"/>
            </div>
            <ContactForm/>
        </div>
     );
}
 
export default Contact;